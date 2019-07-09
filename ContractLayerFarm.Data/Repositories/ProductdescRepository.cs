using System;
using System.Collections.Generic;
using System.Text;
using ContractLayerFarm.Data.Contract;
using ContractLayerFarm.Data.Models;
using ContractLayerFarm.Data.Repositories;

namespace ContractLayerFarm.Data.Repositories
{
    public class ProductdescRepository : RepositoryBase<TblProductDescriptionMaster>, IProductdescRepository
    {

        public ProductdescRepository(ContractLayerDBContext ktConContext) : base(ktConContext) {  }

        bool IProductdescRepository.Authenticate()
        {
            return true;
        }
    }
}
