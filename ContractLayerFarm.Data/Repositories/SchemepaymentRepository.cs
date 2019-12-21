using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using ContractLayerFarm.Data.Contract;
using ContractLayerFarm.Data.Models;
using ContractLayerFarm.Data.Repositories;
using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
namespace ContractLayerFarm.Data.Repositories
{
    public class SchemepaymentRepository : RepositoryBase<TblSchemePaymentMaster>, ISchemepaymentRepository
    {

        private ContractLayerDBContext ktConContext;
        public SchemepaymentRepository(ContractLayerDBContext ktConContext) : base(ktConContext)
        {
            this.ktConContext = ktConContext;
        }

        //public IEnumerable<TblSchemePaymentMaster> SearchSchemePayment(string searchString)
        //{
        //    if (string.IsNullOrEmpty(searchString))
        //    { return this.ktConContext.Set<TblSchemePaymentMaster>(); }

        //    //return this.ktConContext.Set<TblSchemePaymentMaster>().Where(Amount => Amount.Contains(searchString.ToLower()));
        //}

        bool ISchemepaymentRepository.Authenticate()
        {
            return true;
        }
        public int GetSchemePaymentSrNo()
        {
            int maxSchemepaymentSrNo = this.ktConContext.TblSchemePaymentMaster.Select(p => p.SrNo).DefaultIfEmpty(0).Max() + 1;
            return maxSchemepaymentSrNo;
        }

        public IEnumerable<TblSchemePaymentMaster> SearchSchemePayment(string searchString)
        {
            throw new NotImplementedException();
        }
    }
}
