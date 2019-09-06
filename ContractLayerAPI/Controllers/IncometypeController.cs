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
    [Route("api/Incometype/")]
    public class IncometypeController : Controller
    {

        private IRepositoryWrapper _repoWrapper;

        public IncometypeController(IRepositoryWrapper repoWrapper)
        {
            _repoWrapper = repoWrapper;
        }

        [HttpGet("[action]")]
        public IEnumerable<TblIncomeType> GetAll()
        {
            var Incometype = this._repoWrapper.Incometype.FindAll().ToList();
            return Incometype;
        }

        [HttpPost("SearchIncometype")]
        public IEnumerable<TblIncomeType> SearchIncometype([FromBody]string searchString)
        {
            var Incometype = this._repoWrapper.Incometype.SearchIncometype(searchString).ToList();
            return Incometype;
        }
        [HttpPost("GetById")] 
        public TblIncomeType GetById([FromBody] int incometypeId)
        {
            var Incometype = this._repoWrapper.Incometype.FindByCondition(x=> x.IncomeId == incometypeId).FirstOrDefault();
            return Incometype;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
        }

    }
}
