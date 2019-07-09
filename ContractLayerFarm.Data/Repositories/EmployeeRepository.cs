using System;
using System.Collections.Generic;
using System.Text;
using ContractLayerFarm.Data.Contract;
using ContractLayerFarm.Data.Models;
using ContractLayerFarm.Data.Repositories;

namespace ContractLayerFarm.Data.Repositories
{
    public class EmployeeRepository : RepositoryBase<TblEmployeeMaster>, IEmployeeRepository
    {

        public EmployeeRepository(ContractLayerDBContext ktConContext) : base(ktConContext) {  }

        bool IEmployeeRepository.Authenticate()
        {
            return true;
        }
    }
}
