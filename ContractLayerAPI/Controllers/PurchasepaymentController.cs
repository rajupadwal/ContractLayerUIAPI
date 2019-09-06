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
            var Purchasepayment = this._repoWrapper.Purchasepayment.GetAllPurchasepayment();
            return Purchasepayment;
        }

        [HttpGet("[action]")]
        public int GetPurchasePaymentNo()
        {
            try
            {
                int Purchasepaumentno = this._repoWrapper.Purchasepayment.GetPurchasePaymentNo();
                return Purchasepaumentno;
            }

            catch (Exception e)
            {
                return 0;
            }
        }

        [HttpGet("[action]")]
        public TblPurchasepayment GetByID(int RecordNo)
        {
            var Purchasepayment = this._repoWrapper.Purchasepayment.FindByCondition(x => x.RecordNo == RecordNo).FirstOrDefault();
            return Purchasepayment;
        }

        [HttpPost("GetSupplierOutstandingAmt")]
        public decimal GetSupplierOutstandingAmt([FromBody] TblPurchasepayment purreceipt)
        {
            try
            {
                decimal oustanding = this._repoWrapper.Purchasepayment.GetSupplierOutstandingAmt(purreceipt);
                return oustanding;
            }
            catch (Exception e)
            {
                return 0;
            }
        }

        [HttpPost("Add")]
        public bool Add([FromBody] TblPurchasepayment purchasepayment)
        {
            try
            {
                this._repoWrapper.Purchasepayment.SaveSupplierTransaction(purchasepayment);
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
