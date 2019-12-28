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
    public class TypemasterRepository : RepositoryBase<TblTypeMaster>, ITypemasterRepository
    { 
        private ContractLayerDBContext ktConContext;
        public TypemasterRepository(ContractLayerDBContext ktConContext) : base(ktConContext)
        {
            this.ktConContext = ktConContext;
        }

        public IEnumerable<TblTypeMaster> SearchTypeName(string searchString)
        {
            if (string.IsNullOrEmpty(searchString))
            { return this.ktConContext.Set<TblTypeMaster>(); }

            return this.ktConContext.Set<TblTypeMaster>().Where(Typename => Typename.TypeName.ToLower().Contains(searchString.ToLower()));
        }

        bool ITypemasterRepository.Authenticate()
        {
            return true;
        } 

        public int GetTypeNo()
        {
            int maxTypeNo = this.ktConContext.TblTypeMaster.Select(p => p.TypeId).DefaultIfEmpty(0).Max() + 1;
            return maxTypeNo;
        } 
    }
}
