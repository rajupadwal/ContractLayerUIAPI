using System;
using System.Collections.Generic;

namespace ContractLayerFarm.Data.Models
{
    public partial class TblExpenceTypeMaster
    {
        public int ExpenceId { get; set; }
        public string ExpenceType { get; set; }
        public bool? IsDeleted { get; set; }
    }
}
