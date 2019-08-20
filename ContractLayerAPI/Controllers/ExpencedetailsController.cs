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
            var Expencedetails = this._repoWrapper.Expencedetails.GetAllExpenceType();
            return Expencedetails;
        }

        [HttpGet("[action]")]
        public int GetExpenceNo()
        {
            try
            {
                int Expenceno = this._repoWrapper.Expencedetails.GetExpenceNo();
                return Expenceno;
            }

            catch (Exception e)
            {
                return 0;
            }
        }

        [HttpPost("GetByID")]
        public TblOfficeExpencesDetails GetByID([FromBody] int ExpenceId)
        {
            var Expencedetails = this._repoWrapper.Expencedetails.FindByCondition(x => x.ExpencesNo == ExpenceId).FirstOrDefault();
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
        public bool Delete([FromBody] TblOfficeExpencesDetails expencedetails)
        {
            try
            {
                this._repoWrapper.Expencedetails.DeleteOfficeExpense(expencedetails);
                //this._repoWrapper.Expencedetails.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }


        }



    }
}
