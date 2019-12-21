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
    [Route("api/Districtmaster/")]
    public class DistrictmasterController : ControllerBase
    {
        private readonly AppSettings _appSettings;
        private IRepositoryWrapper _repoWrapper;

        public DistrictmasterController(IRepositoryWrapper repoWrapper, IOptions<AppSettings> appSettings)
        {
            _repoWrapper = repoWrapper;
            _appSettings = appSettings.Value;
        }

        [HttpPost("GetStateNameByStateID")]
        public IEnumerable<TblDistrictMaster> GetStateNameByStateID([FromBody] TblDistrictMaster district)
        {
            var statename = this._repoWrapper.Districtmaster.GetAllStateNameForDistrict(district);
            return statename;
        }

        [HttpGet("[action]")]
        public IEnumerable<TblDistrictMaster> GetAll()
        {
            var branch = this._repoWrapper.Districtmaster.GetAllDistrict();
            return branch;
        }
        
        [HttpGet("[action]")] 
        public TblDistrictMaster GetByID(int stateId)
        {
            var district = this._repoWrapper.Districtmaster.FindByCondition(x=> x.StateId == stateId).FirstOrDefault();
            return district;
        }

        [HttpPost("Add")]
        public bool Add([FromBody]TblDistrictMaster district)
        {
            try
            { 
                this._repoWrapper.Districtmaster.Create(district);
                this._repoWrapper.Districtmaster.Save();

                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }

        [HttpPost("Update")]
        public bool Update([FromBody] TblDistrictMaster district)
        {
            try
            {
                this._repoWrapper.Districtmaster.Update(district);
                this._repoWrapper.Districtmaster.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }
        [HttpPost("Delete")]
        public bool Delete([FromBody] TblDistrictMaster district)
        {
            try
            {
                this._repoWrapper.Districtmaster.Delete(district);
                this._repoWrapper.Districtmaster.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }
    }
}
