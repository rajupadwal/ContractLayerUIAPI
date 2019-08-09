using System;
using System.Collections.Generic;
using System.Text;
using ContractLayerFarm.Data.Contract;
using ContractLayerFarm.Data.Models;
using ContractLayerFarm.Data.Repositories;

using System.Linq.Expressions;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace ContractLayerFarm.Data.Repositories
{
    public class EmployeeAdvanceRepository : RepositoryBase<TblEmployeeAdvance>, IEmployeeAdvanceRepository
    {
        private ContractLayerDBContext ktConContext;
        public EmployeeAdvanceRepository(ContractLayerDBContext ktConContext) : base(ktConContext) {
            this.ktConContext = ktConContext;
        }

        bool IEmployeeAdvanceRepository.Authenticate()
        {
            return true;
        }

        public IEnumerable<TblEmployeeAdvance> GetAllEmployeeAdvance()
        {

            var TblEmployeeAdvance = this.ktConContext.TblEmployeeAdvance
                       .Include(blog => blog.Location)
                       .Include(blog => blog.Employee)
                       .ToList();
            return TblEmployeeAdvance;
        }
        public int GetEmployeeAdvanceNo()
        {
            int maxEmployeeAdvanceNo = this.ktConContext.TblEmployeeAdvance.Select(p => p.RecordNo).DefaultIfEmpty(0).Max() + 1;
            return maxEmployeeAdvanceNo;
        }
    }
}
