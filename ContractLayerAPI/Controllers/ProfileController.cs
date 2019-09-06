using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ContractLayerFarm.Data.Contract;
using ContractLayerFarm.Data.Models;
using Microsoft.AspNetCore.Authorization;
namespace ContractLayerAPI.Controllers
{
     [Authorize][Produces("application/json")]
    [Route("api/Profile/")]
    public class ProfileController : Controller
    {

        private IRepositoryWrapper _repoWrapper;

        public ProfileController(IRepositoryWrapper repoWrapper)
        {
            _repoWrapper = repoWrapper;
        }


        [HttpGet("[action]")]
        public IEnumerable<TblCompanyProfile> GetAll()
        {
            var profile = this._repoWrapper.Profile.FindAll().ToList();
            return profile;
        }

        [HttpGet("[action]")] 
        public TblCompanyProfile GetByID(int profileId)
        {
            var profile = this._repoWrapper.Profile.FindByCondition(x=> x.ProfileId == profileId).FirstOrDefault();
            return profile;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
        }

        [HttpPost("Add")]
        public bool Add([FromBody]TblCompanyProfile profile)
        {
            try
            {
                this._repoWrapper.Profile.Create(profile);
                this._repoWrapper.Profile.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }

        [HttpPost("Update")]
        public bool Update([FromBody] TblCompanyProfile profile)
        {
            try
            {
                this._repoWrapper.Profile.Update(profile);
                this._repoWrapper.Profile.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }

        [HttpPost("Delete")]
        public bool Delete([FromBody] TblCompanyProfile profile)
        {
            try
            {
                this._repoWrapper.Profile.Delete(profile);
                this._repoWrapper.Profile.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }
    }
}
