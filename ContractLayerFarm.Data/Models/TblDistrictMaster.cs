using System;
using System.Collections.Generic;

namespace ContractLayerFarm.Data.Models
{
    public partial class TblDistrictMaster
    {
        public TblDistrictMaster()
        {
            TblBeneficiaryMaster = new HashSet<TblBeneficiaryMaster>();
            TblTalukaMaster = new HashSet<TblTalukaMaster>();
        }

        public int DistrictId { get; set; }
        public int? StateId { get; set; }
        public string DistrictName { get; set; }
        public DateTime? CreateDate { get; set; }
        public DateTime? UpdateDate { get; set; }

        public TblStateMaster State { get; set; }
        public ICollection<TblBeneficiaryMaster> TblBeneficiaryMaster { get; set; }
        public ICollection<TblTalukaMaster> TblTalukaMaster { get; set; }
    }
}
