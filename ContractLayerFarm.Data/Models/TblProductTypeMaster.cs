using System;
using System.Collections.Generic;

namespace ContractLayerFarm.Data.Models
{
    public partial class TblProductTypeMaster
    {
        public TblProductTypeMaster()
        {
            TblFeedSheduleMasterDt = new HashSet<TblFeedSheduleMasterDt>();
            TblMortalitywastageDt = new HashSet<TblMortalitywastageDt>();
            TblPurchaseBillDt = new HashSet<TblPurchaseBillDt>();
            TblPurchaseBillReturnDt = new HashSet<TblPurchaseBillReturnDt>();
            TblSalesBillDt = new HashSet<TblSalesBillDt>();
            TblStockDetails = new HashSet<TblStockDetails>();
        }

        public int PkId { get; set; }
        public int ProductId { get; set; }
        public string ProductType { get; set; }
        public string Hsnsac { get; set; }
        public int? UnitId { get; set; }
        public decimal? PurchasePrice { get; set; }
        public decimal? SellingPrice { get; set; }
        public decimal? Cgst { get; set; }
        public decimal? Sgst { get; set; }
        public decimal? Igst { get; set; }
        public decimal? MinimumQty { get; set; }
        public decimal? OpeningStock { get; set; }

        public ICollection<TblFeedSheduleMasterDt> TblFeedSheduleMasterDt { get; set; }
        public ICollection<TblMortalitywastageDt> TblMortalitywastageDt { get; set; }
        public ICollection<TblPurchaseBillDt> TblPurchaseBillDt { get; set; }
        public ICollection<TblPurchaseBillReturnDt> TblPurchaseBillReturnDt { get; set; }
        public ICollection<TblSalesBillDt> TblSalesBillDt { get; set; }
        public ICollection<TblStockDetails> TblStockDetails { get; set; }

        public TblProductMaster Product { get; set; }
        public TblUnitMaster Unit { get; set; }
    }
}
