using System;
using System.Collections.Generic;
using System.Text;
using ContractLayerFarm.Data.Contract;
using ContractLayerFarm.Data.Models;
using ContractLayerFarm.Data.Repositories;

using System.Linq.Expressions;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace ContractLayerFarm.Data.Repositories
{
    public class SalesreceiptRepository : RepositoryBase<TblSalesReceipt>, ISalesreceiptRepository
    {
        private ContractLayerDBContext ktConContext;
        public SalesreceiptRepository(ContractLayerDBContext ktConContext) : base(ktConContext)
        {
            this.ktConContext = ktConContext;
        }

        bool ISalesreceiptRepository.Authenticate()
        {
            return true;
        }

        public int GetSaleReceiptNo()
        {
            int maxSaleReceiptNo = this.ktConContext.TblSalesReceipt.Select(p => Convert.ToInt32(p.ReceiptNo)).DefaultIfEmpty(0).Max() + 1;
            return maxSaleReceiptNo;
        }
        public decimal GetCustomerOutstandingAmt(TblSalesReceipt master)
        {
            decimal outstandingAmt=0;
            if (master.PaymentType == "Against Bill")
            {
                var entryPoint = (from ct in ktConContext.TblCustomerTransaction
                                  where ct.CustomerId == master.Customer.CustomerId
                                  select new 
                                  {
                                      billamt=ct.BillAmount,
                                      billpaid=ct.BillPaidAmt
                                  });

                outstandingAmt = Convert.ToDecimal(entryPoint.Sum(x => Convert.ToDecimal(x.billamt)) - entryPoint.Sum(k => Convert.ToDecimal(k.billpaid)));

            }
            if (master.PaymentType == "Against Booking")
            {
                var entryPoint = (from ct in ktConContext.TblCustomerTransaction
                                  where ct.CustomerId == master.Customer.CustomerId
                                  select new
                                  {
                                      bookingamt = ct.BookingAmount,
                                      bookingrev = ct.BookingReceivedAmt,
                                      cancelbookingamt=ct.CancelBookingAmt
                                  });

                outstandingAmt = Convert.ToDecimal( entryPoint.Sum(x => Convert.ToDecimal(x.bookingamt)) - entryPoint.Sum(k => Convert.ToDecimal(k.bookingrev)) - entryPoint.Sum(k => Convert.ToDecimal(k.cancelbookingamt)));
            }
                
            return outstandingAmt;
        }
    public IEnumerable<TblSalesReceipt> GetAllSaleReceipts()
        {

            var TblSalesReceipt = this.ktConContext.TblSalesReceipt
                       .Include(blog => blog.Location)
                       .Include(blog => blog.Customer)
                       .ToList();
            return TblSalesReceipt;
        }


        public void SaveCustomerTransaction(TblSalesReceipt master)
        {
            decimal? bookReceiptAmt = 0;
            decimal? billPaidAmt = 0;
            if (master.PaymentType == "Against Booking")
            {
                bookReceiptAmt = master.CashAmount;
                billPaidAmt = 0;
            }
            else
            {
                bookReceiptAmt = 0;
                billPaidAmt = master.CashAmount;
            }

            if (master.PkId > 0)
            {
                var entity = this.ktConContext.TblCustomerTransactions.FirstOrDefault(item => item.ReceiptNo == master.ReceiptNo.ToString() && item.TransactionType == typeof(TblSalesReceipt).ToString());

                if (entity != null)
                {
                    entity.BookingReceivedAmt = bookReceiptAmt;
                    entity.BillPaidAmt = billPaidAmt;
                    ktConContext.TblCustomerTransactions.Update(entity);
                    ktConContext.SaveChanges();
                }
            }
            else
            {
                TblCustomerTransaction custransList = new TblCustomerTransaction()
                {
                    CustomerId = master.CustomerId,
                    TransactionDate = master.Date,
                    TransactionType = typeof(TblSalesReceipt).ToString(),
                    BookingId = "0",
                    BookingAmount = 0,
                    BookingReceivedAmt = bookReceiptAmt,
                    BillId = "0",
                    BillAmount = 0,
                    BillPaidAmt = billPaidAmt,
                    PaymentType = master.PaymentType,
                    Narration = master.Narration,
                    ReceiptNo = master.ReceiptNo.ToString(),
                };
               
                this.RepositoryContext.Set<TblCustomerTransaction>().Add(custransList);
                this.RepositoryContext.SaveChanges();
            }
        }
    }
}
