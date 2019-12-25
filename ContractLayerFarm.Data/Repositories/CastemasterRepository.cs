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
    public class CastemasterRepository : RepositoryBase<TblCasteMaster>, ICastemasterRepository
    {

        private ContractLayerDBContext ktConContext;
        public CastemasterRepository(ContractLayerDBContext ktConContext) : base(ktConContext)
        {
            this.ktConContext = ktConContext;
        }

        public IEnumerable<TblCasteMaster> SearchCasteName(string searchString)
        {
            if (string.IsNullOrEmpty(searchString))
            { return this.ktConContext.Set<TblCasteMaster>(); }

            return this.ktConContext.Set<TblCasteMaster>().Where(Castename => Castename.CasteName.ToLower().Contains(searchString.ToLower()));
        }

        bool ICastemasterRepository.Authenticate()
        {
            return true;
        }
        public int GetCasteSrNo()
        {
            int maxCasteSrNo = this.ktConContext.TblCasteMaster.Select(p => p.CasteId).DefaultIfEmpty(0).Max() + 1;
            return maxCasteSrNo;
        }


    }
}
