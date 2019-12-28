using System;
using System.Collections.Generic;
using System.Text;
using ContractLayerFarm.Data.Models;

namespace ContractLayerFarm.Data.Contract
{
    public interface IBranchRepository : IRepositoryBase<TblBranchMaster>
    {

        bool Authenticate();

        IEnumerable<TblBranchMaster> GetAllBranch();
        IEnumerable<TblBranchMaster> GetAllBranchNameForBank(TblBranchMaster master);
        IEnumerable<TblBranchMaster> SearchBranchName(string searchString);
    }
}
