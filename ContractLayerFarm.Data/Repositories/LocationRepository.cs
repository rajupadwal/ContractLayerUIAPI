using System;
using System.Collections.Generic;
using System.Text;
using System.Linq.Expressions;
using System.Linq;

using ContractLayerFarm.Data.Contract;
using ContractLayerFarm.Data.Models;
using ContractLayerFarm.Data.Repositories;

namespace ContractLayerFarm.Data.Repositories
{
    public class LocationRepository : RepositoryBase<TblLocationMaster>, ILocationRepository
    {
        private ContractLayerDBContext ktConContext;
        public LocationRepository(ContractLayerDBContext ktConContext) : base(ktConContext)
        {
            this.ktConContext = ktConContext;
        }

        public IEnumerable<TblLocationMaster> SearchLocation(string searchString)
        {
            if (string.IsNullOrEmpty(searchString))
            { return this.ktConContext.Set<TblLocationMaster>(); }

            return this.ktConContext.Set<TblLocationMaster>().Where(location => location.LocationName.ToLower().Contains(searchString.ToLower()));
        }

        bool ILocationRepository.Authenticate()
        {
            return true;
        }
    }
}

