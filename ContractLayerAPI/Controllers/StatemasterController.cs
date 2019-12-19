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
    [Route("api/Statemaster/")]
    public class StatemasterController : Controller
    {

        private IRepositoryWrapper _repoWrapper;

        public StatemasterController(IRepositoryWrapper repoWrapper)
        {
            _repoWrapper = repoWrapper;
        }

        [HttpGet("[action]")]
        public IEnumerable<TblStateMaster> GetAll()
        {
            var Statedetails = this._repoWrapper.Statemaster.FindAll().ToList();
            return Statedetails;
        }

        [HttpGet("[action]")]
        public int GetStateSrNo()
        {
            try
            {
                int StateSrno = this._repoWrapper.Statemaster.GetStateSrNo();
                return StateSrno;
            }

            catch (Exception e)
            {
                return 0;
            }
        }
        [HttpPost("SearchStateName")]
        public IEnumerable<TblStateMaster> SearchStateName([FromBody]string searchString)
        {
            var Statedetails = this._repoWrapper.Statemaster.SearchStateName(searchString).ToList();
            return Statedetails;
        }


        [HttpPost("GetByID")]
        public TblStateMaster GetByID([FromBody] int StateId)
        {
            var Statedetails = this._repoWrapper.Statemaster.FindByCondition(x => x.StateId == StateId).FirstOrDefault();
            return Statedetails;
        }

        [HttpPost("Add")]
        public bool Add([FromBody]TblStateMaster Statedetails)
        {
            try
            {
                this._repoWrapper.Statemaster.Create(Statedetails);
                this._repoWrapper.Statemaster.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }

        [HttpPost("Update")]
        public bool Update([FromBody] TblStateMaster Statedetails)
        {
            try
            {
                this._repoWrapper.Statemaster.Update(Statedetails);
                this._repoWrapper.Statemaster.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }
        [HttpPost("Delete")]
        public bool Delete([FromBody] TblStateMaster Statedetails)
        {
            try
            {
                this._repoWrapper.Statemaster.Delete(Statedetails);
                this._repoWrapper.Statemaster.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }
    }
}
