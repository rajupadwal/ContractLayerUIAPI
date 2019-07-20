using System;
using System.Collections.Generic;

namespace ContractLayerFarm.Data.Models
{
    public partial class TblBookingCancelMaster
    {
        public int RecordNo { get; set; }
        public int? LocationId { get; set; }
        public int? CustomerId { get; set; }
        public DateTime? BookungCancelDate { get; set; }
        public int? PlanId { get; set; }
        public int? NoOfPlan { get; set; }
        public int? NoOfChicks { get; set; }
        public decimal? Amonut { get; set; }
        public int? CancelNoOfPlan { get; set; }
        public int? CancelNoOfChicks { get; set; }
        public decimal? CancelAmount { get; set; }
        public string PaymentMethod { get; set; }
        public string ChequeNo { get; set; }
        public decimal? PaidAmount { get; set; }
        public string Narration { get; set; }
        public bool? IsDeleted { get; set; }

        public TblCustomerMaster Customer { get; set; }
        public TblLocationMaster Location { get; set; }
        public TblPlanMaster Plan { get; set; }
    }
}
