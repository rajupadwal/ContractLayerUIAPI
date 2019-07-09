using System;
using System.Collections.Generic;

namespace ContractLayerFarm.Data.Models
{
    public partial class TblCompanyProfile
    {
        public int ProfileId { get; set; }
        public string CompanyName { get; set; }
        public string PhoneNo { get; set; }
        public string Address { get; set; }
        public string EmailId { get; set; }
        public string MobileNo { get; set; }
        public string GstNo { get; set; }
        public string CompanyLogo { get; set; }
        public string ThankYouNote { get; set; }
    }
}
