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
    public class SchemeRepository : RepositoryBase<TblSchemeMaster>, ISchemeRepository
    {
        private ContractLayerDBContext ktConContext;
        public SchemeRepository(ContractLayerDBContext ktConContext) : base(ktConContext)
        {
            this.ktConContext = ktConContext;
        }

        public IEnumerable<TblSchemeMaster> SearchScheme(string searchString)
        {
            if (string.IsNullOrEmpty(searchString))
            { return this.ktConContext.Set<TblSchemeMaster>(); }

            return this.ktConContext.Set<TblSchemeMaster>().Where(scheme => scheme.SchemeName.ToLower().Contains(searchString.ToLower()));
        }

        bool ISchemeRepository.Authenticate()
        {
            return true;
        }
    }
}

