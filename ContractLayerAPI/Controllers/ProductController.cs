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

        [HttpPost("GetTypeByProductID")]
        public IEnumerable<TblProductTypeMaster> GetTypeByProductID([FromBody] TblProductTypeMaster type)
        {
            var prodtype = this._repoWrapper.Product.GetAllProductTypeForProduct(type);
            return prodtype;
        }

        [HttpGet("[action]")]
        public int GetChickEggsBillNo()
        {
            try
            {
                int BillNo = this._repoWrapper.Product.GetChickEggsBillNo();
                return BillNo;
            }
            catch (Exception e)
            {
                return 0;
            }
        }

        [HttpGet("[action]")]
        public int GetFarmerInwardNo()
        {
            try
            {
                int InwardNo = this._repoWrapper.Product.GetFarmerInwardNo();
                return InwardNo;
            }
            catch (Exception e)
            {
                return 0;
            }
        }

        [HttpGet("[action]")]
        public int GetFarmerOutwardNo()
        {
            try
            {
                int OutwardNo = this._repoWrapper.Product.GetFarmerOutwardNo();
                return OutwardNo;
            }
            catch (Exception e)
            {
                return 0;
            }
        }

        [HttpPost("GetProductAvailableStock")]
        public decimal GetProductAvailableStock([FromBody] TblFarmerOutwardDt farmerInwardMt)
        {
            try
            {
                decimal availableStock = this._repoWrapper.Product.GetProductAvailableStock(farmerInwardMt);
                return availableStock;
            }
            catch (Exception e)
            {
                return 0;
            }
        }


        [HttpGet("[action]")]
        public IEnumerable<TblProductTypeMaster> GetAll()
        {
            var Product = this._repoWrapper.Product.GetAllProduct();
            return Product;
        }
        
        [HttpGet("[action]")] 
        public TblProductTypeMaster GetByID(int ProductId)
        {
            var Product = this._repoWrapper.Product.FindByCondition(x=> x.ProductId == ProductId).FirstOrDefault();
            return Product;
        }

        [HttpPost("Add")]
        public bool Add([FromBody]TblProductTypeMaster product)
        {
            try
            {
                this._repoWrapper.Product.Create(product);
                this._repoWrapper.Product.Save();

                this._repoWrapper.Product.SaveOpeningStockDetails(product);

                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }

        [HttpPost("Update")]
        public bool Update([FromBody] TblProductTypeMaster product)
        {
            try
            {
                this._repoWrapper.Product.Update(product);
                this._repoWrapper.Product.Save();
                this._repoWrapper.Product.SaveOpeningStockDetails(product);
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }
        [HttpPost("Delete")]
        public bool Delete([FromBody] TblProductTypeMaster product)
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

        [HttpPost("DeleteFarmerInward")]
        public bool DeleteFarmerInward([FromBody] TblFarmerInwardMt inward)
        {
            try
            {
                this._repoWrapper.Product.DeleteFarmerInward(inward);
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }

        [HttpPost("DeleteFarmerOutward")]
        public bool DeleteFarmerOutward([FromBody] TblFarmerOutwardMt outward)
        {
            try
            {
                this._repoWrapper.Product.DeleteFarmerOutward(outward);
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }

        [HttpPost("DeletePurchaseBill")]
        public bool DeletePurchaseBill([FromBody] TblPurchaseBillMt purchasebill)
        {
            try
            {
                this._repoWrapper.Product.DeletePurchaseBill(purchasebill);
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }

        [HttpPost("DeleteChickEggsBill")]
        public bool DeleteChickEggsBill([FromBody] TblSalesBillMt salebill)
        {
            try
            {
                this._repoWrapper.Product.DeleteSaleBill(salebill);
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

       

        [HttpGet("[action]")]
        public IEnumerable<ViewFarmerInwardMaster> GetAllFarmerInwardMasters()
        {
            return this._repoWrapper.Product.GetAllFarmerInwardMasters().ToList();
        }


        [HttpPost("GetAllFarmerInwardMasteDetails")]
        public IEnumerable<TblFarmerInwardDt> GetAllFarmerInwardMasteDetails([FromBody] TblFarmerInwardMt farmerInwardMt)
        {
            return this._repoWrapper.Product.GetAllFarmerInwardMasteDetails(farmerInwardMt.PkId);
        }

        //------------------Outward Details-------------

        [HttpPost("SaveFarmerOutwardMaster")]
        public bool SaveFarmerOutwardMaster([FromBody] TblFarmerOutwardMt farmerOutwardMt)
        {
            try
            {
                this._repoWrapper.Product.SaveFarmerOutwardMaster(farmerOutwardMt);
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }
        [HttpPost("SaveFarmerChickEggBillMaster")]
        public bool SaveFarmerChickEggBillMaster([FromBody] TblSalesBillMt salesBillMt)
        {
            try
            {
                this._repoWrapper.Product.SaveFarmerChickEggBillMaster(salesBillMt);
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }

        [HttpGet("[action]")]
        public IEnumerable<ViewFarmerChickEggBillMaster> GetAllFarmerChickEggBillMasters()
        {
            return this._repoWrapper.Product.GetAllFarmerChickEggBillMasters().ToList();
        }


        [HttpGet("[action]")]
        public IEnumerable<ViewFarmerInwardMaster> GetAllFarmerOutwardMasters()
        {
            return this._repoWrapper.Product.GetAllFarmerOutwardMasters().ToList();
        }


        [HttpPost("GetAllFarmerOutwardMasteDetails")]
        public IEnumerable<TblFarmerOutwardDt> GetAllFarmerOutwardMasteDetails([FromBody] TblFarmerOutwardMt farmerOutwardMt)
        {
            return this._repoWrapper.Product.GetAllFarmerOutwardMasteDetails(farmerOutwardMt.PkId);
        }

        //------------------Purchase Bill Details-------------

        [HttpPost("SavePurchaseBillMaster")]
        public bool SavePurchaseBillMaster([FromBody] TblPurchaseBillMt purchaseBillMt)
        {
            try
            {
                this._repoWrapper.Product.SavePurchaseBillMaster(purchaseBillMt);
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }

        [HttpGet("[action]")]
        public IEnumerable<ViewPurchaseBillMaster> GetAllPurchaseBillMasters()
        {
            return this._repoWrapper.Product.GetAllPurchaseBillMasters().ToList();
        }


        [HttpPost("GetAllFarmerChickEggBillDetails")]
        public IEnumerable<TblSalesBillDt> GetAllFarmerChickEggBillDetails([FromBody] TblSalesBillDt salesBillDt)
        {
            return this._repoWrapper.Product.GetAllFarmerChickEggBillDetails(salesBillDt.BillId);
        }

        [HttpPost("GetAllPurchaseBillMasteDetails")]
        public IEnumerable<TblPurchaseBillDt> GetAllPurchaseBillMasteDetails([FromBody] TblPurchaseBillMt purchaseBillMt)
        {
            return this._repoWrapper.Product.GetAllPurchaseBillMasteDetails(purchaseBillMt.BillId);
        }

        [HttpPost("GetCustomerOutstandingAmt")]
        public decimal GetCustomerOutstandingAmt([FromBody] TblSalesBillMt salebill)
        {
            try
            {
                decimal oustanding = this._repoWrapper.Product.GetCustomerOutstandingAmt(salebill);
                return oustanding;
            }
            catch (Exception e)
            {
                return 0;
            }
        }
    }
}
