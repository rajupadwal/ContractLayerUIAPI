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
    [Route("api/Enquiry/")]
    public class EnquiryController : Controller
    {

        private IRepositoryWrapper _repoWrapper;

        public EnquiryController(IRepositoryWrapper repoWrapper)
        {
            _repoWrapper = repoWrapper;
        }

        [HttpGet("[action]")]
        public IEnumerable<TblEnquiryDetails> GetAll()
        {
            var Enquiry = this._repoWrapper.Enquiry.FindAll().ToList();
            return Enquiry;
        }

        [HttpGet("[action]")] 
        public TblEnquiryDetails GetByID(int EnquiryId)
        {
            var Enquiry = this._repoWrapper.Enquiry.FindByCondition(x=> x.RecordNo == EnquiryId).FirstOrDefault();
            return Enquiry;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
        }

        [HttpPost("Add")]
        public bool Add([FromBody]TblEnquiryDetails Enquiry)
        {
            try
            {
                this._repoWrapper.Enquiry.Create(Enquiry);
                this._repoWrapper.Enquiry.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }

        [HttpPost("Update")]
        public bool Update([FromBody] TblEnquiryDetails Enquiry)
        {
            try
            {
                this._repoWrapper.Enquiry.Update(Enquiry);
                this._repoWrapper.Enquiry.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }
        [HttpPost("Delete")]
        public bool Delete([FromBody] TblEnquiryDetails Enquiry)
        {
            try
            {
                this._repoWrapper.Enquiry.Delete(Enquiry);
                this._repoWrapper.Enquiry.Save();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }
    }
}
