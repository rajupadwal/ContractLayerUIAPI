using System;
using System.Collections.Generic;
using System.Text;
using ContractLayerFarm.Data.Models;
namespace ContractLayerFarm.Data.Contract
{
       public interface IBookingCancelRepository : IRepositoryBase<TblBookingCancelMaster>
    {
        //Boolean IsValidUser(UserInfo userInfo);
        //UserInfo Authenticate(string username, string password);
        bool Authenticate();

        IEnumerable<TblBookingCancelMaster> GetAllBookingCancel();
        int GetBookingCancelNo();
        void SaveBookingCancelDetails(TblBookingCancelMaster master);

        void SaveCancelBookinginCustomerTransaction(TblBookingCancelMaster master);
        void DeleteBookingTransaction(TblBookingCancelMaster master);
    }
}
