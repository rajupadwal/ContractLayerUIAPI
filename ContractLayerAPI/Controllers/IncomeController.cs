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
    [Route("api/Income/")]
    public class IncomeController : Controller
    {

        private IRepositoryWrapper _repoWrapper;

        public IncomeController(IRepositoryWrapper repoWrapper)
        {
            _repoWrapper = repoWrapper;
        }

        [HttpGet("[action]")]
        public IEnumerable<TblIncomeDeatils> GetAll()
        {
            var Income = this._repoWrapper.Income.GetAllIncometype();
            return Income;
        }

        [HttpGet("[action]")]
        public int GetIncomeNo()
        {
            try
            {
                int incomeno = this._repoWrapper.Income.GetIncomeNo();
                return incomeno;
            }

            catch (Exception e)
            {
                return 0;
            }
        }



        [HttpGet("[action]")] 
        public TblIncomeDeatils GetByID(int RecordNo)
        {
            var Income = this._repoWrapper.Income.FindByCondition(x=> x.RecordNo == RecordNo).FirstOrDefault();
            return Income;
        }

        [HttpPost("Add")]
        public bool Add([FromBody]TblIncomeDeatils income)
        {
            try
            {
                this._repoWrapper.Income.Create(income);
                this._repoWrapper.Income.Save();
                return true;
            }

            catch (Exception e)
{
                return false;
            }
        }

        [HttpPost("Update")]
        public bool Update([FromBody] TblIncomeDeatils income)
        {
            try
            {
                this._repoWrapper.Income.Update(income);
                this._repoWrapper.Income.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }

        [HttpPost("Delete")]
        public bool Delete([FromBody] TblIncomeDeatils income)
        {
            try
            {
                this._repoWrapper.Income.Delete(income);
                this._repoWrapper.Income.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }
    }
}
