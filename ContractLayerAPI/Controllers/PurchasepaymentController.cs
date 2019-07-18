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
    [Route("api/Purchasepayment/")]
    public class PurchasepaymentController : Controller
    {

        private IRepositoryWrapper _repoWrapper;

        public PurchasepaymentController(IRepositoryWrapper repoWrapper)
        {
            _repoWrapper = repoWrapper;
        }

        [HttpGet("[action]")]
        public IEnumerable<TblPurchasepayment> GetAll()
        {
            var Purchasepayment = this._repoWrapper.Purchasepayment.FindAll().ToList();
            return Purchasepayment;
        }
        [HttpGet("[action]")]
        public TblPurchasepayment GetByID(int RecordNo)
        {
            var Purchasepayment = this._repoWrapper.Purchasepayment.FindByCondition(x => x.RecordNo == RecordNo).FirstOrDefault();
            return Purchasepayment;
        }
        [HttpPost("Add")]
        public bool Add([FromBody] TblPurchasepayment purchasepayment)
        {
            try
            {
                this._repoWrapper.Purchasepayment.Create(purchasepayment);
                this._repoWrapper.Purchasepayment.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }

        [HttpPost("Update")]
        public bool Update([FromBody] TblPurchasepayment purchasepayment)
        {
            try
            {
                this._repoWrapper.Purchasepayment.Update(purchasepayment);
                this._repoWrapper.Purchasepayment.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }

        [HttpPost("Delete")]
        public bool Delete([FromBody] TblPurchasepayment purchasepayment)
        {
            try
            {
                this._repoWrapper.Purchasepayment.Delete(purchasepayment);
                this._repoWrapper.Purchasepayment.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }
    }
}
