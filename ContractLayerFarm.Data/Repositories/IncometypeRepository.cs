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
    public class IncometypeRepository : RepositoryBase<TblIncomeType>, IIncometypeRepository
    {
        private ContractLayerDBContext ktConContext;
        public IncometypeRepository(ContractLayerDBContext ktConContext) : base(ktConContext)
        {
            this.ktConContext = ktConContext;
        }

        public IEnumerable<TblIncomeType> SearchIncometype(string searchString)
        {
            if (string.IsNullOrEmpty(searchString))
            { return new List<TblIncomeType>(); }

            return this.ktConContext.Set<TblIncomeType>().Where(incometype => incometype.IncomeType.ToLower().Contains(searchString.ToLower()));
        }

        public bool Authenticate()
        {
            return true;
        }
    }
}
