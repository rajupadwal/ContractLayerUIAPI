using System;
using System.Collections.Generic;

namespace ContractLayerFarm.Data.Models
{
    public partial class TblPlanMaster
    {
        public TblPlanMaster()
        {
            TblBookingCancelMaster = new HashSet<TblBookingCancelMaster>();
            TblBookingMaster = new HashSet<TblBookingMaster>();
            TblFarmerInwardMt = new HashSet<TblFarmerInwardMt>();
            TblFarmerOutwardMt = new HashSet<TblFarmerOutwardMt>();
            TblMortalitywastageMt = new HashSet<TblMortalitywastageMt>();
            TblSalesBillMt = new HashSet<TblSalesBillMt>();
        }

        public int PlanId { get; set; }
        public string PlanName { get; set; }
        public string ChickAgeInDays { get; set; }
        public string DurationInDays { get; set; }
        public string NoOfChicks { get; set; }
        public int? EggsReturn { get; set; }
        public decimal? ChicksReturnRate { get; set; }
        public decimal? Amount { get; set; }
        public decimal? AdminCharges { get; set; }

        public ICollection<TblBookingCancelMaster> TblBookingCancelMaster { get; set; }
        public ICollection<TblBookingMaster> TblBookingMaster { get; set; }
        public ICollection<TblFarmerInwardMt> TblFarmerInwardMt { get; set; }
        public ICollection<TblFarmerOutwardMt> TblFarmerOutwardMt { get; set; }
        public ICollection<TblMortalitywastageMt> TblMortalitywastageMt { get; set; }
        public ICollection<TblSalesBillMt> TblSalesBillMt { get; set; }
    }
}
