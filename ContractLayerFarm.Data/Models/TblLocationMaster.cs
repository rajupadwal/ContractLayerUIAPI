using System;
using System.Collections.Generic;

namespace ContractLayerFarm.Data.Models
{
    public partial class TblLocationMaster
    {
        public TblLocationMaster()
        {
            TblBookingCancelMaster = new HashSet<TblBookingCancelMaster>();
            TblBookingMaster = new HashSet<TblBookingMaster>();
            TblCustomerMaster = new HashSet<TblCustomerMaster>();
            TblEmployeeAdvance = new HashSet<TblEmployeeAdvance>();
            TblEmployeeMaster = new HashSet<TblEmployeeMaster>();
            TblEnquiryDetails = new HashSet<TblEnquiryDetails>();
            TblFarmerInwardMt = new HashSet<TblFarmerInwardMt>();
            TblFarmerOutwardMt = new HashSet<TblFarmerOutwardMt>();
            TblIncomeDeatils = new HashSet<TblIncomeDeatils>();
            TblMortalitywastageMt = new HashSet<TblMortalitywastageMt>();
            TblOfficeExpencesDetails = new HashSet<TblOfficeExpencesDetails>();
            TblPurchaseBillMt = new HashSet<TblPurchaseBillMt>();
            TblPurchaseBillReturnMt = new HashSet<TblPurchaseBillReturnMt>();
            TblPurchaseReturnReceipt = new HashSet<TblPurchaseReturnReceipt>();
            TblSalesBillMt = new HashSet<TblSalesBillMt>();
            TblSalesReceipt = new HashSet<TblSalesReceipt>();
        }

        public int LocationId { get; set; }
        public string LocationName { get; set; }
        public string LocationCode { get; set; }
        public string PinCode { get; set; }
        public string Address { get; set; }
        public string Remarks { get; set; }
        public string ContactNo { get; set; }
        public string VoucherType { get; set; }
        public string Prefix { get; set; }
        public string BillinigSeriesfrom { get; set; }
        public string BillingSeriesTo { get; set; }

        public ICollection<TblBookingCancelMaster> TblBookingCancelMaster { get; set; }
        public ICollection<TblBookingMaster> TblBookingMaster { get; set; }
        public ICollection<TblCustomerMaster> TblCustomerMaster { get; set; }
        public ICollection<TblEmployeeAdvance> TblEmployeeAdvance { get; set; }
        public ICollection<TblEmployeeMaster> TblEmployeeMaster { get; set; }
        public ICollection<TblEnquiryDetails> TblEnquiryDetails { get; set; }
        public ICollection<TblFarmerInwardMt> TblFarmerInwardMt { get; set; }
        public ICollection<TblFarmerOutwardMt> TblFarmerOutwardMt { get; set; }
        public ICollection<TblIncomeDeatils> TblIncomeDeatils { get; set; }
        public ICollection<TblMortalitywastageMt> TblMortalitywastageMt { get; set; }
        public ICollection<TblOfficeExpencesDetails> TblOfficeExpencesDetails { get; set; }
        public ICollection<TblPurchaseBillMt> TblPurchaseBillMt { get; set; }
        public ICollection<TblPurchaseBillReturnMt> TblPurchaseBillReturnMt { get; set; }
        public ICollection<TblPurchaseReturnReceipt> TblPurchaseReturnReceipt { get; set; }
        public ICollection<TblSalesBillMt> TblSalesBillMt { get; set; }
        public ICollection<TblSalesReceipt> TblSalesReceipt { get; set; }
    }
}
