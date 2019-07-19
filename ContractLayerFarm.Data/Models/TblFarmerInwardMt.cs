using System;
using System.Collections.Generic;

namespace ContractLayerFarm.Data.Models
{
    public partial class TblFarmerInwardMt
    {
        public TblFarmerInwardMt()
        {
            TblFarmerInwardDt = new HashSet<TblFarmerInwardDt>();
            TblFarmerOutwardDt = new HashSet<TblFarmerOutwardDt>();
        }

        public int RecordNo { get; set; }
        public DateTime Date { get; set; }
        public int LocationId { get; set; }
        public int CustomerId { get; set; }
        public int PlanId { get; set; }
        public bool? IsDeleted { get; set; }

        public ICollection<TblFarmerInwardDt> TblFarmerInwardDt { get; set; }
        public ICollection<TblFarmerOutwardDt> TblFarmerOutwardDt { get; set; }
    }
}
