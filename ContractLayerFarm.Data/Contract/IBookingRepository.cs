using System;
using System.Collections.Generic;
using System.Text;
using ContractLayerFarm.Data.Models;
namespace ContractLayerFarm.Data.Contract
{
       public interface IBookingRepository : IRepositoryBase<TblBookingMaster>
    {
        //Boolean IsValidUser(UserInfo userInfo);
        //UserInfo Authenticate(string username, string password);
        bool Authenticate();

        IEnumerable<TblBookingMaster> GetAllBooking();
        IEnumerable<TblBookingMaster> GetAllBookingForCustomer(TblBookingMaster master);

        void SaveBookinginCustomerTransaction(TblBookingMaster master);

        int GetBookingNo();

        void DeleteBookingTransaction(TblBookingMaster master);
    }
}
