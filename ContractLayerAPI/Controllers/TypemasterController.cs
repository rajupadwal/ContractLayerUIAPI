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
    [Route("api/Typemaster/")]
    public class TypemasterController : Controller
    {

        private IRepositoryWrapper _repoWrapper;

        public TypemasterController(IRepositoryWrapper repoWrapper)
        {
            _repoWrapper = repoWrapper;
        }

        [HttpGet("[action]")]
        public IEnumerable<TblTypeMaster> GetAll()
        {
            var Typeetails = this._repoWrapper.Type.FindAll().ToList();
            return Typeetails;
        }

        [HttpGet("[action]")]
        public int GetTypeNo()
        {
            try
            {
                int Typeno = this._repoWrapper.Type.GetTypeNo();
                return Typeno;
            }

            catch (Exception e)
            {
                return 0;
            }
        } 

        [HttpPost("SearchTypeName")]
        public IEnumerable<TblTypeMaster> SearchTypeName([FromBody]string searchString)
        {
            var Typedetails = this._repoWrapper.Type.SearchTypeName(searchString).ToList();
            return Typedetails;
        }

        [HttpPost("GetByID")]
        public TblTypeMaster GetByID([FromBody] int TypeId) 
        {
            var Typedetails = this._repoWrapper.Type.FindByCondition(x => x.TypeId == TypeId).FirstOrDefault();
            return Typedetails;
        }

        [HttpPost("Add")]
        public bool Add([FromBody]TblTypeMaster Typedetails)
        {
            try
            {
                this._repoWrapper.Type.Create(Typedetails);
                this._repoWrapper.Type.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }

        [HttpPost("Update")]
        public bool Update([FromBody] TblTypeMaster Typedetails)
        {
            try
            {
                this._repoWrapper.Type.Update(Typedetails);
                this._repoWrapper.Type.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }
        [HttpPost("Delete")]
        public bool Delete([FromBody] TblTypeMaster Typedetails)
        {
            try
            {
                this._repoWrapper.Type.Delete(Typedetails);
                this._repoWrapper.Type.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }
    }
}
