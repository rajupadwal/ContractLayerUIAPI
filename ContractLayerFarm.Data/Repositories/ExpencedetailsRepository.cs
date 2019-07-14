using System;
using System.Collections.Generic;
using System.Text;
using ContractLayerFarm.Data.Contract;
using ContractLayerFarm.Data.Models;
using ContractLayerFarm.Data.Repositories;

namespace ContractLayerFarm.Data.Repositories
{
    public class ExpencedetailsRepository : RepositoryBase<TblOfficeExpencesDetails>, IExpencedetailsRepository
    {

        public ExpencedetailsRepository(ContractLayerDBContext ktConContext) : base(ktConContext) {  }

        bool IExpencedetailsRepository.Authenticate()
        {
            return true;
        }
    }
}
