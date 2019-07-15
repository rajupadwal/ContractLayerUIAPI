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
    public class PlanRepository : RepositoryBase<TblPlanMaster>, IPlanRepository
    {
        private ContractLayerDBContext ktConContext;
        public PlanRepository(ContractLayerDBContext ktConContext) : base(ktConContext)
        {
            this.ktConContext = ktConContext;
        }

        public IEnumerable<TblPlanMaster> SearchPlan(string searchString)
        {
            if (string.IsNullOrEmpty(searchString))
            { return new List<TblPlanMaster>(); }

            return this.ktConContext.Set<TblPlanMaster>().Where(plan => plan.PlanName.ToLower().Contains(searchString.ToLower()));
        }

        bool IPlanRepository.Authenticate()
        {
            return true;
        }
    }
}
