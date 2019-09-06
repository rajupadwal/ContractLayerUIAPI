using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ContractLayerFarm.Data.Contract;
using ContractLayerFarm.Data.Models;

namespace ContractLayerAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/Booking/")]
    public class BookingController : Controller
    {

        private IRepositoryWrapper _repoWrapper;

        public BookingController(IRepositoryWrapper repoWrapper)
        {
            _repoWrapper = repoWrapper;
        }

        [HttpGet("[action]")]
        public int GetBookingNo()
        {
            try
            {
                int Booking = this._repoWrapper.Booking.GetBookingNo();
                return Booking;
            }

            catch (Exception e)
            {
                return 0;
            }
        }


        [HttpGet("[action]")]
        public IEnumerable<TblBookingMaster> GetAll()
        {
            var Booking = this._repoWrapper.Booking.GetAllBooking();
            return Booking;
        }

        [HttpGet("[action]")]
        public IEnumerable<TblBookingMaster> GetAllTopBooking()
        {
            var Booking = this._repoWrapper.Booking.GetAllTopBooking();
            return Booking;
        }

        [HttpPost("GetPlanByCustID")]
        public IEnumerable<TblBookingMaster> GetPlanByCustID([FromBody] TblBookingMaster booking)
        {
            var Booking = this._repoWrapper.Booking.GetAllBookingForCustomer(booking);
            return Booking;
        }

        [HttpGet("[action]")]
        public TblBookingMaster GetByID(int RecordNo)
        {
            var Booking = this._repoWrapper.Booking.FindByCondition(x => x.RecordNo == RecordNo).FirstOrDefault();
            return Booking;
        }

        [HttpPost("Add")]
        public bool Add([FromBody] TblBookingMaster booking)
        {
            try
            {
                this._repoWrapper.Booking.Create(booking);
                this._repoWrapper.Booking.Save();
                this._repoWrapper.Booking.SaveBookinginCustomerTransaction(booking);
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }

        [HttpPost("Update")]
        public bool Update([FromBody] TblBookingMaster booking)
        {
            try
            {
                this._repoWrapper.Booking.SaveBookinginCustomerTransaction(booking);
                this._repoWrapper.Booking.Update(booking);
                this._repoWrapper.Booking.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }

        [HttpPost("Delete")]
        public bool Delete([FromBody] TblBookingMaster booking)
        {
            try
            {
                this._repoWrapper.Booking.Delete(booking);
                this._repoWrapper.Booking.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }
    }
}
