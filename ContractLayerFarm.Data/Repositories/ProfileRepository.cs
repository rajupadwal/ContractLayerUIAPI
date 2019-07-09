using System;
using System.Collections.Generic;
using System.Text;
using ContractLayerFarm.Data.Contract;
using ContractLayerFarm.Data.Models;
using ContractLayerFarm.Data.Repositories;

namespace ContractLayerFarm.Data.Repositories
{
    public class ProfileRepository : RepositoryBase<TblCompanyProfile>, IProfileRepository
    {

        public ProfileRepository(ContractLayerDBContext ktConContext) : base(ktConContext) {  }

        bool IProfileRepository.Authenticate()
        {
            return true;
        }
    }
}
