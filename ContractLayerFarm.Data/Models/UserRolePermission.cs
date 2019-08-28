using System;
using System.Collections.Generic;

namespace ContractLayerFarm.Data.Models
{
    public partial class UserRolePermission
    {
        public int PkId { get; set; }
        public int RoleId { get; set; }
        public string RolePagesPermission { get; set; }
        public UserRole UserRole { get; set; }
    }
}
