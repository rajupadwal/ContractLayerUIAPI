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
    [Route("api/Subcastemaster/")]
    public class SubcastemasterController : ControllerBase
    {
        private readonly AppSettings _appSettings;
        private IRepositoryWrapper _repoWrapper;

        public SubcastemasterController(IRepositoryWrapper repoWrapper, IOptions<AppSettings> appSettings)
        {
            _repoWrapper = repoWrapper;
            _appSettings = appSettings.Value;
        }

        [HttpPost("GetSubCasteByCasteID")]
        public IEnumerable<TblSubCasteMaster> GetSubCasteByCasteID([FromBody] TblSubCasteMaster subcaste)
        {
            var subcastem = this._repoWrapper.Subcastemaster.GetAllSubcasteForCaste(subcaste);
            return subcastem;
        }

        [HttpGet("[action]")]
        public IEnumerable<TblSubCasteMaster> GetAll()
        {
            var subcaste = this._repoWrapper.Subcastemaster.GetAllSubcaste();
            return subcaste;
        }
 
        [HttpGet("[action]")] 
        public TblSubCasteMaster GetByID(int SubCasteId)
        {
            var subcaste = this._repoWrapper.Subcastemaster.FindByCondition(x=> x.SubCasteId == SubCasteId).FirstOrDefault();
            return subcaste;
        }

        [HttpPost("SearchSubCasteName")]
        public IEnumerable<TblSubCasteMaster> SearchSubCasteName([FromBody]string searchString)
        {
            var subcaste = this._repoWrapper.Subcastemaster.SearchSubCasteName(searchString).ToList();
            return subcaste;
        }

        [HttpPost("Add")]
        public bool Add([FromBody]TblSubCasteMaster subcaste)
        {
            try
            { 
                this._repoWrapper.Subcastemaster.Create(subcaste);
                this._repoWrapper.Subcastemaster.Save();

                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }

        [HttpPost("Update")]
        public bool Update([FromBody] TblSubCasteMaster subcaste)
        {
            try
            {
                this._repoWrapper.Subcastemaster.Update(subcaste);
                this._repoWrapper.Subcastemaster.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }
        [HttpPost("Delete")]
        public bool Delete([FromBody] TblSubCasteMaster subcaste)
        {
            try
            {
                this._repoWrapper.Subcastemaster.Delete(subcaste);
                this._repoWrapper.Subcastemaster .Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }
    }
}
