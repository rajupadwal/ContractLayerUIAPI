using System;
using System.Collections.Generic;

namespace ContractLayerFarm.Data.Models
{
    public partial class TblEnquiryDetails
    {
        public int RecordNo { get; set; }
        public DateTime? Date { get; set; }
        public string CustomerName { get; set; }
        public string Enquiry { get; set; }
        public decimal? RequiredQty { get; set; }
        public string District { get; set; }
        public string Taluka { get; set; }
        public string City { get; set; }
        public int? PinCode { get; set; }
        public int? MobileNo { get; set; }
        public string Address { get; set; }
        public DateTime? RemindDate { get; set; }
        public string EnquiryType { get; set; }
        public string Narration { get; set; }
        public int? LocationId { get; set; }
        public bool? IsDeleted { get; set; }

        public TblLocationMaster Location { get; set; }
    }
}
