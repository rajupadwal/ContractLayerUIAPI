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
    public class TalukamasterRepository : RepositoryBase<TblTalukaMaster>, ITalukamasterRepository
    {
        private ContractLayerDBContext ktConContext;
        public TalukamasterRepository(ContractLayerDBContext ktConContext) : base(ktConContext) { this.ktConContext = ktConContext; }

        bool ITalukamasterRepository.Authenticate()
        {
            return true;
        }

        public IEnumerable<TblTalukaMaster> GetAllTaluka()
        {
            var tbltalukamaster = this.ktConContext.TblTalukaMaster
                       .Include(blog => blog.State)
                       .Include(blog => blog.District)
                       .ToList();
            return tbltalukamaster;
        }

        public IEnumerable<TblDistrictMaster> GetAllStateNameForDistrict(TblDistrictMaster master)
        {
            var tblDistrictmaster = this.ktConContext.TblDistrictMaster
                       .Include(blog => blog.State)
                       .Where(s => s.StateId == master.StateId)
                       .ToList();
            return tblDistrictmaster;
        }

        public IEnumerable<TblDistrictMaster> GetAllDistrictForState(TblTalukaMaster master)
        {
            var tblDistrictmaster = this.ktConContext.TblDistrictMaster
                       .Include(blog => blog.State)
                       .Where(s => s.StateId == master.StateId)
                       .ToList();
            return tblDistrictmaster;
        }
    }
}