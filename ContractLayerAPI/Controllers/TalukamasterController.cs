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
    [Route("api/Talukamaster/")]
    public class TalukamasterController : ControllerBase
    {
        private readonly AppSettings _appSettings;
        private IRepositoryWrapper _repoWrapper;

        public TalukamasterController(IRepositoryWrapper repoWrapper, IOptions<AppSettings> appSettings)
        {
            _repoWrapper = repoWrapper;
            _appSettings = appSettings.Value;
        }

        [HttpPost("GetDistrictByStateID")]
        public IEnumerable<TblDistrictMaster> GetDistrictByStateID([FromBody] TblTalukaMaster taluka)
        {
            var districtdet = this._repoWrapper.Talukamaster.GetAllDistrictForState(taluka);
            return districtdet;
        }

        [HttpGet("[action]")]
        public IEnumerable<TblTalukaMaster> GetAll()
        {
            var talukadet = this._repoWrapper.Talukamaster.GetAllTaluka();
            return talukadet;
        }

        [HttpGet("[action]")] 
        public TblTalukaMaster GetByID(int talukaid)
        {
            var talukadet = this._repoWrapper.Talukamaster.FindByCondition(x=> x.TalukaId == talukaid).FirstOrDefault();
            return talukadet;
        }

        [HttpPost("Add")]
        public bool Add([FromBody]TblTalukaMaster taluka)
        {
            try
            { 
                this._repoWrapper.Talukamaster.Create(taluka);
                this._repoWrapper.Talukamaster.Save();

                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }

        [HttpPost("Update")]
        public bool Update([FromBody]TblTalukaMaster taluka)
        {
            try
            {
                this._repoWrapper.Talukamaster.Update(taluka);
                this._repoWrapper.Talukamaster.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }
        [HttpPost("Delete")]
        public bool Delete([FromBody] TblTalukaMaster taluka)
        {
            try
            {
                this._repoWrapper.Talukamaster.Delete(taluka);
                this._repoWrapper.Talukamaster.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }
    }
}
