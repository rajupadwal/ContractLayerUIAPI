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
    [Route("api/Location/")]
    public class LocationController : Controller
    {

        private IRepositoryWrapper _repoWrapper;

        public LocationController(IRepositoryWrapper repoWrapper)
        {
            _repoWrapper = repoWrapper;
        }


        [HttpGet("[action]")]
        public IEnumerable<TblLocationMaster> GetAll()
        {
            var Location = this._repoWrapper.Location.FindAll().ToList();
            return Location;
        }
        [HttpPost("SearchLocation")]
        public IEnumerable<TblLocationMaster> SearchLocation([FromBody]string searchString)
        {
            var Location = this._repoWrapper.Location.SearchLocation(searchString).ToList();
            return Location;
        }

        [HttpPost("GetByID")] 
        public TblLocationMaster GetByID([FromBody] int LocationId)
        {
            var Location = this._repoWrapper.Location.FindByCondition(x=> x.LocationId == LocationId).FirstOrDefault();
            return Location;
        }
        [HttpPost("Add")]
        public bool Add([FromBody]TblLocationMaster location)
        {
            try
            {
                this._repoWrapper.Location.Create(location);
                this._repoWrapper.Location.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
           
           
        }
        [HttpPost("Update")]
        public bool Update([FromBody] TblLocationMaster location)
        {
            try
            {
                this._repoWrapper.Location.Update(location);
                this._repoWrapper.Location.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }


        }
        [HttpPost("Delete")]
        public bool Delete([FromBody] TblLocationMaster location)
        {
            try
            {
                this._repoWrapper.Location.Delete(location);
                this._repoWrapper.Location.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }


        }



    }
}
