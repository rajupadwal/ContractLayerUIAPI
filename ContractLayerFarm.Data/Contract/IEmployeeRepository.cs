﻿using System;
using System.Collections.Generic;
using System.Text;
using ContractLayerFarm.Data.Models;
namespace ContractLayerFarm.Data.Contract
{
       public interface IEmployeeRepository : IRepositoryBase<TblEmployeeMaster>
    {
        //Boolean IsValidUser(UserInfo userInfo);
        //UserInfo Authenticate(string username, string password);
        IEnumerable<TblEmployeeMaster> SearchEmployee(string searchString);
        IEnumerable<TblEmployeeMaster> GetAllEmployee();
        bool Authenticate();

        void SaveLoginDetails(TblEmployeeMaster master);
    }
}
