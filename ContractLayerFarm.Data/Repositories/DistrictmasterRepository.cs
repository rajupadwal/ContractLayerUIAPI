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
    public class DistrictmasterRepository : RepositoryBase<TblDistrictMaster>, IDistrictmasterRepository
    {
        private ContractLayerDBContext ktConContext;
        public DistrictmasterRepository(ContractLayerDBContext ktConContext) : base(ktConContext) { this.ktConContext = ktConContext; }

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

        public IEnumerable<TblDistrictMaster> GetAllDistrictForState(TblDistrictMaster master)
        {
            var tblDistrictmaster = this.ktConContext.TblDistrictMaster
                       .Include(blog => blog.State)
                       .Where(s => s.StateId == master.StateId)
                       .ToList();
            return tblDistrictmaster;
        }

        public IEnumerable<TblDistrictMaster> SearchDistrictName(string searchString)
        {
            if (string.IsNullOrEmpty(searchString))
            { return this.ktConContext.Set<TblDistrictMaster>(); }

            return this.ktConContext.Set<TblDistrictMaster>().Where(districtname => districtname.DistrictName.ToLower().Contains(searchString.ToLower()));
        }
    }
}