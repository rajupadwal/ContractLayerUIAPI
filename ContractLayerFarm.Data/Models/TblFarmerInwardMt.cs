using System;
using System.Collections.Generic;

namespace ContractLayerFarm.Data.Models
{
    public partial class TblFarmerInwardMt
    {
        public TblFarmerInwardMt()
        {
            TblFarmerInwardDt = new HashSet<TblFarmerInwardDt>();
        }

        public int RecordNo { get; set; }
        public DateTime Date { get; set; }
        public int LocationId { get; set; }
        public int CustomerId { get; set; }
        public int PlanId { get; set; }
        public bool? IsDeleted { get; set; }

        public TblCustomerMaster Customer { get; set; }
        public TblLocationMaster Location { get; set; }
        public TblPlanMaster Plan { get; set; }
        public ICollection<TblFarmerInwardDt> TblFarmerInwardDt { get; set; }
    }
}
