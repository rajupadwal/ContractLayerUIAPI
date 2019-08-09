using System;
using System.Collections.Generic;
using System.Text;
using ContractLayerFarm.Data.Models;
namespace ContractLayerFarm.Data.Contract
{
       public interface IIncomeRepository : IRepositoryBase<TblIncomeDeatils>
    {
        //Boolean IsValidUser(UserInfo userInfo);
        //UserInfo Authenticate(string username, string password);
        bool Authenticate();
        IEnumerable<TblIncomeDeatils> GetAllIncometype();
        //IEnumerable<TblLocationMaster> searchIncomeType(string searchString);
        int GetIncomeNo();

    }
}
