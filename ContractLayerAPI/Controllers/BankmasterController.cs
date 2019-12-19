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
    [Route("api/Bankmaster/")]
    public class BankmasterController : Controller
    {

        private IRepositoryWrapper _repoWrapper;

        public BankmasterController(IRepositoryWrapper repoWrapper)
        {
            _repoWrapper = repoWrapper;
        }

        [HttpGet("[action]")]
        public IEnumerable<TblBankMaster> GetAll()
        {
            var bankdetails = this._repoWrapper.Bankmaster.FindAll().ToList();
            return bankdetails;
        }

        [HttpGet("[action]")]
        public int GetBankSrNo()
        {
            try
            {
                int BankSrno = this._repoWrapper.Bankmaster.GetBankSrNo();
                return BankSrno;
            }

            catch (Exception e)
            {
                return 0;
            }
        }
        [HttpPost("SearchBankName")]
        public IEnumerable<TblBankMaster> SearchBankName([FromBody]string searchString)
        {
            var bankdetails = this._repoWrapper.Bankmaster.SearchBankName(searchString).ToList();
            return bankdetails;
        }


        [HttpPost("GetByID")]
        public TblBankMaster GetByID([FromBody] int BankId)
        {
            var Bankdetails = this._repoWrapper.Bankmaster.FindByCondition(x => x.BankId == BankId).FirstOrDefault();
            return Bankdetails;
        }

        [HttpPost("Add")]
        public bool Add([FromBody]TblBankMaster bankdetails)
        {
            try
            {
                this._repoWrapper.Bankmaster.Create(bankdetails);
                this._repoWrapper.Bankmaster.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }

        [HttpPost("Update")]
        public bool Update([FromBody] TblBankMaster bankdetails)
        {
            try
            {
                this._repoWrapper.Bankmaster.Update(bankdetails);
                this._repoWrapper.Bankmaster.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }
        [HttpPost("Delete")]
        public bool Delete([FromBody] TblBankMaster bankdetails)
        {
            try
            {
                this._repoWrapper.Bankmaster.Delete(bankdetails);
                this._repoWrapper.Bankmaster.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }
    }
}
