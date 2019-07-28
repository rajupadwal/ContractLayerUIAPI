using System;
using System.Collections.Generic;
using System.Text;
using ContractLayerFarm.Data.Contract;
using ContractLayerFarm.Data.Models;
using ContractLayerFarm.Data.Repositories;

namespace ContractLayerFarm.Data.Repositories
{
    public class CommonRepository : ICommonRepository
    {

        protected ContractLayerDBContext RepositoryContext { get; set; }
        public CommonRepository(ContractLayerDBContext ktConContext)  {
            this.RepositoryContext = ktConContext;
        }

        bool ICommonRepository.Authenticate()
        {
            return true;
        }

        
    }
}
