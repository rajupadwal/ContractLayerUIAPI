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
    [Route("api/Unit/")]
    public class UnitController : Controller
    {

        private IRepositoryWrapper _repoWrapper;

        public UnitController(IRepositoryWrapper repoWrapper)
        {
            _repoWrapper = repoWrapper;
        }

        [HttpGet("[action]")]
        public IEnumerable<TblUnitMaster> GetAll()
        {
            var Unit = this._repoWrapper.Unit.FindAll().ToList();
            return Unit;
        }

        [HttpPost("SearchUnit")]
        public IEnumerable<TblUnitMaster>SearchUnit([FromBody]string searchString)
        {
            var Unit = this._repoWrapper.Unit.SearchUnit(searchString).ToList();
            return Unit;
        }
        [HttpPost("GetByIdAll")]
        public TblUnitMaster GetByIdAll([FromBody] int UnitId)
        {
            var Unit = this._repoWrapper.Unit.FindByCondition(x=> x.UnitId == UnitId).FirstOrDefault();
            return Unit;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
        }

    }
}
