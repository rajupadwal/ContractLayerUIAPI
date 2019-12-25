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
    public class SubcastemasterRepository : RepositoryBase<TblSubCasteMaster>, ISubcastemasterRepository
    {
        private ContractLayerDBContext ktConContext;
        public SubcastemasterRepository(ContractLayerDBContext ktConContext) : base(ktConContext) { this.ktConContext = ktConContext; }

        bool ISubcastemasterRepository.Authenticate()
        {
            return true;
        }

        public IEnumerable<TblSubCasteMaster> GetAllSubcaste()
        {
            var tblSubCastemaster = this.ktConContext.TblSubCasteMaster
                       .Include(blog => blog.Caste)
                       .ToList();
            return tblSubCastemaster;
        }

        public IEnumerable<TblSubCasteMaster> GetAllSubcasteForCaste(TblSubCasteMaster master)
        {
            var tblSubCastemaster = this.ktConContext.TblSubCasteMaster
                       .Include(blog => blog.Caste)
                       .Where(s => s.CasteId == master.CasteId)
                       .ToList();
            return tblSubCastemaster;
        }

        public IEnumerable<TblSubCasteMaster> SearchSubCasteName(string searchString)
        {
            if (string.IsNullOrEmpty(searchString))
            { return this.ktConContext.Set<TblSubCasteMaster>(); }

            return this.ktConContext.Set<TblSubCasteMaster>().Where(subcastename => subcastename.SubCasteName.ToLower().Contains(searchString.ToLower()));
        }
    }
}