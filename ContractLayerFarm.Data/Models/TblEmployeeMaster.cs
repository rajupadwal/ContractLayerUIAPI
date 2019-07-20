using System;
using System.Collections.Generic;

namespace ContractLayerFarm.Data.Models
{
    public partial class TblEmployeeMaster
    {
        public TblEmployeeMaster()
        {
            TblOfficeExpencesDetails = new HashSet<TblOfficeExpencesDetails>();
        }

        public int EmployeeId { get; set; }
        public string EmployeeName { get; set; }
        public string Address { get; set; }
        public string EducationDetails { get; set; }
        public string PastWorkExp { get; set; }
        public string PersonalContactNo { get; set; }
        public string PanCardNo { get; set; }
        public string AadharId { get; set; }
        public string VoterId { get; set; }
        public string BloodGroup { get; set; }
        public string MaritialStatus { get; set; }
        public string Salary { get; set; }
        public DateTime? DateOfJoining { get; set; }
        public DateTime? DateOfLeaving { get; set; }
        public string Role { get; set; }
        public int? LocationId { get; set; }
        public string UserId { get; set; }
        public string Password { get; set; }
        public string CompanyMobileNo { get; set; }
        public string Post { get; set; }
        public string Remarks { get; set; }
        public string District { get; set; }
        public string Taluka { get; set; }
        public string City { get; set; }
        public string EmergencyContactName { get; set; }
        public string EmergencyNo { get; set; }
        public string Relation { get; set; }
        public string BankName { get; set; }
        public string AccountNo { get; set; }
        public string IfscCode { get; set; }
        public string MicrCode { get; set; }
        public string BranchName { get; set; }
        public string AccountType { get; set; }

        public TblLocationMaster Location { get; set; }
        public ICollection<TblOfficeExpencesDetails> TblOfficeExpencesDetails { get; set; }
    }
}
