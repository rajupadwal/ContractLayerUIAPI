using System;
using System.Collections.Generic;

namespace ContractLayerFarm.Data.Models
{
    public partial class TblEmployeeAdvance
    {
        public int EmpAdvanceId { get; set; }
        public int? RecordNo { get; set; }
        public DateTime? RecordDate { get; set; }
        public string LocationName { get; set; }
        public decimal? Advance { get; set; }
        public string Narration { get; set; }
        public string EmployeeName { get; set; }
    }
}
