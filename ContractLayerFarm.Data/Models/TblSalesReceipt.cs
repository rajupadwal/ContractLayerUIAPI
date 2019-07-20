using System;
using System.Collections.Generic;

namespace ContractLayerFarm.Data.Models
{
    public partial class TblSalesReceipt
    {
        public int ReceiptNo { get; set; }
        public DateTime? Date { get; set; }
        public int? LocationId { get; set; }
        public int? CustomerId { get; set; }
        public string PaymentType { get; set; }
        public string BillRefNo { get; set; }
        public string PaymentMethod { get; set; }
        public string ChequeNo { get; set; }
        public decimal? ChequeAmount { get; set; }
        public decimal? CashAmount { get; set; }
        public string Narration { get; set; }
        public bool? IsDeleted { get; set; }

        public TblCustomerMaster Customer { get; set; }
        public TblLocationMaster Location { get; set; }
    }
}
