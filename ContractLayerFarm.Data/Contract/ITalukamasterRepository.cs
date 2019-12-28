using System;
using System.Collections.Generic;
using System.Text;
using ContractLayerFarm.Data.Models;
namespace ContractLayerFarm.Data.Contract
{
       public interface ITalukamasterRepository : IRepositoryBase<TblTalukaMaster>
    {
        bool Authenticate();

        IEnumerable<TblTalukaMaster> GetAllTaluka();
        IEnumerable<TblDistrictMaster> GetAllStateNameForDistrict(TblDistrictMaster master);
        IEnumerable<TblDistrictMaster> GetAllDistrictForState(TblTalukaMaster master);
        IEnumerable<TblTalukaMaster> SearchTalukaName(string searchString);
    }
}
