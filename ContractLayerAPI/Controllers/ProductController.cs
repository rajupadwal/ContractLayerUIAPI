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
    [Route("api/Product/")]
    public class ProductController : Controller
    {

        private IRepositoryWrapper _repoWrapper;

        public ProductController(IRepositoryWrapper repoWrapper)
        {
            _repoWrapper = repoWrapper;
        }


        [HttpGet("[action]")]
        public IEnumerable<TblProductMaster> GetAll()
        {
            var Product = this._repoWrapper.Product.FindAll().ToList();
            return Product;
        }
        

        [HttpGet("[action]")] 
        public TblProductMaster GetByID(int ProductId)
        {
            var Product = this._repoWrapper.Product.FindByCondition(x=> x.ProductId == ProductId).FirstOrDefault();
            return Product;
        }

        [HttpPost("Add")]
        public bool Add([FromBody]TblProductMaster product)
        {
            try
            {
                this._repoWrapper.Product.Create(product);
                this._repoWrapper.Product.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }

        [HttpPost("Update")]
        public bool Update([FromBody] TblProductMaster product)
        {
            try
            {
                this._repoWrapper.Product.Update(product);
                this._repoWrapper.Product.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }
        [HttpPost("Delete")]
        public bool Delete([FromBody] TblProductMaster product)
        {
            try
            {
                this._repoWrapper.Product.Delete(product);
                this._repoWrapper.Product.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }


        [HttpGet("[action]")]
        public IEnumerable<TblUnitMaster> GetAllUnits()
        {
            var units = this._repoWrapper.Product.GetUnits().ToList();
            return units;
        }

        [HttpPost("SaveFarmerInwardMaster")]
        public bool SaveFarmerInwardMaster([FromBody] TblFarmerInwardMt farmerInwardMt)
        {
            try
            {
                this._repoWrapper.Product.SaveFarmerInwardMaster(farmerInwardMt);
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }

        //[HttpPost("SaveFarmerInwardsDetails")]
        //public bool SaveFarmerInwardsDetails([FromBody] TblFarmerInwardDt[] details)
        //{
        //    try
        //    {
        //        this._repoWrapper.Product.SaveFarmerInwardDetails(details);
        //        return true;
        //    }

        //    catch (Exception e)
        //    {
        //        return false;
        //    }
        //}


        [HttpGet("[action]")]
        public IEnumerable<ViewFarmerInwardMaster> GetAllFarmerInwardMasters()
        {
            return this._repoWrapper.Product.GetAllFarmerInwardMasters().ToList();
        }


        [HttpPost("GetAllFarmerInwardMasteDetails")]
        public IEnumerable<TblFarmerInwardDt> GetAllFarmerInwardMasteDetails([FromBody] TblFarmerInwardMt farmerInwardMt)
        {
            return this._repoWrapper.Product.GetAllFarmerInwardMasteDetails(farmerInwardMt.RecordNo);
        }



        //[HttpGet("[action]")]
        //public IEnumerable<ViewFarmerInwardMaster> GetAllFarmerInwardMasters1()
        //{
        //    return this._repoWrapper.Product.GetAllFarmerInwardMasters1().ToList();
        //}

    }
}
