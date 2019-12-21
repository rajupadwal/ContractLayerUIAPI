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
    [Route("api/Scheme/")]
    public class SchemeController : Controller
    {

        private IRepositoryWrapper _repoWrapper;

        public SchemeController(IRepositoryWrapper repoWrapper)
        {
            _repoWrapper = repoWrapper;
        }

        [HttpGet("[action]")]
        public IEnumerable<TblSchemeMaster> GetAll()
        {
            var scheme = this._repoWrapper.Schememaster.FindAll().ToList();
            return scheme;
        }
        [HttpPost("SearchScheme")]
        public IEnumerable<TblSchemeMaster> SearchScheme([FromBody]string searchString)
        {
            var scheme = this._repoWrapper.Schememaster.SearchScheme(searchString).ToList();
            return scheme;
        }

        [HttpPost("GetByID")] 
        public TblSchemeMaster GetByID([FromBody] int schemeId)
        {
            var scheme = this._repoWrapper.Schememaster.FindByCondition(x=> x.SchemeId == schemeId).FirstOrDefault();
            return scheme;
        }
        [HttpPost("Add")]
        public bool Add([FromBody]TblSchemeMaster location)
        {
            try
            {
                this._repoWrapper.Schememaster.Create(location);
                this._repoWrapper.Schememaster.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }

        [HttpPost("Update")]
        public bool Update([FromBody] TblSchemeMaster scheme)
        {
            try
            {
                this._repoWrapper.Schememaster.Update(scheme);
                this._repoWrapper.Schememaster.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            } 
        }
        [HttpPost("Delete")]
        public bool Delete([FromBody] TblSchemeMaster scheme)
        {
            try
            {
                this._repoWrapper.Schememaster.Delete(scheme);
                this._repoWrapper.Schememaster.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }
    }
}
