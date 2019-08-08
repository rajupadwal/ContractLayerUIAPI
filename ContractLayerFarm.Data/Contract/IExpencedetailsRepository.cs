using System;
using System.Collections.Generic;
using System.Text;
using ContractLayerFarm.Data.Models;
namespace ContractLayerFarm.Data.Contract
{
       public interface IExpencedetailsRepository : IRepositoryBase<TblOfficeExpencesDetails>
    {
        //Boolean IsValidUser(UserInfo userInfo);
        //UserInfo Authenticate(string username, string password);
        bool Authenticate();
        IEnumerable<TblOfficeExpencesDetails> GetAllExpenceType();

        int GetExpenceNo();
    }
}
