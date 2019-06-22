using System;
using System.Collections.Generic;

namespace ContractLayerFarm.Data.Models
{
    public partial class TblShedMaster
    {
        public int ShedId { get; set; }
        public string WorkDeatils { get; set; }
        public string ShedAgeInDays { get; set; }
        public string ShedDaysToReapt { get; set; }
    }
}
