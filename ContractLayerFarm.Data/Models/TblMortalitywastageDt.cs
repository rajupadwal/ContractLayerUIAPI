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
        public int? ProductTypeId { get; set; }
        public string Unit { get; set; }
        public decimal? Quantity { get; set; }
        public bool? IsDeleted { get; set; }
    }
}
