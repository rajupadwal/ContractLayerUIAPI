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
    [Route("api/Expencedetails/")]
    public class ExpencedetailsController : Controller
    {

        private IRepositoryWrapper _repoWrapper;

        public ExpencedetailsController(IRepositoryWrapper repoWrapper)
        {
            _repoWrapper = repoWrapper;
        }


        [HttpGet("[action]")]
        public IEnumerable<TblOfficeExpencesDetails> GetAll()
        {
            var Expencedetails = this._repoWrapper.Expencedetails.FindAll().ToList();
            return Expencedetails;
        }
        [HttpGet("[action]")] 
        public TblOfficeExpencesDetails GetByID(int ExpencesNo)
        {
            var Expencedetails = this._repoWrapper.Expencedetails.FindByCondition(x=> x.ExpencesNo == ExpencesNo).FirstOrDefault();
            return Expencedetails;
        }
        [HttpPost("Add")]
        public bool Add([FromBody]TblOfficeExpencesDetails ExpencesNo)
        {
            try
            {
                this._repoWrapper.Expencedetails.Create(ExpencesNo);
                this._repoWrapper.Expencedetails.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
           
           
        }
        [HttpPost("Update")]
        public bool Update([FromBody] TblOfficeExpencesDetails ExpencesNo)
        {
            try
            {
                this._repoWrapper.Expencedetails.Update(ExpencesNo);
                this._repoWrapper.Expencedetails.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }


        }
        [HttpPost("Delete")]
        public bool Delete([FromBody] TblOfficeExpencesDetails ExpencesNo)
        {
            try
            {
                this._repoWrapper.Expencedetails.Delete(ExpencesNo);
                this._repoWrapper.Expencedetails.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }


        }



    }
}