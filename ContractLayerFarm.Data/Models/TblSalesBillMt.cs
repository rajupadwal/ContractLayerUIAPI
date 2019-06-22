using System;
using System.Collections.Generic;

namespace ContractLayerFarm.Data.Models
{
    public partial class TblSalesBillMt
    {
        public int PkId { get; set; }
        public string BillNo { get; set; }
        public DateTime? BillDate { get; set; }
        public int? LocationId { get; set; }
        public int? CustomerId { get; set; }
        public decimal? OutstandingAmt { get; set; }
        public string TransportMode { get; set; }
        public string VehicleNo { get; set; }
        public string PlaceOfSupply { get; set; }
        public string Address { get; set; }
        public DateTime? FromDate { get; set; }
        public DateTime? ToDate { get; set; }
        public decimal? TotalAmount { get; set; }
        public decimal? Tdspercentage { get; set; }
        public decimal? Tdsamount { get; set; }
        public decimal? AdminChargesPer { get; set; }
        public decimal? AdminChargesAmt { get; set; }
        public decimal? OtherCharges { get; set; }
        public decimal? GrandTotal { get; set; }
        public string PaymentMethod { get; set; }
        public string ChequeNo { get; set; }
        public decimal? ChequeAmt { get; set; }
        public decimal? CashAmount { get; set; }
        public string Narration { get; set; }
        public string Note { get; set; }
        public bool? IsDeleted { get; set; }
    }
}
