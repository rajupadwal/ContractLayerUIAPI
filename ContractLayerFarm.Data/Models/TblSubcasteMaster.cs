using System;
using System.Collections.Generic;

namespace ContractLayerFarm.Data.Models
{
    public partial class TblSubCasteMaster
    {
        public TblSubCasteMaster()
        {
            TblBeneficiaryMaster = new HashSet<TblBeneficiaryMaster>();
        }

        public int SubCasteId { get; set; }
        public int? CasteId { get; set; }
        public string SubCasteName { get; set; }
        public DateTime? CreateDate { get; set; }
        public DateTime? UpdateDate { get; set; }

        public TblCasteMaster Caste { get; set; }
        public ICollection<TblBeneficiaryMaster> TblBeneficiaryMaster { get; set; }
    }
}
