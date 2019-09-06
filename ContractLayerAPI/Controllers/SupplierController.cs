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
    [Route("api/Supplier/")]
    public class SupplierController : Controller
    {

        private IRepositoryWrapper _repoWrapper;

        public SupplierController(IRepositoryWrapper repoWrapper)
        {
            _repoWrapper = repoWrapper;
        }


        [HttpGet("[action]")]
        public IEnumerable<TblSupplierMaster> GetAll()
        {
            var Supplier = this._repoWrapper.Supplier.FindAll().ToList();
            return Supplier;
        }

        [HttpPost("GetByID")]
        public TblSupplierMaster GetByID([FromBody] int SupplierId)
        {
            var Supplier = this._repoWrapper.Supplier.FindByCondition(x => x.SupplierId == SupplierId).FirstOrDefault();
            return Supplier;
        }

        [HttpPost("SearchSupplier")]
        public IEnumerable<TblSupplierMaster> SearchSupplier([FromBody]string searchString)
        {
            var Supplier = this._repoWrapper.Supplier.SearchSupplier(searchString).ToList();
            return Supplier;
        }

        [HttpPost("Add")]
        public bool Add([FromBody]TblSupplierMaster supplier)
        {
            try
            {
                this._repoWrapper.Supplier.Create(supplier);
                this._repoWrapper.Supplier.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }

        [HttpPost("Update")]
        public bool Update([FromBody] TblSupplierMaster supplier)
        {
            try
            {
                this._repoWrapper.Supplier.Update(supplier);
                this._repoWrapper.Supplier.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }

        [HttpPost("Delete")]
        public bool Delete([FromBody] TblSupplierMaster supplier)
        {
            try
            {
                this._repoWrapper.Supplier.Delete(supplier);
                this._repoWrapper.Supplier.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }
    }
}
