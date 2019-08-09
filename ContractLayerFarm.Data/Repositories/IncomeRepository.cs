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
    public class IncomeRepository : RepositoryBase<TblIncomeDeatils>, IIncomeRepository
    {
        private ContractLayerDBContext ktConContext;
        public IncomeRepository(ContractLayerDBContext ktConContext) : base(ktConContext) {
            this.ktConContext = ktConContext;

                    }

        

        bool IIncomeRepository.Authenticate()
        {
            return true;
        }

        public IEnumerable<TblIncomeDeatils> GetAllIncometype()
        {

            var TblIncomeDeatils = this.ktConContext.TblIncomeDeatils
                       .Include(blog => blog.Location)
                       .Include(blog => blog.Income)
                       .ToList();
            return TblIncomeDeatils;
        }

        public int GetIncomeNo()
        {
            int maxIncomeNo = this.ktConContext.TblIncomeDeatils.Select(p => p.PkId).DefaultIfEmpty(0).Max() + 1;
            return maxIncomeNo;
        }
    }
}
