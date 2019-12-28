using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using ContractLayerFarm.Data.Contract;
using ContractLayerFarm.Data.Models;
using Microsoft.AspNetCore.Authorization;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
using WebApi.Helpers;
using Microsoft.Extensions.Options;

namespace ContractLayerAPI.Controllers
{

    [Authorize][Produces("application/json")]
    [Route("api/Beneficiery/")]
    public class BeneficieryController : ControllerBase
    {
        private readonly AppSettings _appSettings;
        private IRepositoryWrapper _repoWrapper;

        public BeneficieryController(IRepositoryWrapper repoWrapper, IOptions<AppSettings> appSettings)
        {
            _repoWrapper = repoWrapper;
            _appSettings = appSettings.Value;
        } 

        [HttpGet("[action]")]
        public IEnumerable<TblBeneficiaryMaster> GetAll()
        {
            var beneficiery = this._repoWrapper.Beneficiery.GetAllBeneficiery();
            return beneficiery;
        } 

        [HttpGet("[action]")] 
        public TblBeneficiaryMaster GetByID(int beneficieryId)
        {
            var beneficiery = this._repoWrapper.Beneficiery.FindByCondition(x=> x.BeneficiaryId == beneficieryId).FirstOrDefault();
            return beneficiery;
        } 

        [HttpPost("Add")]
        public bool Add([FromBody]TblBeneficiaryMaster beneficiery)
        {
            try
            { 
                this._repoWrapper.Beneficiery.Create(beneficiery);
                this._repoWrapper.Beneficiery.Save();

                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }

        [HttpPost("Update")]
        public bool Update([FromBody] TblBeneficiaryMaster beneficiery)
        {
            try
            {
                this._repoWrapper.Beneficiery.Update(beneficiery);
                this._repoWrapper.Beneficiery.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }

        [HttpPost("Delete")]
        public bool Delete([FromBody] TblBeneficiaryMaster beneficiery)
        {
            try
            {
                this._repoWrapper.Beneficiery.Delete(beneficiery);
                this._repoWrapper.Beneficiery.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }

        [HttpPost("GetDistrictByStateID")]
        public IEnumerable<TblDistrictMaster> GetDistrictByStateID([FromBody] TblBeneficiaryMaster beneficiery)
        {
            var districtdet = this._repoWrapper.Beneficiery.GetAllDistrictForState(beneficiery);
            return districtdet;
        }

        [HttpPost("GetTalukaByStateDistrictID")]
        public IEnumerable<TblTalukaMaster> GetTalukaByStateDistrictID([FromBody] TblBeneficiaryMaster beneficiery)
        {
            var talukadet = this._repoWrapper.Beneficiery.GetAllTalukaForStateDistrict(beneficiery);
            return talukadet;
        }

        [HttpPost("GetSubCasteByCasteID")]
        public IEnumerable<TblSubCasteMaster> GetSubCasteByCasteID([FromBody] TblBeneficiaryMaster beneficiery)
        {
            var subcastem = this._repoWrapper.Beneficiery.GetAllSubcasteForCaste(beneficiery);
            return subcastem;
        }

        [HttpPost("GetSubTypeNameByTypeID")]
        public IEnumerable<TblSubTypeMaster> GetSubTypeNameByTypeID([FromBody] TblBeneficiaryMaster master)
        {
            var typename = this._repoWrapper.Beneficiery.GetAllSubtypeForType(master);
            return typename;
        }

        [HttpPost("GetBranchByBankID")]
        public IEnumerable<TblBranchMaster> GetBranchByBankID([FromBody] TblBeneficiaryMaster master)
        {
            var branchname = this._repoWrapper.Beneficiery.GetAllBranchForBank(master);
            return branchname;
        }
    }
}
