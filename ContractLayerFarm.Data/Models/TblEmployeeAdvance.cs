using System;
using System.Collections.Generic;

namespace ContractLayerFarm.Data.Models
{
    public partial class TblEmployeeAdvance
    {
        public int PkId { get; set; }
        public int RecordNo { get; set; }
        public DateTime? RecordDate { get; set; }
        public int? LocationId { get; set; }
        public decimal? Advance { get; set; }
        public string Narration { get; set; }
        public int? EmployeeId { get; set; }

        public TblLocationMaster Location { get; set; }
        public TblEmployeeMaster Employee { get; set; }
    }
}
