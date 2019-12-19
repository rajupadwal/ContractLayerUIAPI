using System;
using System.Collections.Generic;

namespace ContractLayerFarm.Data.Models
{
    public partial class TblBeneficiaryMaster
    {
        public int BeneficiaryId { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public int? StateId { get; set; }
        public int? DistrictId { get; set; }
        public int? TalukaId { get; set; }
        public DateTime? DateOfBirth { get; set; }
        public int? AadharNo { get; set; }
        public byte[] NameAsPerAadhar { get; set; }
        public string Cast { get; set; }
        public string SubCast { get; set; }
        public string Type { get; set; }
        public int? NoOfChild { get; set; }
        public decimal? DisablePercentage { get; set; }
        public string BplNo { get; set; }
        public int? SchemeId { get; set; }
        public int? PaymentId { get; set; }
        public string SanctionOrderNo { get; set; }
        public DateTime? SanctionDate { get; set; }
        public DateTime? DueDate { get; set; }
        public int? BankId { get; set; }
        public int? BranchId { get; set; }
        public byte[] IfscCode { get; set; }
        public int? AccountNo { get; set; }
        public DateTime? CreateDate { get; set; }
        public DateTime? UpdateDate { get; set; }

        public TblBeneficiaryMaster Beneficiary { get; set; }
        public TblDistrictMaster District { get; set; }
        public TblSchemeMaster Scheme { get; set; }
        public TblStateMaster State { get; set; }
        public TblTalukaMaster Taluka { get; set; }
        public TblBeneficiaryMaster InverseBeneficiary { get; set; }
    }
}
