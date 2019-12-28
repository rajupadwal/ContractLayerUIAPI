using System;
using System.Collections.Generic;

namespace ContractLayerFarm.Data.Models
{
    public partial class TblSchemeMaster
    {
        public TblSchemeMaster()
        {
            TblBeneficiaryMaster = new HashSet<TblBeneficiaryMaster>();
        }

        public int SchemeId { get; set; }
        public string SchemeName { get; set; }
        public string SanctionOrderNo { get; set; }
        public DateTime? SanctionDate { get; set; }
        public DateTime? DueDate { get; set; }
        public DateTime? CreateDate { get; set; }
        public DateTime? UpdateDate { get; set; }

        public ICollection<TblBeneficiaryMaster> TblBeneficiaryMaster { get; set; }
    }
}
