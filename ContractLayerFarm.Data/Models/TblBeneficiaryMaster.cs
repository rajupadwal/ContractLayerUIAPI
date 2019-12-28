using System;
using System.Collections.Generic;

namespace ContractLayerFarm.Data.Models
{
    public partial class TblBeneficiaryMaster
    {
        public TblBeneficiaryMaster()
        {

        }
        public int BeneficiaryId { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public int? StateId { get; set; }
        public int? DistrictId { get; set; }
        public int? TalukaId { get; set; }
        public DateTime? DateOfBirth { get; set; }
        public int? AadharNo { get; set; }
        public string NameAsPerAadhar { get; set; }
        public int? CasteId { get; set; }
        public int? SubCasteId { get; set; }
        public int? TypeId { get; set; }
        public int? SubTypeId { get; set; }
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
        public string IfscCode { get; set; }
        public int? AccountNo { get; set; }
        public int? KhataNo { get; set; }
        public DateTime? CreateDate { get; set; }
        public DateTime? UpdateDate { get; set; }
        
        public TblSchemeMaster Scheme { get; set; }
        public TblStateMaster State { get; set; }
        public TblTalukaMaster Taluka { get; set; }
        public TblDistrictMaster District { get; set; }
        public TblCasteMaster Caste { get; set; }
        public TblSubCasteMaster Subcaste { get; set; }
        public TblBankMaster Bank { get; set; }
        public TblBranchMaster Branch { get; set; }
        public TblSchemePaymentMaster Payment { get; set; }
        public TblTypeMaster Type { get; set; }
        public TblSubTypeMaster Subtype { get; set; }
    }
}
