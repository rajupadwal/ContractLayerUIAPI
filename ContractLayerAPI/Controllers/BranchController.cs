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
    [Route("api/Branch/")]
    public class BranchController : ControllerBase
    {
        private readonly AppSettings _appSettings;
        private IRepositoryWrapper _repoWrapper;

        public BranchController(IRepositoryWrapper repoWrapper, IOptions<AppSettings> appSettings)
        {
            _repoWrapper = repoWrapper;
            _appSettings = appSettings.Value;
        }
 

        [HttpPost("GetBankNameByBankID")]
        public IEnumerable<TblBranchMaster> GetBankNameByBankID([FromBody] TblBranchMaster type)
        {
            var prodtype = this._repoWrapper.Branchmaster.GetAllBranchNameForBank(type);
            return prodtype;
        }

         

        [HttpGet("[action]")]
        public IEnumerable<TblBranchMaster> GetAll()
        {
            var branch = this._repoWrapper.Branchmaster.GetAllBranch();
            return branch;
        }
        
        [HttpGet("[action]")] 
        public TblBranchMaster GetByID(int bankId)
        {
            var branch = this._repoWrapper.Branchmaster.FindByCondition(x=> x.BankId == bankId).FirstOrDefault();
            return branch;
        }

        [HttpPost("Add")]
        public bool Add([FromBody]TblBranchMaster branch)
        {
            try
            {
               
                this._repoWrapper.Branchmaster.Create(branch);
                this._repoWrapper.Branchmaster.Save();

                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }

        [HttpPost("Update")]
        public bool Update([FromBody] TblBranchMaster branch)
        {
            try
            {
                this._repoWrapper.Branchmaster.Update(branch);
                this._repoWrapper.Branchmaster.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }
        [HttpPost("Delete")]
        public bool Delete([FromBody] TblBranchMaster branch)
        {
            try
            {
                this._repoWrapper.Branchmaster.Delete(branch);
                this._repoWrapper.Branchmaster.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }
    }
}
