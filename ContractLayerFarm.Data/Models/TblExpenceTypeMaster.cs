using System;
using System.Collections.Generic;

namespace ContractLayerFarm.Data.Models
{
    public partial class TblExpenceTypeMaster
    {
        public TblExpenceTypeMaster()
        {
            TblOfficeExpencesDetails = new HashSet<TblOfficeExpencesDetails>();
        }

        public int ExpenceId { get; set; }
        public string ExpenceType { get; set; }
        public bool? IsDeleted { get; set; }

        public ICollection<TblOfficeExpencesDetails> TblOfficeExpencesDetails { get; set; }

        
    }
}
