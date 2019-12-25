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
    [Route("api/Castemaster/")]
    public class CastemasterController : Controller
    {
        private IRepositoryWrapper _repoWrapper;

        public CastemasterController(IRepositoryWrapper repoWrapper)
        {
            _repoWrapper = repoWrapper;
        }

        [HttpGet("[action]")]
        public IEnumerable<TblCasteMaster> GetAll()
        {
            var Castedetails = this._repoWrapper.Castemaster.FindAll().ToList();
            return Castedetails;
        }

        [HttpGet("[action]")]
        public int GetCasteSrNo()
        {
            try
            {
                int CasteSrno = this._repoWrapper.Castemaster.GetCasteSrNo();
                return CasteSrno;
            }

            catch (Exception e)
            {
                return 0;
            }
        }
        [HttpPost("SearchCasteName")]
        public IEnumerable<TblCasteMaster> SearchCasteName([FromBody]string searchString)
        {
            var Castedetails = this._repoWrapper.Castemaster.SearchCasteName(searchString).ToList();
            return Castedetails;
        }


        [HttpPost("GetByID")]
        public TblCasteMaster GetByID([FromBody] int CasteId)
        {
            var Castedetails = this._repoWrapper.Castemaster.FindByCondition(x => x.CasteId == CasteId).FirstOrDefault();
            return Castedetails;
        }

        [HttpPost("Add")]
        public bool Add([FromBody]TblCasteMaster Castedetails)
        {
            try
            {
                this._repoWrapper.Castemaster.Create(Castedetails);
                this._repoWrapper.Castemaster.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }

        [HttpPost("Update")]
        public bool Update([FromBody] TblCasteMaster Castedetails)
        {
            try
            {
                this._repoWrapper.Castemaster.Update(Castedetails);
                this._repoWrapper.Castemaster.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }
        [HttpPost("Delete")]
        public bool Delete([FromBody] TblCasteMaster Castedetails)
        {
            try
            {
                this._repoWrapper.Castemaster.Delete(Castedetails);
                this._repoWrapper.Castemaster.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }
    }
}
