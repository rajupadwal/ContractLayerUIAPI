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
    [Route("api/Expencetype/")]
    public class ExpencetypeController : Controller
    {

        private IRepositoryWrapper _repoWrapper;

        public ExpencetypeController(IRepositoryWrapper repoWrapper)
        {
            _repoWrapper = repoWrapper;
        }

        [HttpGet("[action]")]
        public IEnumerable<TblExpenceTypeMaster> GetAll()
        {
            var Expencetype = this._repoWrapper.Expencetype.FindAll().ToList();
            return Expencetype;
        }

        [HttpGet("[action]")]
        public int GetExpenceNo()
        {
            try
            {
                int Expenceno = this._repoWrapper.Expencetype.GetExpenceNo();
                return Expenceno;
            }

            catch (Exception e)
            {
                return 0;
            }
        }
        [HttpPost("SearchExpenceType")]
        public IEnumerable<TblExpenceTypeMaster> SearchExpenceType([FromBody]string searchString)
        {
            var Expencetype = this._repoWrapper.Expencetype.SearchExpenceType(searchString).ToList();
            return Expencetype;
        }


        [HttpPost("GetByID")]
        public TblExpenceTypeMaster GetByID([FromBody] int ExpenceId)
        {
            var Expence = this._repoWrapper.Expencetype.FindByCondition(x => x.ExpenceId == ExpenceId).FirstOrDefault();
            return Expence;
        }

        [HttpPost("Add")]
        public bool Add([FromBody]TblExpenceTypeMaster expencetype)
        {
            try
            {
                this._repoWrapper.Expencetype.Create(expencetype);
                this._repoWrapper.Expencetype.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }

        [HttpPost("Update")]
        public bool Update([FromBody] TblExpenceTypeMaster expencetype)
        {
            try
            {
                this._repoWrapper.Expencetype.Update(expencetype);
                this._repoWrapper.Expencetype.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }
        [HttpPost("Delete")]
        public bool Delete([FromBody] TblExpenceTypeMaster expencetype)
        {
            try
            {
                this._repoWrapper.Expencetype.Delete(expencetype);
                this._repoWrapper.Expencetype.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }
    }
}
