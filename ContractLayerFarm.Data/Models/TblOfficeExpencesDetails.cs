using System;
using System.Collections.Generic;

namespace ContractLayerFarm.Data.Models
{
    public partial class TblOfficeExpencesDetails
    {
        public int PkId { get; set; }
        public int ExpencesNo { get; set; }
        public DateTime? Date { get; set; }
        public int? ExpenceId { get; set; }
        public int? LocationId { get; set; }
        public int? EmployeeId { get; set; }
        public string PaymentMethod { get; set; }
        public string ChequeNo { get; set; }
        public decimal? Amount { get; set; }
        public string Narration { get; set; }
        public bool? IsDeleted { get; set; }

        public TblEmployeeMaster Employee { get; set; }
        public TblLocationMaster Location { get; set; }
        public TblExpenceTypeMaster Expence { get; set; }
    }
}
