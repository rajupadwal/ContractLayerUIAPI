using System;
using System.Collections.Generic;

namespace ContractLayerFarm.Data.Models
{
    public partial class TblCasteMaster
    {
        public TblCasteMaster()
        {
            TblSubCasteMaster = new HashSet<TblSubCasteMaster>();
        }

        public int CasteId { get; set; }
        public string CasteName { get; set; }
        public DateTime? CreateDate { get; set; }
        public DateTime? UpdateDate { get; set; }

        public ICollection<TblSubCasteMaster> TblSubCasteMaster { get; set; }
    }
}
