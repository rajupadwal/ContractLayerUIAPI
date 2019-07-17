using System;
using System.Collections.Generic;
using System.Text;
using ContractLayerFarm.Data.Contract;
using ContractLayerFarm.Data.Models;
using ContractLayerFarm.Data.Repositories;

namespace ContractLayerFarm.Data.Repositories
{
    public class SalesreceiptRepository : RepositoryBase<TblSalesReceipt>, ISalesreceiptRepository
    {

        public SalesreceiptRepository(ContractLayerDBContext ktConContext) : base(ktConContext) {  }

        bool ISalesreceiptRepository.Authenticate()
        {
            return true;
        }
    }
}
