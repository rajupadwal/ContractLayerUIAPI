using System;
using System.Collections.Generic;
using System.Text;
using ContractLayerFarm.Data.Contract;
using ContractLayerFarm.Data.Models;
using ContractLayerFarm.Data.Repositories;

namespace ContractLayerFarm.Data.Repositories
{
    public class EmployeeAdvanceRepository : RepositoryBase<TblEmployeeAdvance>, IEmployeeAdvanceRepository
    {

        public EmployeeAdvanceRepository(ContractLayerDBContext ktConContext) : base(ktConContext) {  }

        bool IEmployeeAdvanceRepository.Authenticate()
        {
            return true;
        }
    }
}
