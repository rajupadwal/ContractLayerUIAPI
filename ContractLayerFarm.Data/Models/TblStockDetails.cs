using System;
using System.Collections.Generic;

namespace ContractLayerFarm.Data.Models
{
    public partial class TblStockDetails
    {
        public int StockId { get; set; }
        public string InwardDocNo { get; set; }
        public string OutwardDocNo { get; set; }
        public string DebitNoteNo { get; set; }
        public string CreditNoteNo { get; set; }
        public string TranscationType { get; set; }
        public int? ProductId { get; set; }
        public string ProductType { get; set; }
        public decimal? InwardQty { get; set; }
        public decimal? OutwardQty { get; set; }
        public DateTime? TranscationDate { get; set; }
        public decimal? OpeningStock { get; set; }
        public decimal? CreditNoteQty { get; set; }
        public decimal? DebitNoteQty { get; set; }
        public string Unit { get; set; }
        public bool? IsDelete { get; set; }

        public TblProductTypeMaster Product { get; set; }
    }
}
