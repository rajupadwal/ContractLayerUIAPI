using System;
using System.Collections.Generic;
using System.Text;
using ContractLayerFarm.Data.Models;
namespace ContractLayerFarm.Data.Contract
{
       public interface IProductdescRepository : IRepositoryBase<TblProductMaster>
    {
        //Boolean IsValidUser(UserInfo userInfo);
        //UserInfo Authenticate(string username, string password);
        IEnumerable<TblProductMaster> SearchProduct(string searchString);

        bool Authenticate();
    }
}
