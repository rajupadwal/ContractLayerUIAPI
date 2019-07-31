using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using ContractLayerFarm.Data.Contract;
using ContractLayerFarm.Data.Models;
using ContractLayerFarm.Data.Repositories;

namespace ContractLayerFarm.Data.Repositories
{
    public class ProductdescRepository : RepositoryBase<TblProductMaster>, IProductdescRepository
    {
        private ContractLayerDBContext ktConContext;
        public ProductdescRepository(ContractLayerDBContext ktConContext) : base(ktConContext) {

            this.ktConContext = ktConContext;
        }

        public IEnumerable<TblProductMaster> SearchProduct(string searchString)
        {
            if (string.IsNullOrEmpty(searchString))
            { return this.ktConContext.Set<TblProductMaster>(); }

            return this.ktConContext.Set<TblProductMaster>().Where(product => product.ProductName.ToLower().Contains(searchString.ToLower()));
        }

        bool IProductdescRepository.Authenticate()
        {
            return true;
        }
    }
}
