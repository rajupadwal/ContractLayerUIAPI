using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ContractLayerFarm.Data.Contract;
using ContractLayerFarm.Data.Models;

namespace ContractLayerAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/Eggsrange/")]
    public class EggsrangeController : Controller
    {

        private IRepositoryWrapper _repoWrapper;

        public EggsrangeController(IRepositoryWrapper repoWrapper)
        {
            _repoWrapper = repoWrapper;
        }

        [HttpGet("[action]")]
        public IEnumerable<TblEggsRangeMaster> GetAll()
        {
            var eggsrange = this._repoWrapper.Eggsrange .FindAll().ToList();
            return eggsrange;
        }

        [HttpGet("[action]")] 
        public TblEggsRangeMaster GetByID(int srno)
        {
            var eggsrange = this._repoWrapper.Eggsrange.FindByCondition(x=> x.EggsRangeCode == srno).FirstOrDefault();
            return eggsrange;
        }

        [HttpPost("Add")]
        public bool Add([FromBody]TblEggsRangeMaster eggsrange)
        {
            try
            {
                this._repoWrapper.Eggsrange.Create(eggsrange);
                this._repoWrapper.Eggsrange.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }

        [HttpPost("Update")]
        public bool Update([FromBody] TblEggsRangeMaster eggsrange)
        {
            try
            {
                this._repoWrapper.Eggsrange.Update(eggsrange);
                this._repoWrapper.Eggsrange.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }

        [HttpPost("Delete")]
        public bool Delete([FromBody] TblEggsRangeMaster eggsrange)
        {
            try
            {
                this._repoWrapper.Eggsrange.Delete(eggsrange);
                this._repoWrapper.Eggsrange.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }
    }
}
