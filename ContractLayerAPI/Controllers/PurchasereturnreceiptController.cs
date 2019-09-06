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
    [Route("api/Purchasereturnreceipt/")]
    public class PurchasereturnreceiptController : Controller
    {

        private IRepositoryWrapper _repoWrapper;

        public PurchasereturnreceiptController(IRepositoryWrapper repoWrapper)
        {
            _repoWrapper = repoWrapper;
        }

        [HttpGet("[action]")]
        public IEnumerable<TblPurchaseReturnReceipt> GetAll()
        {
            var Purchasereturnreceipt = this._repoWrapper.Purchasereturnreceipt.GetAllPurchasereturnReceipt();
            return Purchasereturnreceipt;
        }

        [HttpGet("[action]")]
        public int GetReturnPurchasePaymentNo()
        {
            try
            {
                int Purchasepaumentno = this._repoWrapper.Purchasereturnreceipt.GetReturnPurchasePaymentNo();
                return Purchasepaumentno;
            }

            catch (Exception e)
            {
                return 0;
            }
        }

        [HttpGet("[action]")]
        public TblPurchaseReturnReceipt GetByID(int RecordNo)
        {
            var Purchasereturnreceipt = this._repoWrapper.Purchasereturnreceipt.FindByCondition(x => x.RecordNo == RecordNo).FirstOrDefault();
            return Purchasereturnreceipt;
        }
        [HttpPost("Add")]
        public bool Add([FromBody] TblPurchaseReturnReceipt purchasereturnreceipt)
        {
            try
            {
                this._repoWrapper.Purchasereturnreceipt.Create(purchasereturnreceipt);
                this._repoWrapper.Purchasereturnreceipt.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }

        [HttpPost("Update")]
        public bool Update([FromBody] TblPurchaseReturnReceipt purchasereturnreceipt)
        {
            try
            {
                this._repoWrapper.Purchasereturnreceipt.Update(purchasereturnreceipt);
                this._repoWrapper.Purchasereturnreceipt.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }

        [HttpPost("Delete")]
        public bool Delete([FromBody] TblPurchaseReturnReceipt purchasereturnreceipt)
        {
            try
            {
                this._repoWrapper.Purchasereturnreceipt.Delete(purchasereturnreceipt);
                this._repoWrapper.Purchasereturnreceipt.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }
    }
}
