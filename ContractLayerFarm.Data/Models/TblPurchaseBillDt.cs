using System;
using System.Collections.Generic;

namespace ContractLayerFarm.Data.Models
{
    public partial class TblPurchaseBillDt
    {
        public int PkId { get; set; }
        public int BillId { get; set; }
        public string BatchNo { get; set; }
        public string BillNo { get; set; }
        public DateTime? BillDate { get; set; }
        public int? ProductId { get; set; }
        public string ProductType { get; set; }
        public int? UnitId { get; set; }
        public string HsnCode { get; set; }
        public decimal? Quantity { get; set; }
        public decimal? Rate { get; set; }
        public decimal? Mrp { get; set; }
        public decimal? Discount { get; set; }
        public decimal? TaxableAmt { get; set; }
        public decimal? CgstPercentage { get; set; }
        public decimal? SgstPercentage { get; set; }
        public decimal? IgstPercentage { get; set; }
        public decimal? TotalCgst { get; set; }
        public decimal? TotalSgst { get; set; }
        public decimal? TotalIgst { get; set; }
        public decimal? TotalAmount { get; set; }
        public bool? IsDeleted { get; set; }

        public TblPurchaseBillMt Bill { get; set; }
        public TblProductTypeMaster Product { get; set; }
    }
}
