using System;
using System.Collections.Generic;

namespace ContractLayerFarm.Data.Models
{
    public partial class TblPurchaseBillReturnMt
    {
        public TblPurchaseBillReturnMt()
        {
            TblPurchaseBillReturnDt = new HashSet<TblPurchaseBillReturnDt>();
        }

        public int PkId { get; set; }
        public int BillId { get; set; }
        public string BatchNo { get; set; }
        public string BillNo { get; set; }
        public DateTime? BillDate { get; set; }
        public DateTime? Grndate { get; set; }
        public int? LocationId { get; set; }
        public int? SupplierId { get; set; }
        public decimal? BeforeTaxAmt { get; set; }
        public decimal? TransportationCost { get; set; }
        public decimal? TransportationgstPer { get; set; }
        public decimal? TransportationgstAmt { get; set; }
        public decimal? TotalTransportAmt { get; set; }
        public decimal? TotalCgstAmt { get; set; }
        public decimal? TotalSgstAmt { get; set; }
        public decimal? TotalIgstAmt { get; set; }
        public decimal? OtherCharges { get; set; }
        public decimal? Roundoff { get; set; }
        public decimal? GrandTotal { get; set; }
        public string Narration { get; set; }
        public bool? IsDeleted { get; set; }

        public TblLocationMaster Location { get; set; }
        public TblSupplierMaster Supplier { get; set; }
        public ICollection<TblPurchaseBillReturnDt> TblPurchaseBillReturnDt { get; set; }
    }
}
