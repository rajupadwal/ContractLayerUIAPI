using System;
using System.Collections.Generic;

namespace ContractLayerFarm.Data.Models
{
    public partial class TblPurchaseBillMt
    {
        public int PkId { get; set; }
        public string BatchNo { get; set; }
        public string BillNo { get; set; }
        public DateTime? BillDate { get; set; }
        public DateTime? Grndate { get; set; }
        public int? LocationId { get; set; }
        public int? SupplierId { get; set; }
        public decimal? BeforeTaxAmt { get; set; }
        public decimal? TransportationCost { get; set; }
        public decimal? TransportationGstper { get; set; }
        public decimal? TransportationGstamt { get; set; }
        public decimal? TotalTransportAmt { get; set; }
        public decimal? TotalCgstamt { get; set; }
        public decimal? TotalSgstamt { get; set; }
        public decimal? TotalIgstamt { get; set; }
        public decimal? OtherCharges { get; set; }
        public decimal? Roundoff { get; set; }
        public decimal? GrandTotal { get; set; }
        public string Narration { get; set; }
        public bool? IsDeleted { get; set; }
    }
}
