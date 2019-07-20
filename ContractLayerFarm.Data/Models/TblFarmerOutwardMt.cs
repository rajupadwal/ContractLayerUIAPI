using System;
using System.Collections.Generic;

namespace ContractLayerFarm.Data.Models
{
    public partial class TblFarmerOutwardMt
    {
        public TblFarmerOutwardMt()
        {
            TblFarmerOutwardDt = new HashSet<TblFarmerOutwardDt>();
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
        public ICollection<TblFarmerOutwardDt> TblFarmerOutwardDt { get; set; }
    }
}
