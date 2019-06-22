using System;
using System.Collections.Generic;

namespace ContractLayerFarm.Data.Models
{
    public partial class TblFeedSheduleMasterMt
    {
        public int SrNo { get; set; }
        public int? ProductTypeId { get; set; }
        public bool? IsDeleted { get; set; }
    }
}
