using System;
using System.Collections.Generic;
using System.Text;
using ContractLayerFarm.Data.Contract;
using ContractLayerFarm.Data.Models;
using ContractLayerFarm.Data.Repositories;

namespace ContractLayerFarm.Data.Repositories
{
    public class IncomeRepository : RepositoryBase<TblIncomeDeatils>, IIncomeRepository
    {

        public IncomeRepository(ContractLayerDBContext ktConContext) : base(ktConContext) {  }

        bool IIncomeRepository.Authenticate()
        {
            return true;
        }
    }
}
