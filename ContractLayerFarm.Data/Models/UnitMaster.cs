using System;
using System.Collections.Generic;

namespace ContractLayerFarm.Data.Models
{
    public partial class UnitMaster
    {
        public int UnitId { get; set; }
        public string UnitCode { get; set; }
        public string UnitDescription { get; set; }
        public bool? IsDeleted { get; set; }
    }
}
