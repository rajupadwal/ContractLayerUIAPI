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
    [Route("api/Schemepaymentdetails/")]
    public class SchemepaymentController : Controller
    {

        private IRepositoryWrapper _repoWrapper;

        public SchemepaymentController(IRepositoryWrapper repoWrapper)
        {
            _repoWrapper = repoWrapper;
        }

        [HttpGet("[action]")]
        public IEnumerable<TblSchemePaymentMaster> GetAll()
        {
            var schemepayemntdetails = this._repoWrapper.Schemepayment.FindAll().ToList();
            return schemepayemntdetails;
        }

        [HttpGet("[action]")]
        public int GetSchemePaymentSrNo()
        {
            try
            {
                int Schemepaymentsrno = this._repoWrapper.Schemepayment.GetSchemePaymentSrNo();
                return Schemepaymentsrno;
            }

            catch (Exception e)
            {
                return 0;
            }
        }

        [HttpPost("SearchSchemePayment")]
        public IEnumerable<TblSchemePaymentMaster> SearchSchemePayment([FromBody]string searchString)
        {
            var schemepay = this._repoWrapper.Schemepayment.SearchSchemePayment(searchString).ToList();
            return schemepay;
        }

        [HttpPost("GetByID")]
        public TblSchemePaymentMaster GetByID([FromBody] int SrNo)
        {
            var Schemepaymentdetails = this._repoWrapper.Schemepayment.FindByCondition(x => x.SrNo == SrNo).FirstOrDefault();
            return Schemepaymentdetails;
        }

        [HttpPost("Add")]
        public bool Add([FromBody]TblSchemePaymentMaster Schemepaymentdetails)
        {
            try
            {
                this._repoWrapper.Schemepayment.Create(Schemepaymentdetails);
                this._repoWrapper.Schemepayment.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }

        [HttpPost("Update")]
        public bool Update([FromBody] TblSchemePaymentMaster Schemepaymentdetails)
        {
            try
            {
                this._repoWrapper.Schemepayment.Update(Schemepaymentdetails);
                this._repoWrapper.Schemepayment.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }
        [HttpPost("Delete")]
        public bool Delete([FromBody] TblSchemePaymentMaster Schemepaymentdetails)
        {
            try
            {
                this._repoWrapper.Schemepayment.Delete(Schemepaymentdetails);
                this._repoWrapper.Schemepayment.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }
    }
}
