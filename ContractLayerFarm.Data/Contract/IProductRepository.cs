using System;
using System.Collections.Generic;
using System.Text;
using ContractLayerFarm.Data.Models;
namespace ContractLayerFarm.Data.Contract
{
    public interface IProductRepository : IRepositoryBase<TblProductMaster>
    {

        bool Authenticate();

        IEnumerable<TblUnitMaster> GetUnits();

        void SaveFarmerInwardMaster(TblFarmerInwardMt master);
        void SaveFarmerInwardDetails(TblFarmerInwardDt[] details);
    }
}
