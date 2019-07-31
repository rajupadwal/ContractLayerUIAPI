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
    }
}
