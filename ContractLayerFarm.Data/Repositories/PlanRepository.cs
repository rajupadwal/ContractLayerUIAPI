using System;
using System.Collections.Generic;
using System.Text;
using ContractLayerFarm.Data.Contract;
using ContractLayerFarm.Data.Models;
using ContractLayerFarm.Data.Repositories;

namespace ContractLayerFarm.Data.Repositories
{
    public class PlanRepository : RepositoryBase<TblPlanMaster>, IPlanRepository
    {

        public PlanRepository(ContractLayerDBContext ktConContext) : base(ktConContext) {  }

        bool IPlanRepository.Authenticate()
        {
            return true;
        }
    }
}
