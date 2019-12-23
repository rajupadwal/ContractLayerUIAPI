using System;
using System.Collections.Generic;
using System.Text;
using ContractLayerFarm.Data.Models;
namespace ContractLayerFarm.Data.Contract
{
       public interface IDistrictmasterRepository : IRepositoryBase<TblDistrictMaster>
    {
        bool Authenticate();
        IEnumerable<TblDistrictMaster> GetAllDistrict();
        IEnumerable<TblDistrictMaster> GetAllDistrictForState(TblDistrictMaster master);
        IEnumerable<TblDistrictMaster> SearchDistrictName(string searchString);
    }
}
