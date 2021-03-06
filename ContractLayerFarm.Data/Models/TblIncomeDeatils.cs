﻿using System;
using System.Collections.Generic;

namespace ContractLayerFarm.Data.Models
{
    public partial class TblIncomeDeatils
    {
        public int PkId { get; set; }
        public int RecordNo { get; set; }
        public DateTime? Date { get; set; }
        public int? LocationId { get; set; }
        public int? IncomeId { get; set; }
        public string Title { get; set; }
        public string PaymentMethod { get; set; }
        public string ChequeNo { get; set; }
        public decimal? Amount { get; set; }
        public string Narration { get; set; }
        public bool? IsDeleted { get; set; }

        public TblIncomeType Income { get; set; }
        public TblLocationMaster Location { get; set; }
    }
}
