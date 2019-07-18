﻿using System;
using System.Collections.Generic;

namespace ContractLayerFarm.Data.Models
{
    public partial class TblFarmerInwardMt
    {
        public int RecordNo { get; set; }
        public DateTime? Date { get; set; }
        public int? LocationId { get; set; }
        public int? CustomerId { get; set; }
        public int? PlanId { get; set; }
        public bool? IsDeleted { get; set; }
    }
}
