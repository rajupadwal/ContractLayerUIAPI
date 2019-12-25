using System;
using System.Collections.Generic;
using System.Text;
using ContractLayerFarm.Data.Models;
namespace ContractLayerFarm.Data.Contract
{
       public interface ITypemasterRepository : IRepositoryBase<TblTypeMaster>
    {
        //Boolean IsValidUser(UserInfo userInfo);
        //UserInfo Authenticate(string username, string password);
        bool Authenticate();
        IEnumerable<TblTypeMaster> SearchTypeName(string searchString);

        int GetTypeNo();

    }
}
