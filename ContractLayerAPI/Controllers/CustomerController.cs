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
    [Route("api/Customer/")]
    public class CustomerController : Controller
    {

        private IRepositoryWrapper _repoWrapper;

        public CustomerController(IRepositoryWrapper repoWrapper)
        {
            _repoWrapper = repoWrapper;
        }


        [HttpGet("[action]")]
        public IEnumerable<TblCustomerMaster> GetAll()
        {
            var Cusotmer = this._repoWrapper.Customer.FindAll().ToList();
            return Cusotmer;
        }
        [HttpPost("SearchCustomer")]
        public IEnumerable<TblCustomerMaster> SearchCustomer([FromBody]string searchString)
        {
            var Cusotmer = this._repoWrapper.Customer.SearchCustomer(searchString).ToList();
            return Cusotmer;
        }
        [HttpGet("[action]")] 
        public TblCustomerMaster GetByID(int customerId)
        {
            var Cusotmer = this._repoWrapper.Customer.FindByCondition(x=> x.CustomerId == customerId).FirstOrDefault();
            return Cusotmer;
        }
        [HttpPost("Add")]
        public bool Add([FromBody]TblCustomerMaster customer)
        {
            try
            {
                this._repoWrapper.Customer.Create(customer);
                this._repoWrapper.Customer.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
           
           
        }
        [HttpPost("Update")]
        public bool Update([FromBody] TblCustomerMaster customer)
        {
            try
            {
                this._repoWrapper.Customer.Update(customer);
                this._repoWrapper.Customer.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }


        }
        [HttpPost("Delete")]
        public bool Delete([FromBody] TblCustomerMaster customer)
        {
            try
            {
                this._repoWrapper.Customer.Delete(customer);
                return true;
            }

            catch (Exception e)
            {
                return false;
            }


        }



    }
}
