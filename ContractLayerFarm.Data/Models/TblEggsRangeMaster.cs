using System;
using System.Collections.Generic;

namespace ContractLayerFarm.Data.Models
{
    public partial class TblEggsRangeMaster
    {
        public int EggsRangeCode { get; set; }
        public int? EggsRangeFrom { get; set; }
        public int? EggsRangeTo { get; set; }
        public decimal? EggsRate { get; set; }
    }
}
