using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using ContractLayerFarm.Data.Contract;
using ContractLayerFarm.Data.Models;
using ContractLayerFarm.Data.Repositories;
using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
namespace ContractLayerFarm.Data.Repositories
{
    public class StatemasterRepository : RepositoryBase<TblStateMaster>, IStatemasterRepository
    {

        private ContractLayerDBContext ktConContext;
        public StatemasterRepository(ContractLayerDBContext ktConContext) : base(ktConContext)
        {
            this.ktConContext = ktConContext;
        }

        public IEnumerable<TblStateMaster> SearchStateName(string searchString)
        {
            if (string.IsNullOrEmpty(searchString))
            { return this.ktConContext.Set<TblStateMaster>(); }

            return this.ktConContext.Set<TblStateMaster>().Where(Statename => Statename.StateName.ToLower().Contains(searchString.ToLower()));
        }

        bool IStatemasterRepository.Authenticate()
        {
            return true;
        }
        public int GetStateSrNo()
        {
            int maxStateSrNo = this.ktConContext.TblStateMaster.Select(p => p.StateId).DefaultIfEmpty(0).Max() + 1;
            return maxStateSrNo;
        }


    }
}
