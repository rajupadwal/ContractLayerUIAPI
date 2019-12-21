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
    public class DisrictmasterRepository : RepositoryBase<TblDistrictMaster>, IDistrictmasterRepository
    {
        private ContractLayerDBContext ktConContext;
        public DisrictmasterRepository(ContractLayerDBContext ktConContext) : base(ktConContext) { this.ktConContext = ktConContext; }

        bool IDistrictmasterRepository.Authenticate()
        {
            return true;
        }

        public IEnumerable<TblDistrictMaster> GetAllDistrict()
        {
            var tbldistrictmaster = this.ktConContext.TblDistrictMaster
                       .Include(blog => blog.State)
                       .ToList();
            return tbldistrictmaster;
        }

        public IEnumerable<TblDistrictMaster> GetAllStateNameForDistrict(TblDistrictMaster master)
        {
            var tblDistrictmaster = this.ktConContext.TblDistrictMaster
                       .Include(blog => blog.State)
                       .Where(s => s.StateId == master.StateId)
                       .ToList();
            return tblDistrictmaster;
        }
    }
}