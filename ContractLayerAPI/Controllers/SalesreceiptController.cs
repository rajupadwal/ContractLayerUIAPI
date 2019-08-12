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
    [Route("api/Salesreceipt/")]
    public class SalesreceiptController : Controller
    {

        private IRepositoryWrapper _repoWrapper;

        public SalesreceiptController(IRepositoryWrapper repoWrapper)
        {
            _repoWrapper = repoWrapper;
        }

        [HttpGet("[action]")]
        public int GetSaleReceiptNo()
        {
            try
            {
                int ReceiptNo = this._repoWrapper.Salesreceipt.GetSaleReceiptNo();
                return ReceiptNo;
            }
            catch (Exception e)
            {
                return 0;
            }
        }

        [HttpPost("GetCustomerOutstandingAmt")]
        public decimal GetCustomerOutstandingAmt([FromBody] TblSalesReceipt salesreceipt)
        {
            try
            {
                decimal oustanding = this._repoWrapper.Salesreceipt.GetCustomerOutstandingAmt(salesreceipt);
                return oustanding;
            }
            catch (Exception e)
            {
                return 0;
            }
        }

        [HttpGet("[action]")]
        public IEnumerable<TblSalesReceipt> GetAll()
        {
            var Salesreceipt = this._repoWrapper.Salesreceipt.GetAllSaleReceipts();
            return Salesreceipt;
        }

        [HttpGet("[action]")]
        public TblSalesReceipt GetByID(int ReceiptNo)
        {
            var Salesreceipt = this._repoWrapper.Salesreceipt.FindByCondition(x => x.ReceiptNo == ReceiptNo).FirstOrDefault();
            return Salesreceipt;
        }
        [HttpPost("Add")]
        public bool Add([FromBody] TblSalesReceipt salesreceipt)
        {
            try
            {
                this._repoWrapper.Salesreceipt.SaveCustomerTransaction(salesreceipt);
                this._repoWrapper.Salesreceipt.Create(salesreceipt);
                this._repoWrapper.Salesreceipt.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }

        [HttpPost("Update")]
        public bool Update([FromBody] TblSalesReceipt salesreceipt)
        {
            try
            {
                this._repoWrapper.Salesreceipt.SaveCustomerTransaction(salesreceipt);
                this._repoWrapper.Salesreceipt.Update(salesreceipt);
                this._repoWrapper.Salesreceipt.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }

        [HttpPost("Delete")]
        public bool Delete([FromBody] TblSalesReceipt salesreceipt)
        {
            try
            {
                this._repoWrapper.Salesreceipt.Delete(salesreceipt);
                this._repoWrapper.Salesreceipt.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }
    }
}
