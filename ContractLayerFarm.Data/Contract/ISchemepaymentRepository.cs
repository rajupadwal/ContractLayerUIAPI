using System;
using System.Collections.Generic;
using System.Text;
using ContractLayerFarm.Data.Models;
namespace ContractLayerFarm.Data.Contract
{
       public interface ISchemepaymentRepository : IRepositoryBase<TblSchemePaymentMaster>
    {
        //Boolean IsValidUser(UserInfo userInfo);
        //UserInfo Authenticate(string username, string password);
        bool Authenticate();
        //IEnumerable<TblSchemePaymentMaster> SearchSchemePayment(string searchString);

        int GetSchemePaymentSrNo();

    }
}
