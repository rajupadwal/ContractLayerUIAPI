using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using ContractLayerFarm.Data.Contract;
using ContractLayerFarm.Data.Models;
using ContractLayerFarm.Data.Repositories;
using Microsoft.EntityFrameworkCore;
using System.Data.SqlClient;
using System.Data.SqlTypes;

namespace ContractLayerFarm.Data.Repositories
{
    public class BranchRepository : RepositoryBase<TblBranchMaster>, IBranchRepository
    {
        private ContractLayerDBContext ktConContext;
        public BranchRepository(ContractLayerDBContext ktConContext) : base(ktConContext) { this.ktConContext = ktConContext; }

        bool IBranchRepository.Authenticate()
        {
            return true;
        }

        public IEnumerable<TblBranchMaster> GetAllBranch()
        {

            var tblbranchmaster = this.ktConContext.TblBranchMaster
                       .Include(blog => blog.Bank)
                       .ToList();
            return tblbranchmaster;
        }

        public IEnumerable<TblBranchMaster> GetAllBranchNameForBank(TblBranchMaster master)
        {

            var tblBranchmaster = this.ktConContext.TblBranchMaster
                       .Include(blog => blog.Bank)
                       .Where(s => s.BankId == master.BankId)
                       .ToList();
            return tblBranchmaster;
        }
    }
}