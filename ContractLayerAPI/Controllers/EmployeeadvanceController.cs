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
    [Route("api/Employeeadvance/")]
    public class EmployeeadvanceController : Controller
    {

        private IRepositoryWrapper _repoWrapper;

        public EmployeeadvanceController(IRepositoryWrapper repoWrapper)
        {
            _repoWrapper = repoWrapper;
        }

        [HttpGet("[action]")]
        public IEnumerable<TblEmployeeAdvance> GetAll()
        {
            var Employeeadv = this._repoWrapper.Employeeadvance.GetAllEmployeeAdvance();
            return Employeeadv;
        }

        [HttpGet("[action]")]
        public int GetEmployeeAdvanceNo()
        {
            try
            {
                int Employeeadvno = this._repoWrapper.Employeeadvance.GetEmployeeAdvanceNo();
                return Employeeadvno;
            }

            catch (Exception e)
            {
                return 0;
            }
        }

        [HttpGet("[action]")] 
        public TblEmployeeAdvance GetByID(int recno)
        {
            var Employeeadv1 = this._repoWrapper.Employeeadvance.FindByCondition(x=> x.RecordNo == recno).FirstOrDefault();
            return Employeeadv1;
        }

        [HttpPost("Add")]
        public bool Add([FromBody]TblEmployeeAdvance employeeadv)
        {
            try
            {
                this._repoWrapper.Employeeadvance.Create(employeeadv);
                this._repoWrapper.Employeeadvance.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }

        [HttpPost("Update")]
        public bool Update([FromBody] TblEmployeeAdvance employeeadv)
        {
            try
            {
                this._repoWrapper.Employeeadvance.Update(employeeadv);
                this._repoWrapper.Employeeadvance.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }

        [HttpPost("Delete")]
        public bool Delete([FromBody] TblEmployeeAdvance employeeadv)
        {
            try
            {
                this._repoWrapper.Employeeadvance.Delete(employeeadv);
                this._repoWrapper.Employeeadvance.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }
    }
}
