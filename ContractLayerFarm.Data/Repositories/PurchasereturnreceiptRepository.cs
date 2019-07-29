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
    public class PurchasereturnreceiptRepository : RepositoryBase<TblPurchaseReturnReceipt>, IPurchasereturnreceiptRepository
    {
        private ContractLayerDBContext ktConContext;
        public PurchasereturnreceiptRepository(ContractLayerDBContext ktConContext) : base(ktConContext)
        {
            this.ktConContext = ktConContext;
        }

        public IEnumerable<TblPurchaseReturnReceipt> GetAllPurchasereturnReceipt()
        {

            var TblPurchaseReturnReceipt = this.ktConContext.TblPurchaseReturnReceipt
                       .Include(blog => blog.Location)
                       .Include(blog => blog.Supplier)
                       .ToList();
            return TblPurchaseReturnReceipt;
        }

        bool IPurchasereturnreceiptRepository.Authenticate()
        {
            return true;
        }
    }
}
