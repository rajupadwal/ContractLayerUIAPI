﻿using System;
using System.Collections.Generic;

namespace ContractLayerFarm.Data.Models
{
    public partial class TblSubTypeMaster
    {
        public TblSubTypeMaster()
        {
            
        }

        public int SubTypeId { get; set; }
        public int? TypeId { get; set; }
        public string SubType { get; set; }
        public DateTime? CreateDate { get; set; }
        public DateTime? UpdateDate { get; set; }

        public TblTypeMaster Type { get; set; }
                     
    }
}
