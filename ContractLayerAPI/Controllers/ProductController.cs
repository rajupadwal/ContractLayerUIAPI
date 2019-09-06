using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using ContractLayerFarm.Data.Contract;
using ContractLayerFarm.Data.Models;
using Microsoft.AspNetCore.Authorization;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
using WebApi.Helpers;
using Microsoft.Extensions.Options;

namespace ContractLayerAPI.Controllers
{

    [Authorize][Produces("application/json")]
    [Route("api/Product/")]
    public class ProductController : ControllerBase
    {
        private readonly AppSettings _appSettings;
        private IRepositoryWrapper _repoWrapper;

        public ProductController(IRepositoryWrapper repoWrapper, IOptions<AppSettings> appSettings)
        {
            _repoWrapper = repoWrapper;
            _appSettings = appSettings.Value;
        }

        [AllowAnonymous]
        [HttpPost("Login")]
        public TblUserInfo SearchLogin([FromBody] TblUserInfo user)
        {
            var login = this._repoWrapper.Product.SearchLogin(user).FirstOrDefault();

            if(login.UserId <= 0)
            {
                return null;
            }
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = System.Text.Encoding.ASCII.GetBytes(_appSettings.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, login.Username.ToString())
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            login.Token = tokenHandler.WriteToken(token);
            return login;
          

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

        [HttpGet("[action]")]
        public int GetPurchaseBillReturnGRNNo()
        {
            try
            {
                int GRNNo = this._repoWrapper.Product.GetPurchaseBillReturnGRNNo();
                return GRNNo;
            }
            catch (Exception e)
            {
                return 0;
            }
        }

        [HttpGet("[action]")]
        public int GetPurchaseBillGRNNo()
        {
            try
            {
                int GRNNo = this._repoWrapper.Product.GetPurchaseBillGRNNo();
                return GRNNo;
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
        public IEnumerable<ViewStockDetails> GetProductwiseAvailableStock()
        {
            var Product = this._repoWrapper.Product.GetProductwiseAvailableStock();
            return Product;
        }

        [HttpGet("[action]")]
        public IEnumerable<ViewStockDetails> GetCustomerBookingOutstanding()
        {
            var Product = this._repoWrapper.Product.GetCustomerBookingOutstanding();
            return Product;
        }

        [HttpGet("[action]")]
        public IEnumerable<ViewStockDetails> GetCustomerBillOutstanding()
        {
            var Product = this._repoWrapper.Product.GetCustomerBillOutstanding();
            return Product;
        }

        [HttpGet("[action]")]
        public IEnumerable<ViewStockDetails> GetSupplierBillOutstanding()
        {
            var Product = this._repoWrapper.Product.GetSupplierBillOutstanding();
            return Product;
        }

        [HttpPost("GetSupplierLedger")]
        public IEnumerable<ViewStockDetails> GetSupplierLedger([FromBody] TblPurchasepayment purchase)
        {
            var Product = this._repoWrapper.Product.GetSupplierLedger(Convert.ToInt32(purchase.SupplierId));
            return Product;
        }

        [HttpPost("GetCustomerLedger")]
        public IEnumerable<ViewStockDetails> GetCustomerLedger([FromBody] TblBookingMaster boooking)
        {
            var Product = this._repoWrapper.Product.GetCustomerLedger(Convert.ToInt32(boooking.CustomerId));
            return Product;
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
                this._repoWrapper.Product.Save();

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
                //this._repoWrapper.Product.Update(product);
                //this._repoWrapper.Product.Save();
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

        [HttpPost("DeletePurchaseBillReturn")]
        public bool DeletePurchaseBillReturn([FromBody] TblPurchaseBillReturnMt purchasebill)
        {
            try
            {
                this._repoWrapper.Product.DeletePurchaseBillReturn(purchasebill);
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

        //------------------Purchase Bill  && Purchase Return Details-------------

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

        [HttpPost("SavePurchaseBillReturnMaster")]
        public bool SavePurchaseBillReturnMaster([FromBody] TblPurchaseBillReturnMt purchaseBillMt)
        {
            try
            {
                this._repoWrapper.Product.SavePurchaseBillReturnMaster(purchaseBillMt);
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

        [HttpGet("[action]")]
        public IEnumerable<ViewPurchaseBillMaster> GetAllPurchaseBillReturnMasters()
        {
            return this._repoWrapper.Product.GetAllPurchaseBillReturnMasters().ToList();
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

        [HttpPost("GetAllPurchaseBillReturnMasteDetails")]
        public IEnumerable<TblPurchaseBillReturnDt> GetAllPurchaseBillReturnMasteDetails([FromBody] TblPurchaseBillReturnMt purchaseBillMt)
        {
            return this._repoWrapper.Product.GetAllPurchaseBillReturnMasteDetails(purchaseBillMt.BillId);
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

        [HttpPost("GetCustomerSettlementAmt")]
        public decimal GetCustomerSettlementAmt([FromBody] TblSalesBillMt salebill)
        {
            try
            {
                decimal settlementamt = this._repoWrapper.Product.GetCustomerSettlementAmt(salebill);
                return settlementamt;
            }
            catch (Exception e)
            {
                return 0;
            }
        }
    }
}
