using System;
using System.Collections.Generic;
using System.Text;
using ContractLayerFarm.Data.Models;
namespace ContractLayerFarm.Data.Contract
{
       public interface IBeneficieryRepository : IRepositoryBase<TblBeneficiaryMaster>
    {
        bool Authenticate();
        int GetBeneficieryNo();
        IEnumerable<TblBeneficiaryMaster> GetAllBeneficiery();
        IEnumerable<TblDistrictMaster> GetAllDistrictForState(TblBeneficiaryMaster master);
        IEnumerable<TblTalukaMaster> GetAllTalukaForStateDistrict(TblBeneficiaryMaster master);
        IEnumerable<TblSubCasteMaster> GetAllSubcasteForCaste(TblBeneficiaryMaster master);
        IEnumerable<TblSubTypeMaster> GetAllSubtypeForType(TblBeneficiaryMaster master);
        IEnumerable<TblBranchMaster> GetAllBranchForBank(TblBeneficiaryMaster master);

    }
}
