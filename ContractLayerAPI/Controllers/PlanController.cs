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
    [Route("api/Plan/")]
    public class PlanController : Controller
    {

        private IRepositoryWrapper _repoWrapper;

        public PlanController(IRepositoryWrapper repoWrapper)
        {
            _repoWrapper = repoWrapper;
        }

        [HttpGet("[action]")]
        public IEnumerable<TblPlanMaster> GetAll()
        {
            var Plan = this._repoWrapper.Plan.FindAll().ToList();
            return Plan;
        }

        [HttpPost("SearchPlan")]
        public IEnumerable<TblPlanMaster> SearchPlan([FromBody]string searchString)
        {
            var Plan = this._repoWrapper.Plan.SearchPlan(searchString).ToList();
            return Plan;
        }
        [HttpGet("[action]")] 
        public TblPlanMaster GetByID(int planId)
        {
            var Plan = this._repoWrapper.Plan.FindByCondition(x=> x.PlanId == planId).FirstOrDefault();
            return Plan;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
        }

        [HttpPost("Add")]
        public bool Add([FromBody]TblPlanMaster plan)
        {
            try
            {
                this._repoWrapper.Plan.Create(plan);
                this._repoWrapper.Plan.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }

        [HttpPost("Update")]
        public bool Update([FromBody] TblPlanMaster plan)
        {
            try
            {
                this._repoWrapper.Plan.Update(plan);
                this._repoWrapper.Plan.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }
        [HttpPost("Delete")]
        public bool Delete([FromBody] TblPlanMaster plan)
        {
            try
            {
                this._repoWrapper.Plan.Delete(plan);
                this._repoWrapper.Plan.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }
    }
}
