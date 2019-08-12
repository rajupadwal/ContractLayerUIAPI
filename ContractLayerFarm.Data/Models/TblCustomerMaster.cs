using System;
using System.Collections.Generic;

namespace ContractLayerFarm.Data.Models
{
    public partial class TblCustomerMaster
    {
        public TblCustomerMaster()
        {
            TblBookingCancelMaster = new HashSet<TblBookingCancelMaster>();
            TblBookingMaster = new HashSet<TblBookingMaster>();
            TblFarmerInwardMt = new HashSet<TblFarmerInwardMt>();
            TblFarmerOutwardMt = new HashSet<TblFarmerOutwardMt>();
            TblMortalitywastageMt = new HashSet<TblMortalitywastageMt>();
            TblSalesBillMt = new HashSet<TblSalesBillMt>();
            TblSalesReceipt = new HashSet<TblSalesReceipt>();
        }

        public int CustomerId { get; set; }
        public string CustmerName { get; set; }
        public string CustomerMobileNo { get; set; }
        public string Address { get; set; }
        public string PlantAddress { get; set; }
        public string State { get; set; }
        public string District { get; set; }
        public string Taluka { get; set; }
        public string City { get; set; }
        public string Pincode { get; set; }
        public int? LocationId { get; set; }
        public string GstNo { get; set; }
        public string PanNo { get; set; }
        public string ContactPerson { get; set; }
        public string ConatctPersonNo { get; set; }
        public string Designation { get; set; }
        public string MicrCode { get; set; }
        public string BankName { get; set; }
        public string AccountNo { get; set; }
        public string AccountHolderName { get; set; }
        public string IfscCode { get; set; }
        public string BranchName { get; set; }
        public string AccountType { get; set; }
        public bool? IsDeleted { get; set; }

        public TblLocationMaster Location { get; set; }
        public ICollection<TblBookingCancelMaster> TblBookingCancelMaster { get; set; }
        public ICollection<TblBookingMaster> TblBookingMaster { get; set; }
        public ICollection<TblFarmerInwardMt> TblFarmerInwardMt { get; set; }
        public ICollection<TblFarmerOutwardMt> TblFarmerOutwardMt { get; set; }
        public ICollection<TblMortalitywastageMt> TblMortalitywastageMt { get; set; }
        public ICollection<TblSalesBillMt> TblSalesBillMt { get; set; }
        public ICollection<TblSalesReceipt> TblSalesReceipt { get; set; }
    }
}
