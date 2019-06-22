using System;
using System.Collections.Generic;
using System.Text;
using ContractLayerFarm.Data.Contract;
using ContractLayerFarm.Data.Models;
using ContractLayerFarm.Data.Repositories;

namespace ContractLayerFarm.Data.Repositories
{
    public class CustomerRepository : RepositoryBase<TblCustomerMaster>, ICustomerRepository
    {

        public CustomerRepository(ContractLayerDBContext ktConContext) : base(ktConContext) {  }

        bool ICustomerRepository.Authenticate()
        {
            return true;
        }
    }
}
