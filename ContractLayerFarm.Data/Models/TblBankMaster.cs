using System;
using System.Collections.Generic;

namespace ContractLayerFarm.Data.Models
{
    public partial class TblBankMaster
    {
        public TblBankMaster()
        {
            TblBranchMaster = new HashSet<TblBranchMaster>();
        }

        public int BankId { get; set; }
        public string BankName { get; set; }
        public DateTime? CreateDate { get; set; }
        public DateTime? UpdateDate { get; set; }

        public ICollection<TblBranchMaster> TblBranchMaster { get; set; }
    }
}
