using System;
using System.Collections.Generic;

namespace ContractLayerFarm.Data.Models
{
    public partial class TblMortalitywastageMt
    {
        public TblMortalitywastageMt()
        {
            TblMortalitywastageDt = new HashSet<TblMortalitywastageDt>();
        }

        public int RecordNo { get; set; }
        public DateTime? Date { get; set; }
        public int? LocationId { get; set; }
        public int? CustomerId { get; set; }
        public string Reason { get; set; }
        public string PmDone { get; set; }
        public int? EmployeeId { get; set; }
        public string Diseases { get; set; }
        public int? PlanId { get; set; }
        public bool? IsDeleted { get; set; }

        public TblCustomerMaster Customer { get; set; }
        public TblLocationMaster Location { get; set; }
        public TblPlanMaster Plan { get; set; }
        public ICollection<TblMortalitywastageDt> TblMortalitywastageDt { get; set; }
    }
}
