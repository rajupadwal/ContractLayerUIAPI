using System;
using System.Collections.Generic;

namespace ContractLayerFarm.Data.Models
{
    public partial class TblSupplierTransaction
    {
        public int PkId { get; set; }
        public DateTime? TransactionDate { get; set; }
        public int? SupplierId { get; set; }
        public string BillId { get; set; }
        public string TransactionType { get; set; }
        public decimal? PurchaseAmount { get; set; }
        public decimal? PurchasePaidAmt { get; set; }
        public string PaymentVocherNo { get; set; }
        public string PaymentType { get; set; }
        public string Narration { get; set; }
    }
}
