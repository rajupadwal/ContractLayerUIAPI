using System;
using System.Collections.Generic;

namespace ContractLayerFarm.Data.Models
{
    public partial class TblHatcheryMaster
    {
        public int SrNo { get; set; }
        public string HatcheryName { get; set; }
        public string ContactPersonName { get; set; }
        public string MobileNo { get; set; }
        public string Address { get; set; }
        public int? LocationId { get; set; }
        public decimal? HatcheryRate { get; set; }
        public string Password { get; set; }
        public bool? IsDeleted { get; set; }
    }
}
