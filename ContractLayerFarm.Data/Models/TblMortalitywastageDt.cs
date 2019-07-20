using System;
using System.Collections.Generic;

namespace ContractLayerFarm.Data.Models
{
    public partial class TblMortalitywastageDt
    {
        public int PkId { get; set; }
        public int? RecordNo { get; set; }
        public DateTime? Date { get; set; }
        public int? ProductId { get; set; }
        public string ProductType { get; set; }
        public string Unit { get; set; }
        public decimal? Quantity { get; set; }
        public bool? IsDeleted { get; set; }

        public TblProductTypeMaster Product { get; set; }
        public TblMortalitywastageMt RecordNoNavigation { get; set; }
    }
}
