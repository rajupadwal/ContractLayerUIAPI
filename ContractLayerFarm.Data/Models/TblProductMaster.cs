using System;
using System.Collections.Generic;

namespace ContractLayerFarm.Data.Models
{
    public partial class TblProductMaster
    {
        public int PkId { get; set; }
        public int ProductId { get; set; }
        public string ProductType { get; set; }
        public string Hsnsac { get; set; }
        public string Unit { get; set; }
        public decimal? PurchasePrice { get; set; }
        public decimal? SellingPrice { get; set; }
        public decimal? Cgst { get; set; }
        public decimal? Sgst { get; set; }
        public decimal? Igst { get; set; }
        public decimal? MinimumQty { get; set; }
        public decimal? OpeningStock { get; set; }
    }
}
