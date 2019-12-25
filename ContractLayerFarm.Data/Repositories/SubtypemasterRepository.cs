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
    public class SubtypemasterRepository : RepositoryBase<TblSubTypeMaster>, ISubtypemasterRepository
    {
        private ContractLayerDBContext ktConContext;
        public SubtypemasterRepository(ContractLayerDBContext ktConContext) : base(ktConContext) { this.ktConContext = ktConContext; }

        bool ISubtypemasterRepository.Authenticate()
        {
            return true;
        }

        public IEnumerable<TblSubTypeMaster> GetAllType()
        {
            var tblsubtypemaster = this.ktConContext.TblSubTypeMaster
                       .Include(blog => blog.Type)
                       .ToList();
            return tblsubtypemaster;
        }

        public IEnumerable<TblSubTypeMaster> GetAllTypeForSubtype(TblSubTypeMaster master)
        {
            var tblsubtypemaster = this.ktConContext.TblSubTypeMaster
                       .Include(blog => blog.Type)
                       .Where(s => s.TypeId == master.TypeId)
                       .ToList();
            return tblsubtypemaster;
        }
    }
}