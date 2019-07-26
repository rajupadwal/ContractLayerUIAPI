using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace ContractLayerFarm.Data.Models
{
   public class ViewFarmerChickEggBillMaster
    {
        [Key]
        public int BillId { get; set; }
        public string BillNo { get; set; }
        public string SaleType { get; set; }
        public DateTime? BillDate { get; set; }
        public int? LocationId { get; set; }
        public int? CustomerId { get; set; }
        public int? PlanId { get; set; }
        public string PlaceOfSupply { get; set; }
        public string Address { get; set; }
        public decimal? TotalAmount { get; set; }
        public decimal? TdsAmount { get; set; }
        public decimal? AdminChargesAmt { get; set; }
        public decimal? OtherCharges { get; set; }
        public decimal? GrandTotal { get; set; }


        public bool? IsDeleted { get; set; }
       
        public string PlanName { get; set; }
        public string CustmerName { get; set; }
        public string LocationName { get; set; }

        public TblCustomerMaster Customer;

        public TblLocationMaster Location;

        public TblPlanMaster Plan;

    }
}
