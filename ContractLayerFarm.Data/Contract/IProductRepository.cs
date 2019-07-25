using System;
using System.Collections.Generic;
using System.Text;
using ContractLayerFarm.Data.Models;

namespace ContractLayerFarm.Data.Contract
{
    public interface IProductRepository : IRepositoryBase<TblProductTypeMaster>
    {

        bool Authenticate();

        IEnumerable<TblUnitMaster> GetUnits();

        void SaveFarmerInwardMaster(TblFarmerInwardMt master);
        void SaveFarmerInwardDetails(TblFarmerInwardDt[] details);

        IEnumerable<ViewFarmerInwardMaster> GetAllFarmerInwardMasters();

        IEnumerable<TblFarmerInwardDt> GetAllFarmerInwardMasteDetails(int recordNo);


        void SaveFarmerChickEggBillMaster(TblSalesBillMt master);
        void SaveFarmerChickEggBillDetails(TblSalesBillDt[] details);
        IEnumerable<ViewFarmerChickEggBillMaster> GetAllFarmerChickEggBillMasters();

        IEnumerable<TblSalesBillDt> GetAllFarmerChickEggBillDetails(int billid);
    }
}
