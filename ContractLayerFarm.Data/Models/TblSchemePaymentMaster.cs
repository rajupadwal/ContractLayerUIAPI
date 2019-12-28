using System;
using System.Collections.Generic;

namespace ContractLayerFarm.Data.Models
{
    public partial class TblSchemePaymentMaster
    {
        public TblSchemePaymentMaster()
        {
            TblBeneficiaryMaster = new HashSet<TblBeneficiaryMaster>();
        }

        public int SrNo { get; set; }
        public decimal Amount { get; set; }
        public DateTime? CreateDate { get; set; }
        public DateTime? UpdateDate { get; set; }

        public ICollection<TblBeneficiaryMaster> TblBeneficiaryMaster { get; set; }
    }
}
