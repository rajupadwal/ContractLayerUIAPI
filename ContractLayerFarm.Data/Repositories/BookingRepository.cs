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
    public class BookingRepository : RepositoryBase<TblBookingMaster>, IBookingRepository
    {
        private ContractLayerDBContext ktConContext;
        public BookingRepository(ContractLayerDBContext ktConContext) : base(ktConContext)
        {
            this.ktConContext = ktConContext;
        }

        public IEnumerable<TblBookingMaster> GetAllBooking()
        {

            var TblBookingMaster = this.ktConContext.TblBookingMaster
                       .Include(blog => blog.Location)
                       .Include(blog => blog.Customer)
                       .Include(blog => blog.Plan)
                       .Include(blog=>blog.Employee)
                       .ToList();
            return TblBookingMaster;
        }

        public IEnumerable<TblBookingMaster> GetAllBookingForCustomer(TblBookingMaster master)
        {

            var TblBookingMaster = this.ktConContext.TblBookingMaster
                       .Include(blog => blog.Location)
                       .Include(blog => blog.Customer)
                       .Include(blog => blog.Plan)
                       .Include(blog => blog.Employee)
                       .Where(s => s.CustomerId == master.CustomerId)
                       .ToList();
            return TblBookingMaster;
        }

        public int GetBookingNo()
        {
            int maxBookingNo = this.ktConContext.TblBookingMaster.Select(p => p.RecordNo).DefaultIfEmpty(0).Max()+1;
            return maxBookingNo;
        }

        bool IBookingRepository.Authenticate()
        {
            return true;
        }

        public void SaveBookinginCustomerTransaction(TblBookingMaster master)
        {
            if (master.PkId > 0)
            {

                var entity = this.ktConContext.TblCustomerTransaction.FirstOrDefault(item => item.CustomerId == master.CustomerId && item.BookingId == master.RecordNo.ToString() && item.TransactionType== typeof(TblBookingMaster).ToString());

                if (entity != null)
                {
                    entity.BookingAmount = master.Amount;
                    entity.BookingReceivedAmt = master.PaidAmount;
                    ktConContext.TblCustomerTransaction.Update(entity);
                    ktConContext.SaveChanges();
                }
            }
            else
            {
                TblCustomerTransaction custransList = new TblCustomerTransaction()
                {
                    CustomerId = master.CustomerId,
                    TransactionDate = master.BookingDate,
                    TransactionType = typeof(TblBookingMaster).ToString(),
                    BookingId = master.RecordNo.ToString(),
                    BookingAmount = master.Amount,
                    BookingReceivedAmt = master.PaidAmount,
                    BillId = "0",
                    BillAmount = 0,
                    BillPaidAmt = 0,
                    PaymentType = master.PaymentMethod,
                    Narration = master.Narration,
                    ReceiptNo = "0"
                };
                this.RepositoryContext.Set<TblCustomerTransaction>().Add(custransList);
                this.RepositoryContext.SaveChanges();
            }
        }

        public void DeleteBookingTransaction(TblBookingMaster master)
        {
            var toBeDeletecusttrans = this.RepositoryContext.Set<TblCustomerTransaction>().Where(s => s.CustomerId == master.CustomerId && s.BookingId == master.RecordNo.ToString() && s.TransactionType == typeof(TblBookingMaster).ToString());
            RepositoryContext.RemoveRange(toBeDeletecusttrans);
            this.RepositoryContext.SaveChanges();
        }
    }
}
