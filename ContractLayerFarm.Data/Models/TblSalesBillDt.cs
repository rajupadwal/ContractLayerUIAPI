using System;
using System.Collections.Generic;

namespace ContractLayerFarm.Data.Models
{
    public partial class TblSalesBillDt
    {
        public int PkId { get; set; }
        public string BillNo { get; set; }
        public DateTime? BillDate { get; set; }
        public int? ProductId { get; set; }
        public int? ProductTypeId { get; set; }
        public decimal? Quantity { get; set; }
        public decimal? Rate { get; set; }
        public decimal? Amonut { get; set; }
        public bool? IsDeleted { get; set; }
    }
}
