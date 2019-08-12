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
    public class PurchasepaymentRepository : RepositoryBase<TblPurchasepayment>, IPurchasepaymentRepository
    {
        private ContractLayerDBContext ktConContext;
        public PurchasepaymentRepository(ContractLayerDBContext ktConContext) : base(ktConContext)
        {
            this.ktConContext = ktConContext;
        }

        bool IPurchasepaymentRepository.Authenticate()
        {
            return true;
        }

        public IEnumerable<TblPurchasepayment> GetAllPurchasepayment()
        {

            var TblPurchasepayment = this.ktConContext.TblPurchasepayment
                       .Include(blog => blog.Location)
                       .Include(blog => blog.Supplier)
                       .ToList();
            return TblPurchasepayment;
        }
        public int GetPurchasePaymentNo()
        {
            int maxPurchasePaymentNo = this.ktConContext.TblPurchasepayment.Select(p => p.RecordNo).DefaultIfEmpty(0).Max() + 1;
            return maxPurchasePaymentNo;
        }

        public decimal GetSupplierOutstandingAmt(TblPurchasepayment master)
        {
            decimal outstandingAmt = 0;
            
                var entryPoint = (from ct in ktConContext.TblSupplierTransaction
                                  where ct.SupplierId == master.Supplier.SupplierId
                                  select new
                                  {
                                      purchaseamt = ct.PurchaseAmount,
                                      purchasepaid = ct.PurchasePaidAmt
                                  });

                outstandingAmt = Convert.ToDecimal(entryPoint.Sum(x => Convert.ToDecimal(x.purchaseamt)) - entryPoint.Sum(k => Convert.ToDecimal(k.purchasepaid)));

            return outstandingAmt;
        }

        public void SaveSupplierTransaction(TblPurchasepayment master)
        {
            if (master.PkId > 0)
            {
                var entity = this.ktConContext.TblSupplierTransaction.FirstOrDefault(item => item.PaymentVocherNo == master.RecordNo.ToString() && item.TransactionType == "Purchase Payment");

                if (entity != null)
                {
                    entity.PurchasePaidAmt = master.AmountPaid;
                    ktConContext.TblSupplierTransaction.Update(entity);
                    ktConContext.SaveChanges();
                }
            }
            else
            {
                TblSupplierTransaction suppransList = new TblSupplierTransaction()
                {
                    SupplierId = master.SupplierId,
                    TransactionDate = master.Date,
                    TransactionType = "Purchase Payment",
                    BillId = "0",
                    PurchaseAmount = 0,
                    PurchasePaidAmt = master.AmountPaid,
                    PaymentType = master.PaymentType,
                    Narration = master.Narration,
                    PaymentVocherNo = master.RecordNo.ToString(),
                };

                this.RepositoryContext.Set<TblSupplierTransaction>().Add(suppransList);
                this.RepositoryContext.SaveChanges();
            }
        }
    }
}
