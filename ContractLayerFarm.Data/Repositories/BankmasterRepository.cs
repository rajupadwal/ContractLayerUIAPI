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
    public class BankmasterRepository : RepositoryBase<TblBankMaster>, IBankmasterRepository
    {

        private ContractLayerDBContext ktConContext;
        public BankmasterRepository(ContractLayerDBContext ktConContext) : base(ktConContext)
        {
            this.ktConContext = ktConContext;
        }

        public IEnumerable<TblBankMaster> SearchBankName(string searchString)
        {
            if (string.IsNullOrEmpty(searchString))
            { return this.ktConContext.Set<TblBankMaster>(); }

            return this.ktConContext.Set<TblBankMaster>().Where(bankname => bankname.BankName.ToLower().Contains(searchString.ToLower()));
        }

        bool IBankmasterRepository.Authenticate()
        {
            return true;
        }
        public int GetBankSrNo()
        {
            int maxBankSrNo = this.ktConContext.TblBankMaster.Select(p => p.BankId).DefaultIfEmpty(0).Max() + 1;
            return maxBankSrNo;
        }


    }
}
