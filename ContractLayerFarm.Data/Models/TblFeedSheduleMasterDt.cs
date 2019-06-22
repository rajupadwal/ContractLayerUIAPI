using System;
using System.Collections.Generic;

namespace ContractLayerFarm.Data.Models
{
    public partial class TblFeedSheduleMasterDt
    {
        public int PkId { get; set; }
        public int? SrNo { get; set; }
        public int? ProductTypeId { get; set; }
        public string BirdAgeInDays { get; set; }
        public string DailyFeedInGrams { get; set; }
        public bool? IsDeleted { get; set; }
    }
}
