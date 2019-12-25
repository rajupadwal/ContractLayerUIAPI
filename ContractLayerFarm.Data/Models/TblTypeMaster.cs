﻿using System;
using System.Collections.Generic;

namespace ContractLayerFarm.Data.Models
{
    public partial class TblTypeMaster
    {
        public TblTypeMaster()
        {
            TblSubTypeMaster = new HashSet<TblSubTypeMaster>();
        }

        public int TypeId { get; set; }
        public string TypeName { get; set; }
        public DateTime? CreateDate { get; set; }
        public DateTime? UpdateDate { get; set; }

        public ICollection<TblSubTypeMaster> TblSubTypeMaster { get; set; }
    }
}
