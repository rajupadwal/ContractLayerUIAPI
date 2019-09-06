using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ContractLayerFarm.Data.Contract;
using ContractLayerFarm.Data.Models;
using Microsoft.AspNetCore.Authorization;
namespace ContractLayerAPI.Controllers
{
     [Authorize][Produces("application/json")]
    [Route("api/Bookingcancel/")]
    public class BookingcancelController : Controller
    {

        private IRepositoryWrapper _repoWrapper;

        public BookingcancelController(IRepositoryWrapper repoWrapper)
        {
            _repoWrapper = repoWrapper;
        }

        [HttpGet("[action]")]
        public IEnumerable<TblBookingCancelMaster> GetAll()
        {
            var Bookingcancel = this._repoWrapper.Bookingcancel.GetAllBookingCancel();
            return Bookingcancel;
        }
        [HttpGet("[action]")]
        public int GetBookingCancelNo()
        {
            try
            {
                int BookingCancelNo = this._repoWrapper.Bookingcancel.GetBookingCancelNo();
                return BookingCancelNo;
            }

            catch (Exception e)
            {
                return 0;
            }
        }

        [HttpGet("[action]")] 
        public TblBookingCancelMaster GetByID(int RecordNo)
        {
            var Bookingcancel = this._repoWrapper.Bookingcancel.FindByCondition(x=> x.RecordNo == RecordNo).FirstOrDefault();
            return Bookingcancel;
        }

        [HttpPost("Add")]
        public bool Add([FromBody]TblBookingCancelMaster bookingcancel)
        {
            try
            {
                this._repoWrapper.Bookingcancel.Create(bookingcancel);
                this._repoWrapper.Bookingcancel.Save();
                this._repoWrapper.Bookingcancel.SaveBookingCancelDetails(bookingcancel);
                this._repoWrapper.Bookingcancel.SaveCancelBookinginCustomerTransaction(bookingcancel);
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }

        [HttpPost("Update")]
        public bool Update([FromBody] TblBookingCancelMaster bookingcancel)
        {
            try
            {
                this._repoWrapper.Bookingcancel.Update(bookingcancel);
                this._repoWrapper.Bookingcancel.Save();
                this._repoWrapper.Bookingcancel.SaveBookingCancelDetails(bookingcancel);
                this._repoWrapper.Bookingcancel.SaveCancelBookinginCustomerTransaction(bookingcancel);
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }

        [HttpPost("Delete")]
        public bool Delete([FromBody] TblBookingCancelMaster bookingcancel)
        {
            try
            {
                this._repoWrapper.Bookingcancel.DeleteBookingTransaction(bookingcancel);
                this._repoWrapper.Bookingcancel.Delete(bookingcancel);
                this._repoWrapper.Bookingcancel.Save();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }
    }
}
