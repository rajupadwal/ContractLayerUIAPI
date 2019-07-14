using System;
using System.Collections.Generic;
using System.Text;
using ContractLayerFarm.Data.Contract;
using ContractLayerFarm.Data.Models;
using ContractLayerFarm.Data.Repositories;

namespace ContractLayerFarm.Data.Repositories
{
    public class EnquiryRepository : RepositoryBase<TblEnquiryDetails>, IEnquiryRepository
    {

        public EnquiryRepository(ContractLayerDBContext ktConContext) : base(ktConContext) {  }

        bool IEnquiryRepository.Authenticate()
        {
            return true;
        }
    }
}
