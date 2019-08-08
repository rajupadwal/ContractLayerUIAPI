using System;
using System.Collections.Generic;
using System.Text;
using ContractLayerFarm.Data.Models;
namespace ContractLayerFarm.Data.Contract
{
       public interface IExpencetypeRepository : IRepositoryBase<TblExpenceTypeMaster>
    {
        //Boolean IsValidUser(UserInfo userInfo);
        //UserInfo Authenticate(string username, string password);
        bool Authenticate();
        IEnumerable<TblExpenceTypeMaster> SearchExpenceType(string searchString);

        int GetExpenceNo();

    }
}
