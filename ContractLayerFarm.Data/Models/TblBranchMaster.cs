﻿using System;
using System.Collections.Generic;

namespace ContractLayerFarm.Data.Models
{
    public partial class TblBranchMaster
    {
        public int BranchId { get; set; }
        public int? BankId { get; set; }
        public string BranchName { get; set; }
        public string IfscCode { get; set; }
        public DateTime? CreateDate { get; set; }
        public DateTime? UpdateDate { get; set; }

        public TblBankMaster Bank { get; set; }
    }
}