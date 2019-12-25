using System;
using System.Collections.Generic;
using System.Text;
using ContractLayerFarm.Data.Models;
namespace ContractLayerFarm.Data.Contract
{
       public interface ICastemasterRepository : IRepositoryBase<TblCasteMaster>
    {
        //Boolean IsValidUser(UserInfo userInfo);
        //UserInfo Authenticate(string username, string password);
        bool Authenticate();
        IEnumerable<TblCasteMaster> SearchCasteName(string searchString);

        int GetCasteSrNo();

    }
}
