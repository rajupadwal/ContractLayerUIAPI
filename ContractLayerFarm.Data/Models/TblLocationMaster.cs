using System;
using System.Collections.Generic;

namespace ContractLayerFarm.Data.Models
{
    public partial class TblLocationMaster
    {
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
    }
}
