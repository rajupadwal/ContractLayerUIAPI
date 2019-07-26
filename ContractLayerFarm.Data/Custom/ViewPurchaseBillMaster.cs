using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace ContractLayerFarm.Data.Models
{
   public class ViewPurchaseBillMaster
    {
        
        public int BillId { get; set; }
        public string BatchNo { get; set; }
        public string BillNo { get; set; }
        public DateTime? BillDate { get; set; }
        public DateTime? Grndate { get; set; }
       
        public int? LocationId { get; set; }
        public int? SupplierId { get; set; }
        public bool? IsDeleted { get; set; }

        public string SupplierName { get; set; }
        public string LocationName { get; set; }

        public TblSupplierMaster Supplier;

        public TblLocationMaster Location;

    }
}
