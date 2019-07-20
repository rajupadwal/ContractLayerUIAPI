using System;
using System.Collections.Generic;

namespace ContractLayerFarm.Data.Models
{
    public partial class TblSalesBillDt
    {
        public int PkId { get; set; }
        public int BillId { get; set; }
        public string BillNo { get; set; }
        public DateTime? BillDate { get; set; }
        public int? ProductId { get; set; }
        public string ProductType { get; set; }
        public decimal? Quantity { get; set; }
        public decimal? Rate { get; set; }
        public decimal? Amonut { get; set; }
        public bool? IsDeleted { get; set; }

        public TblSalesBillMt Bill { get; set; }
        public TblProductTypeMaster Product { get; set; }
    }
}
