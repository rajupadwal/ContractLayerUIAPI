using System;
using System.Collections.Generic;
using System.Text;
using ContractLayerFarm.Data.Models;
namespace ContractLayerFarm.Data.Contract
{
       public interface IEmployeeAdvanceRepository : IRepositoryBase<TblEmployeeAdvance>
    {
        //Boolean IsValidUser(UserInfo userInfo);
        //UserInfo Authenticate(string username, string password);
        bool Authenticate();
        IEnumerable<TblEmployeeAdvance> GetAllEmployeeAdvance();
    }
}
