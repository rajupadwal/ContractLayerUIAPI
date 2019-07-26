using System;
using System.Collections.Generic;
using System.Text;
using ContractLayerFarm.Data.Contract;
using ContractLayerFarm.Data.Models;
using ContractLayerFarm.Data.Repositories;
using System.Linq;

namespace ContractLayerFarm.Data.Repositories
{
    public class EmployeeRepository : RepositoryBase<TblEmployeeMaster>, IEmployeeRepository
    {
        private ContractLayerDBContext ktConContext;

        public EmployeeRepository(ContractLayerDBContext ktConContext) : base(ktConContext)
        {
            this.ktConContext = ktConContext;
        }

        public IEnumerable<TblEmployeeMaster> SearchEmployee(string searchString)
        {
            if (string.IsNullOrEmpty(searchString))
            { return new List<TblEmployeeMaster>(); }

            return this.ktConContext.Set<TblEmployeeMaster>().Where(employee => employee.EmployeeName.ToLower().Contains(searchString.ToLower()));
        }
        bool IEmployeeRepository.Authenticate()
        {
            return true;
        }
    }
}
