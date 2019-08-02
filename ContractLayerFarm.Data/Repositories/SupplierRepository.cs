using System;
using System.Collections.Generic;
using System.Text;
using ContractLayerFarm.Data.Contract;
using ContractLayerFarm.Data.Models;
using ContractLayerFarm.Data.Repositories;
using System.Linq.Expressions;
using System.Linq;


namespace ContractLayerFarm.Data.Repositories
{
    public class SupplierRepository : RepositoryBase<TblSupplierMaster>, ISupplierRepository
    {
        private ContractLayerDBContext ktConContext;
        public SupplierRepository(ContractLayerDBContext ktConContext) : base(ktConContext)
        {
            this.ktConContext = ktConContext;
        }

        bool ISupplierRepository.Authenticate()
        {
            return true;
        }

        public IEnumerable<TblSupplierMaster> SearchSupplier(string searchString)
        {
            if (string.IsNullOrEmpty(searchString))
            { return this.ktConContext.Set<TblSupplierMaster>(); }

            return this.ktConContext.Set<TblSupplierMaster>().Where(supplier => supplier.SupplierName.ToLower().Contains(searchString.ToLower()));
        }
    }
}
