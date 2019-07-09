using System;
using System.Collections.Generic;
using System.Text;
using ContractLayerFarm.Data.Contract;
using ContractLayerFarm.Data.Models;
using ContractLayerFarm.Data.Repositories;

namespace ContractLayerFarm.Data.Repositories
{
    public class LocationRepository : RepositoryBase<TblLocationMaster>, ILocationRepository
    {

        public LocationRepository(ContractLayerDBContext ktConContext) : base(ktConContext) {  }

        bool ILocationRepository.Authenticate()
        {
            return true;
        }
    }
}
