using System;
using System.Collections.Generic;

namespace ContractLayerFarm.Data.Models
{
    public partial class TblUserInfo
    {
        public int UserId { get; set; }
        public string Username { get; set; }
        public string Userpassword { get; set; }
        public string UserEmail { get; set; }
        public string UserType { get; set; }
        public DateTime? CreateDate { get; set; }
        public DateTime? UpdateDate { get; set; }
    }
}
