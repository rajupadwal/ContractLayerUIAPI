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
    [Route("api/Productdesc/")]
    public class ProductdescController : Controller
    {

        private IRepositoryWrapper _repoWrapper;

        public ProductdescController(IRepositoryWrapper repoWrapper)
        {
            _repoWrapper = repoWrapper;
        }

        [HttpGet("[action]")]
        public IEnumerable<TblProductDescriptionMaster> GetAll()
        {
            var productdesc = this._repoWrapper.Productdesc.FindAll().ToList();
            return productdesc;
        }
        [HttpGet("[action]")] 
        public TblProductDescriptionMaster GetByID(int productId)
        {
            var productdesc = this._repoWrapper.Productdesc.FindByCondition(x=> x.ProductId == productId).FirstOrDefault();
            return productdesc;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
        }
        [HttpPost("Add")]
        public bool Add([FromBody]TblProductDescriptionMaster productdesc)
        {
            try
            {
                this._repoWrapper.Productdesc.Create(productdesc);
                this._repoWrapper.Productdesc.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }

        [HttpPost("Update")]
        public bool Update([FromBody] TblProductDescriptionMaster productdesc)
        {
            try
            {
                this._repoWrapper.Productdesc.Update(productdesc);
                this._repoWrapper.Productdesc.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }
        [HttpPost("Delete")]
        public bool Delete([FromBody] TblProductDescriptionMaster productdesc)
        {
            try
            {
                this._repoWrapper.Productdesc.Delete(productdesc);
                this._repoWrapper.Productdesc.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }
    }
}
