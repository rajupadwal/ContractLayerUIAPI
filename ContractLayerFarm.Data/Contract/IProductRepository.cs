using System;
using System.Collections.Generic;
using System.Text;
using ContractLayerFarm.Data.Models;

namespace ContractLayerFarm.Data.Contract
{
    public interface IProductRepository : IRepositoryBase<TblProductTypeMaster>
    {

        bool Authenticate();

        IEnumerable<TblUserInfo> SearchLogin(TblUserInfo user);
        IEnumerable<TblUnitMaster> GetUnits();

        int GetChickEggsBillNo();
        int GetFarmerInwardNo();
        int GetFarmerOutwardNo();

        int GetPurchaseBillGRNNo();
        decimal GetProductAvailableStock(TblFarmerOutwardDt master);

        void SaveOpeningStockDetails(TblProductTypeMaster master);

        IEnumerable<ViewStockDetails> GetProductwiseAvailableStock();
        IEnumerable<ViewStockDetails> GetCustomerBookingOutstanding();
        IEnumerable<ViewStockDetails> GetCustomerBillOutstanding();

        IEnumerable<TblProductTypeMaster> GetAllProduct();
        IEnumerable<TblProductTypeMaster> GetAllProductTypeForProduct(TblProductTypeMaster master);

        void DeleteFarmerInward(TblFarmerInwardMt master);
        void DeleteFarmerOutward(TblFarmerOutwardMt master);
        void DeletePurchaseBill(TblPurchaseBillMt master);
        void DeleteSaleBill(TblSalesBillMt master);
        void SaveFarmerInwardMaster(TblFarmerInwardMt master);
        void SaveFarmerInwardDetails(TblFarmerInwardDt[] details);

        IEnumerable<ViewFarmerInwardMaster> GetAllFarmerInwardMasters();

        IEnumerable<TblFarmerInwardDt> GetAllFarmerInwardMasteDetails(int recordNo);


        void SaveFarmerChickEggBillMaster(TblSalesBillMt master);
        void SaveFarmerChickEggBillDetails(TblSalesBillDt[] details);
        IEnumerable<ViewFarmerChickEggBillMaster> GetAllFarmerChickEggBillMasters();

        IEnumerable<TblSalesBillDt> GetAllFarmerChickEggBillDetails(int billid);


        //Farmer Outward

        void SaveFarmerOutwardMaster(TblFarmerOutwardMt master);
        void SaveFarmerOutwardDetails(TblFarmerOutwardDt[] details);

        IEnumerable<ViewFarmerInwardMaster> GetAllFarmerOutwardMasters();

        IEnumerable<TblFarmerOutwardDt> GetAllFarmerOutwardMasteDetails(int recordNo);

        //Purchase Bill

        void SavePurchaseBillMaster(TblPurchaseBillMt master);
        void SavePurchaseBillDetails(TblPurchaseBillDt[] details);

        IEnumerable<ViewPurchaseBillMaster> GetAllPurchaseBillMasters();

        IEnumerable<TblPurchaseBillDt> GetAllPurchaseBillMasteDetails(int billid);

        decimal GetCustomerOutstandingAmt(TblSalesBillMt master);

    }
}
