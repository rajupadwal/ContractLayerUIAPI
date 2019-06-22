using System;
using System.Collections.Generic;

namespace ContractLayerFarm.Data.Models
{
    public partial class TblFarmerOutwardMt
    {
        public string RecordNo { get; set; }
        public DateTime? Date { get; set; }
        public int? LocationId { get; set; }
        public int? CustomerId { get; set; }
        public int? PlanId { get; set; }
        public decimal? TotalQty { get; set; }
        public bool? IsDeleted { get; set; }
    }
}
