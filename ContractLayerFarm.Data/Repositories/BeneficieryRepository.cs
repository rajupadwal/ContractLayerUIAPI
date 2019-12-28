using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using ContractLayerFarm.Data.Contract;
using ContractLayerFarm.Data.Models;
using ContractLayerFarm.Data.Repositories;
using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
namespace ContractLayerFarm.Data.Repositories
{
    public class BeneficieryRepository : RepositoryBase<TblBeneficiaryMaster>, IBeneficieryRepository
    {

        private ContractLayerDBContext ktConContext;
        public BeneficieryRepository(ContractLayerDBContext ktConContext) : base(ktConContext)
        {
            this.ktConContext = ktConContext;
        }

        public IEnumerable<TblBeneficiaryMaster> GetAllBeneficiery()
        {
            var tblbeneficiery = this.ktConContext.TblBeneficiaryMaster
                       .Include(blog => blog.State)
                       .Include(blog => blog.District)
                       .Include(blog => blog.Taluka)
                       .Include(blog => blog.Caste)
                       .Include(blog => blog.Subcaste)
                       .Include(blog => blog.Type)
                       .Include(blog => blog.Subtype)
                       .Include(blog => blog.Scheme)
                       .Include(blog => blog.Payment)
                       .Include(blog => blog.Bank)
                       .Include(blog => blog.Branch)
                       .ToList();
            return tblbeneficiery;
        }

        bool IBeneficieryRepository.Authenticate()
        {
            return true;
        }
        public int GetBeneficieryNo()
        {
            int maxGetBeneficieryNo = this.ktConContext.TblBeneficiaryMaster.Select(p => p.BeneficiaryId).DefaultIfEmpty(0).Max() + 1;
            return maxGetBeneficieryNo;
        }

        public IEnumerable<TblDistrictMaster> GetAllDistrictForState(TblBeneficiaryMaster master)
        {
            var tblDistrictmaster = this.ktConContext.TblDistrictMaster
                       .Include(blog => blog.State)
                       .Where(s => s.StateId == master.StateId)
                       .ToList();
            return tblDistrictmaster;
        }

        public IEnumerable<TblTalukaMaster> GetAllTalukaForStateDistrict(TblBeneficiaryMaster master)
        {
            var tbltalukamaster = this.ktConContext.TblTalukaMaster
                       .Include(blog => blog.State)
                       .Include(blog => blog.District)
                       .Where(s => s.StateId == master.StateId && s.DistrictId == master.DistrictId)
                       .ToList();
            return tbltalukamaster;
        }

        public IEnumerable<TblSubCasteMaster> GetAllSubcasteForCaste(TblBeneficiaryMaster master)
        {
            var tblSubCastemaster = this.ktConContext.TblSubCasteMaster
                       .Include(blog => blog.Caste)
                       .Where(s => s.CasteId == master.CasteId)
                       .ToList();
            return tblSubCastemaster;
        }

        public IEnumerable<TblSubTypeMaster> GetAllSubtypeForType(TblBeneficiaryMaster master)
        {
            var tblsubtypemaster = this.ktConContext.TblSubTypeMaster
                       .Include(blog => blog.Type)
                       .Where(s => s.TypeId == master.TypeId)
                       .ToList();
            return tblsubtypemaster;
        }

        public IEnumerable<TblBranchMaster> GetAllBranchForBank(TblBeneficiaryMaster master)
        {
            var tblbranchmaster = this.ktConContext.TblBranchMaster
                       .Include(blog => blog.Bank)
                       .Where(s => s.BankId == master.BankId)
                       .ToList();
            return tblbranchmaster;
        }
    }
}
