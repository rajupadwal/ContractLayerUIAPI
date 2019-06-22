using System;
using System.Collections.Generic;

namespace ContractLayerFarm.Data.Models
{
    public partial class TblSupplierMaster
    {
        public int SupplierId { get; set; }
        public string SupplierName { get; set; }
        public string SupplierMobileNo { get; set; }
        public string Address { get; set; }
        public string PlantAddress { get; set; }
        public string State { get; set; }
        public string District { get; set; }
        public string Taluka { get; set; }
        public string City { get; set; }
        public string Pincode { get; set; }
        public string WebAddress { get; set; }
        public string RegistrationNo { get; set; }
        public string GstNo { get; set; }
        public string PanNo { get; set; }
        public string Remarks { get; set; }
        public string ContactPerson { get; set; }
        public string ConatctPersonNo { get; set; }
        public string Designation { get; set; }
        public string BankName { get; set; }
        public string AccountNo { get; set; }
        public string IfscCode { get; set; }
        public string MicrCode { get; set; }
        public string BranchName { get; set; }
        public string AccountType { get; set; }
    }
}
