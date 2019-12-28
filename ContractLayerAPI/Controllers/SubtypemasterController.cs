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
    [Route("api/Subtypemaster/")]
    public class SubtypemasterController : ControllerBase
    {
        private readonly AppSettings _appSettings;
        private IRepositoryWrapper _repoWrapper;

        public SubtypemasterController(IRepositoryWrapper repoWrapper, IOptions<AppSettings> appSettings)
        {
            _repoWrapper = repoWrapper;
            _appSettings = appSettings.Value;
        }

        [HttpPost("GetTypeNameByTypeID")]
        public IEnumerable<TblSubTypeMaster> GetTypeNameByTypeID([FromBody] TblSubTypeMaster master)
        {
            var typename = this._repoWrapper.Subtype.GetAllTypeForSubtype(master);
            return typename;
        }

        [HttpPost("SearchSubTypeName")]
        public IEnumerable<TblSubTypeMaster> SearchSubTypeName([FromBody]string searchString)
        {
            var subtype = this._repoWrapper.Subtype.SearchSubTypeName(searchString).ToList();
            return subtype;
        }

        [HttpGet("[action]")]
        public IEnumerable<TblSubTypeMaster> GetAll()
        {
            var type = this._repoWrapper.Subtype.GetAllType();
            return type;
        }
        
        [HttpGet("[action]")] 
        public TblSubTypeMaster GetByID(int typeId)
        {
            var subtype = this._repoWrapper.Subtype.FindByCondition(x=> x.TypeId == typeId).FirstOrDefault();
            return subtype;
        }

        [HttpPost("Add")]
        public bool Add([FromBody]TblSubTypeMaster master)
        {
            try
            { 
                this._repoWrapper.Subtype.Create(master);
                this._repoWrapper.Subtype.Save();

                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }

        [HttpPost("Update")]
        public bool Update([FromBody] TblSubTypeMaster master)
        {
            try
            {
                this._repoWrapper.Subtype.Update(master);
                this._repoWrapper.Subtype.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }
        [HttpPost("Delete")]
        public bool Delete([FromBody] TblSubTypeMaster master)
        {
            try
            {
                this._repoWrapper.Subtype.Delete(master);
                this._repoWrapper.Subtype.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }
    }
}
