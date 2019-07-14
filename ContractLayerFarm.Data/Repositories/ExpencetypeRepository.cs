using System;
using System.Collections.Generic;
using System.Text;
using ContractLayerFarm.Data.Contract;
using ContractLayerFarm.Data.Models;
using ContractLayerFarm.Data.Repositories;

namespace ContractLayerFarm.Data.Repositories
{
    public class ExpencetypeRepository : RepositoryBase<TblExpenceTypeMaster>, IExpencetypeRepository
    {

        public ExpencetypeRepository(ContractLayerDBContext ktConContext) : base(ktConContext) {  }

        bool IExpencetypeRepository.Authenticate()
        {
            return true;
        }
    }
}
