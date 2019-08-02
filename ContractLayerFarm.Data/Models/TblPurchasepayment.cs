using System;
using System.Collections.Generic;

namespace ContractLayerFarm.Data.Models
{
    public partial class TblPurchasepayment
    {
        public int RecordNo { get; set; }
        public DateTime? Date { get; set; }
        public int? LocationId { get; set; }
        public int? SupplierId { get; set; }
        public string PaymentType { get; set; }
        public string BillRefNo { get; set; }
        public string PaymentMethod { get; set; }
        public string ChequeNo { get; set; }
        public decimal? AmountPaid { get; set; }
        public string Narration { get; set; }
        public bool? IsDeleted { get; set; }

        public TblLocationMaster Location { get; set; }
        public TblSupplierMaster Supplier { get; set; }
    }
}
