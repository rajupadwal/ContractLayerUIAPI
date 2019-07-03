﻿using System;
using System.Collections.Generic;

namespace ContractLayerFarm.Data.Models
{
    public partial class TblEmployeeMaster
    {
        public int EmployeeId { get; set; }
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public string EducationDetails { get; set; }
        public string PastWorkExp { get; set; }
        public string ContactNoPersonal { get; set; }
        public string PanCardNo { get; set; }
        public string AddharId { get; set; }
        public string VoterId { get; set; }
        public string BloodGroup { get; set; }
        public string MaritialStatus { get; set; }
        public string Salary { get; set; }
        public DateTime? DateOfJoining { get; set; }
        public DateTime? DateOfLeaving { get; set; }
        public string Role { get; set; }
        public string Location { get; set; }
        public string UserId { get; set; }
        public string Password { get; set; }
        public string CompanyMobileNo { get; set; }
        public string Post { get; set; }
        public string Remarks { get; set; }
        public string District { get; set; }
        public string Taluka { get; set; }
        public string City { get; set; }
        public string EmergencyConatactName { get; set; }
        public string EmergencyNo { get; set; }
        public string Relation { get; set; }
        public string BankName { get; set; }
        public string AccountNo { get; set; }
        public string Ifsccode { get; set; }
        public string Micrcode { get; set; }
        public string BranchName { get; set; }
        public string AccountType { get; set; }
    }
}