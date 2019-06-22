using System;
using System.Collections.Generic;

namespace ContractLayerFarm.Data.Models
{
    public partial class TblMortalitywastageMt
    {
        public int RecordNo { get; set; }
        public DateTime? Date { get; set; }
        public int? LocationId { get; set; }
        public int? CustomerId { get; set; }
        public string Reason { get; set; }
        public string Pmdone { get; set; }
        public int? EmployeeId { get; set; }
        public string Diseases { get; set; }
        public int? PlanId { get; set; }
        public decimal? TotalQty { get; set; }
        public bool? IsDeleted { get; set; }
    }
}
