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
    [Route("api/Employee/")]
    public class EmployeeController : Controller
    {

        private IRepositoryWrapper _repoWrapper;

        public EmployeeController(IRepositoryWrapper repoWrapper)
        {
            _repoWrapper = repoWrapper;
        }

        [HttpGet("[action]")]
        public IEnumerable<TblEmployeeMaster> GetAll()
        {
            var Employee = this._repoWrapper.Employee.FindAll().ToList();
            return Employee;
        }

        [HttpGet("[action]")] 
        public TblEmployeeMaster GetByID(int employeeId)
        {
            var Employee = this._repoWrapper.Employee.FindByCondition(x=> x.EmployeeId == employeeId).FirstOrDefault();
            return Employee;
        }

        [HttpPost("Add")]
        public bool Add([FromBody]TblEmployeeMaster employee)
        {
            try
            {
                this._repoWrapper.Employee.Create(employee);
                this._repoWrapper.Employee.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }

        [HttpPost("Update")]
        public bool Update([FromBody] TblEmployeeMaster employee)
        {
            try
            {
                this._repoWrapper.Employee.Update(employee);
                this._repoWrapper.Employee.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }

        [HttpPost("Delete")]
        public bool Delete([FromBody] TblEmployeeMaster employee)
        {
            try
            {
                this._repoWrapper.Employee.Delete(employee);
                this._repoWrapper.Employee.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }
    }
}