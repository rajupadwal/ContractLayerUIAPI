using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace ContractLayerFarm.Data.Models
{
   public class ViewFarmerInwardMaster
    {
        [Key]
        public int RecordNo { get; set; }
        public DateTime? Date { get; set; }
        public int? LocationId { get; set; }
        public int? CustomerId { get; set; }
        public int? PlanId { get; set; }
        public bool? IsDeleted { get; set; }

        public string PlanName { get; set; }
        public string CustmerName { get; set; }
        public string LocationName { get; set; }

        public TblCustomerMaster Customer;

        public TblLocationMaster Location;

        public TblPlanMaster Plan;

    }
}
