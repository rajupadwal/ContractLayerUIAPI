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
    public class UnitRepository : RepositoryBase<TblUnitMaster>, IUnitRepository
    {
        private ContractLayerDBContext ktConContext;
        public UnitRepository(ContractLayerDBContext ktConContext) : base(ktConContext)
        {
            this.ktConContext = ktConContext;
        }

        public IEnumerable<TblUnitMaster>SearchUnit(string searchString)
        {
            if (string.IsNullOrEmpty(searchString))
            { return this.ktConContext.Set<TblUnitMaster>(); }

            return this.ktConContext.Set<TblUnitMaster>().Where(unit => unit.UnitDescription.ToLower().Contains(searchString.ToLower()));
        }

        bool IUnitRepository.Authenticate()
        {
            return true;
        }
    }
}
