using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace ContractLayerFarm.Data.Models
{
    public partial class ContractLayerDBContext : DbContext
    {
        public virtual DbSet<ViewFarmerInwardMaster> ViewFarmerInwardMasters { get; set; }


    }
}
