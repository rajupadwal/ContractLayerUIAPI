using System;
using System.Collections.Generic;

namespace ContractLayerFarm.Data.Models
{
    public partial class TblSalesBillMt
    {
        public TblSalesBillMt()
        {
            TblSalesBillDt = new HashSet<TblSalesBillDt>();
        }

        public int BillId { get; set; }
        public string BillNo { get; set; }
        public DateTime? BillDate { get; set; }
        public string SaleType { get; set; }
        public int? LocationId { get; set; }
        public int? CustomerId { get; set; }
        public int? PlanId { get; set; }
        public decimal? OutstandingAmt { get; set; }
        public string TransportMode { get; set; }
        public string VehicleNo { get; set; }
        public string PlaceOfSupply { get; set; }
        public string Address { get; set; }
        public DateTime? FromDate { get; set; }
        public DateTime? ToDate { get; set; }
        public decimal? TotalAmount { get; set; }
        public decimal? TdsPercentage { get; set; }
        public decimal? TdsAmount { get; set; }
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

        public TblCustomerMaster Customer { get; set; }
        public TblLocationMaster Location { get; set; }
        public TblPlanMaster Plan { get; set; }
        public ICollection<TblSalesBillDt> TblSalesBillDt { get; set; }
    }
}
