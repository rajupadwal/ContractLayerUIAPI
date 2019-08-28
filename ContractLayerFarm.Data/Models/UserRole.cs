using System;
using System.Collections.Generic;

namespace ContractLayerFarm.Data.Models
{
    public partial class UserRole
    {
        public UserRole()
        {
            UserRolePermission = new HashSet<UserRolePermission>();
            TblUserInfo = new HashSet<TblUserInfo>();
        }
        public int RoleId { get; set; }
        public string RoleName { get; set; }
        public ICollection<UserRolePermission> UserRolePermission { get; set; }
        public ICollection<TblUserInfo> TblUserInfo { get; set; }
    }
}
