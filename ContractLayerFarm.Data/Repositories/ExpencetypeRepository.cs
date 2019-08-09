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
    public class ExpencetypeRepository : RepositoryBase<TblExpenceTypeMaster>, IExpencetypeRepository
    {

        private ContractLayerDBContext ktConContext;
        public ExpencetypeRepository(ContractLayerDBContext ktConContext) : base(ktConContext)
        {
            this.ktConContext = ktConContext;
        }

        public IEnumerable<TblExpenceTypeMaster> SearchExpenceType(string searchString)
        {
            if (string.IsNullOrEmpty(searchString))
            { return this.ktConContext.Set<TblExpenceTypeMaster>(); }

            return this.ktConContext.Set<TblExpenceTypeMaster>().Where(expencetype => expencetype.ExpenceType.ToLower().Contains(searchString.ToLower()));
        }

        bool IExpencetypeRepository.Authenticate()
        {
            return true;
        }
        public int GetExpenceNo()
        {
            int maxExpenceNo = this.ktConContext.TblExpenceTypeMaster.Select(p => p.ExpenceId).DefaultIfEmpty(0).Max() + 1;
            return maxExpenceNo;
        }


    }
}
