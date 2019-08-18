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
    public class BookingCancelRepository : RepositoryBase<TblBookingCancelMaster>, IBookingCancelRepository
    {
        private ContractLayerDBContext ktConContext;
        public BookingCancelRepository(ContractLayerDBContext ktConContext) : base(ktConContext)
        {
            this.ktConContext = ktConContext;
        }

        public IEnumerable<TblBookingCancelMaster> GetAllBookingCancel()
        {

            var TblBookingCancelMaster = this.ktConContext.TblBookingCancelMaster
                       .Include(blog => blog.Location)
                       .Include(blog => blog.Customer)
                       .Include(blog => blog.Plan)
                       .ToList();
            return TblBookingCancelMaster;
        }

        public int GetBookingCancelNo()
        {
            int maxBookingCancelNo = this.ktConContext.TblBookingCancelMaster.Select(p => p.RecordNo).DefaultIfEmpty(0).Max() + 1;
            return maxBookingCancelNo;
        }
        bool IBookingCancelRepository.Authenticate()
        {
            return true;
        }

        public void SaveBookingCancelDetails(TblBookingCancelMaster master)
        {
            var entity = this.ktConContext.TblBookingMaster.FirstOrDefault(item => item.CustomerId == master.CustomerId && item.PlanId == master.PlanId);

            if (entity != null)
            {
                entity.NoOfPlanCancel = master.CancelNoOfPlan;
                ktConContext.TblBookingMaster.Update(entity);
                ktConContext.SaveChanges();
            }
        }

        public void SaveCancelBookinginCustomerTransaction(TblBookingCancelMaster master)
        {
            if (master.PkId > 0)
            {

                var entity = this.ktConContext.TblCustomerTransaction.FirstOrDefault(item => item.CustomerId == master.CustomerId && item.BookingId == master.RecordNo.ToString() && item.TransactionType == typeof(TblBookingCancelMaster).ToString());

                if (entity != null)
                {
                    entity.CancelBookingAmt = master.PaidAmount;
                    ktConContext.TblCustomerTransaction.Update(entity);
                    ktConContext.SaveChanges();
                }
            }
            else
            {
                TblCustomerTransaction custransList = new TblCustomerTransaction()
                {
                    CustomerId = master.CustomerId,
                    TransactionDate = master.BookungCancelDate,
                    TransactionType = typeof(TblBookingCancelMaster).ToString(),
                    BookingId = master.RecordNo.ToString(),
                    BookingAmount = 0,
                    BookingReceivedAmt = 0,
                    CancelBookingAmt=master.PaidAmount,
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

        public void DeleteBookingTransaction(TblBookingCancelMaster master)
        {
            var toBeDeletecusttrans = this.RepositoryContext.Set<TblCustomerTransaction>().Where(s => s.CustomerId == master.CustomerId && s.BookingId == master.RecordNo.ToString() && s.TransactionType == typeof(TblBookingCancelMaster).ToString());
            RepositoryContext.RemoveRange(toBeDeletecusttrans);
            this.RepositoryContext.SaveChanges();

            var entity = this.ktConContext.TblBookingMaster.FirstOrDefault(item => item.CustomerId == master.CustomerId && item.PlanId == master.PlanId);

            if (entity != null)
            {
                entity.NoOfPlanCancel = entity.NoOfPlanCancel - master.CancelNoOfPlan;
                ktConContext.TblBookingMaster.Update(entity);
                ktConContext.SaveChanges();
            }
        }
    }
}
