using System;
using System.Collections.Generic;
using System.Text;
using ContractLayerFarm.Data.Contract;
using ContractLayerFarm.Data.Models;
using ContractLayerFarm.Data.Repositories;

namespace ContractLayerFarm.Data.Repositories
{
    public class PurchasepaymentRepository : RepositoryBase<TblPurchasepayment>, IPurchasepaymentRepository
    {

        public PurchasepaymentRepository(ContractLayerDBContext ktConContext) : base(ktConContext) {  }

        bool IPurchasepaymentRepository.Authenticate()
        {
            return true;
        }
    }
}
