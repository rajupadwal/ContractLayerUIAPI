using System;
using System.Collections.Generic;
using System.Text;
using ContractLayerFarm.Data.Contract;
using ContractLayerFarm.Data.Models;
using ContractLayerFarm.Data.Repositories;

namespace ContractLayerFarm.Data.Repositories
{
    public class SupplierRepository : RepositoryBase<TblSupplierMaster>, ISupplierRepository
    {

        public SupplierRepository(ContractLayerDBContext ktConContext) : base(ktConContext) {  }

        bool ISupplierRepository.Authenticate()
        {
            return true;
        }
    }
}
