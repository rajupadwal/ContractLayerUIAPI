using System;
using System.Collections.Generic;
using System.Text;
using ContractLayerFarm.Data.Contract;
using ContractLayerFarm.Data.Models;
using ContractLayerFarm.Data.Repositories;

using System.Linq.Expressions;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace ContractLayerFarm.Data.Repositories
{
    public class EnquiryRepository : RepositoryBase<TblEnquiryDetails>, IEnquiryRepository
    {
        private ContractLayerDBContext ktConContext;
        
        public EnquiryRepository(ContractLayerDBContext ktConContext) : base(ktConContext)
        {
            this.ktConContext = ktConContext;
        }

        public int GetEnquiryNo()
        {
            int maxEnquiryNo = this.ktConContext.TblEnquiryDetails.Select(p => p.RecordNo).DefaultIfEmpty(0).Max() + 1;
            return maxEnquiryNo;
        }

        public IEnumerable<TblEnquiryDetails> GetAllEnquiry()
        {

            var TblEnquiryDetails = this.ktConContext.TblEnquiryDetails
                       .Include(blog => blog.Location)
                       .ToList();
            return TblEnquiryDetails;
        }

        bool IEnquiryRepository.Authenticate()
        {
            return true;
        }
    }
}
