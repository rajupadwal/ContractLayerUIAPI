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

        public IEnumerable<TblSalesReceipt> GetAllSaleReceipts()
        {

            var TblSalesReceipt = this.ktConContext.TblSalesReceipt
                       .Include(blog => blog.Location)
                       .Include(blog => blog.Customer)
                       .ToList();
            return TblSalesReceipt;
        }
    }
}
