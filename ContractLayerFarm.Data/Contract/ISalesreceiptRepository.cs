﻿using System;
using System.Collections.Generic;
using System.Text;
using ContractLayerFarm.Data.Models;
namespace ContractLayerFarm.Data.Contract
{
       public interface ISalesreceiptRepository : IRepositoryBase<TblSalesReceipt>
    {
        //Boolean IsValidUser(UserInfo userInfo);
        //UserInfo Authenticate(string username, string password);
        bool Authenticate();
        IEnumerable<TblSalesReceipt> GetAllSaleReceipts();

        void SaveCustomerTransaction(TblSalesReceipt master);
        int GetSaleReceiptNo();
        decimal GetCustomerOutstandingAmt(TblSalesReceipt master);
    }
}
