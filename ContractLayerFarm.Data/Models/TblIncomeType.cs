using System;
using System.Collections.Generic;

namespace ContractLayerFarm.Data.Models
{
    public partial class TblIncomeType
    {
        public TblIncomeType()
        {
            TblIncomeDeatils = new HashSet<TblIncomeDeatils>();
        }

        public int IncomeId { get; set; }
        public string IncomeType { get; set; }
        public bool? IsDeleted { get; set; }

        public ICollection<TblIncomeDeatils> TblIncomeDeatils { get; set; }
    }
}
