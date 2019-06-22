using System;
using System.Collections.Generic;

namespace ContractLayerFarm.Data.Models
{
    public partial class TblPlanMaster
    {
        public int PlanId { get; set; }
        public string PlanName { get; set; }
        public string ChickAgeInDays { get; set; }
        public string DurationInDays { get; set; }
        public string NoOfChicks { get; set; }
        public int? EggsReturn { get; set; }
        public decimal? ChicksReturnRate { get; set; }
        public decimal? Amount { get; set; }
        public decimal? AdminCharges { get; set; }
    }
}
