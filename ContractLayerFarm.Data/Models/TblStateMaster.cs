using System;
using System.Collections.Generic;

namespace ContractLayerFarm.Data.Models
{
    public partial class TblStateMaster
    {
        public TblStateMaster()
        {
            //TblBeneficiaryMaster = new HashSet<TblBeneficiaryMaster>();
            TblDistrictMaster = new HashSet<TblDistrictMaster>();
        }

        public int StateId { get; set; }
        public string StateName { get; set; }
        public DateTime? CreateDate { get; set; }
        public DateTime? UpdateDate { get; set; }

        //public ICollection<TblBeneficiaryMaster> TblBeneficiaryMaster { get; set; }
        public ICollection<TblDistrictMaster> TblDistrictMaster { get; set; }
    }
}
