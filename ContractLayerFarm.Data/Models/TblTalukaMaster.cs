using System;
using System.Collections.Generic;

namespace ContractLayerFarm.Data.Models
{
    public partial class TblTalukaMaster
    {
        public TblTalukaMaster()
        {
            TblBeneficiaryMaster = new HashSet<TblBeneficiaryMaster>();
        }

        public int TalukaId { get; set; }
        public int? StateId { get; set; }
        public int? DistrictId { get; set; }
        public byte[] TalukaName { get; set; }
        public DateTime? CreateDate { get; set; }
        public DateTime? UpdateDate { get; set; }

        public TblDistrictMaster District { get; set; }
        public ICollection<TblBeneficiaryMaster> TblBeneficiaryMaster { get; set; }
    }
}
