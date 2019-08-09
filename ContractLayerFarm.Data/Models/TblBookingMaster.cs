using System;
using System.Collections.Generic;

namespace ContractLayerFarm.Data.Models
{
    public partial class TblBookingMaster
    {
        public int PkId { get; set; }
        public int RecordNo { get; set; }
        public int? LocationId { get; set; }
        public int? CustomerId { get; set; }
        public DateTime? BookingDate { get; set; }
        public string MobileNo { get; set; }
        public int? PlanId { get; set; }
        public int? NoOfPlan { get; set; }
        public int? NoOfChicks { get; set; }
        public decimal? EggsReturnRate { get; set; }

        public int? NoOfPlanCancel { get; set; }
        public decimal? Amount { get; set; }
        public int? EmployeeId { get; set; }
        public string EnquiryRef { get; set; }
        public string Agreement { get; set; }
        public decimal? EggsLiability { get; set; }
        public string PaymentMethod { get; set; }
        public string ChequeNo { get; set; }
        public decimal? PaidAmount { get; set; }
        public decimal? BalanceAmount { get; set; }
        public string Narration { get; set; }
        public string DeliveryStatus { get; set; }
        public bool? IsDeleted { get; set; }

        public TblCustomerMaster Customer { get; set; }
        public TblLocationMaster Location { get; set; }
        public TblPlanMaster Plan { get; set; }
        public TblEmployeeMaster Employee { get; set; }
    }
}
