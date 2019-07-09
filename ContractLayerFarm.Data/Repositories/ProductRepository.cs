using System;
using System.Collections.Generic;
using System.Text;
using ContractLayerFarm.Data.Contract;
using ContractLayerFarm.Data.Models;
using ContractLayerFarm.Data.Repositories;

namespace ContractLayerFarm.Data.Repositories
{
    public class ProductRepository : RepositoryBase<TblProductMaster>, IProductRepository
    {

        public ProductRepository(ContractLayerDBContext ktConContext) : base(ktConContext) {  }

        bool IProductRepository.Authenticate()
        {
            return true;
        }
    }
}
