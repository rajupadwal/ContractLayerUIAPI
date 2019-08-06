using System;
using System.Collections.Generic;

namespace ContractLayerFarm.Data.Models
{
    public partial class TblFarmerOutwardDt
    {
        public int PkId { get; set; }
        public int? RecordNo { get; set; }
        public DateTime? Date { get; set; }
        public int? ProductId { get; set; }
        public string ProductType { get; set; }
        public int UnitId { get; set; }
        public decimal? Quantity { get; set; }
        public bool? IsDeleted { get; set; }

        public TblFarmerOutwardMt RecordNoNavigation { get; set; }
    }
}
