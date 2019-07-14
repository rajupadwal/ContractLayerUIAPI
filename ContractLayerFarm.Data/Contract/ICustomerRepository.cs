using System;
using System.Collections.Generic;
using System.Text;
using ContractLayerFarm.Data.Models;
namespace ContractLayerFarm.Data.Contract
{
       public interface ICustomerRepository : IRepositoryBase<TblCustomerMaster>
    {
        bool Authenticate();
        IEnumerable<TblCustomerMaster> SearchCustomer(string searchString);
    }
}
