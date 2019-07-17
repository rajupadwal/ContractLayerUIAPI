using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using ContractLayerFarm.Data.Contract;
using ContractLayerFarm.Data.Models;
using ContractLayerFarm.Data.Repositories;

namespace ContractLayerFarm.Data.Repositories
{
    public class ProductRepository : RepositoryBase<TblProductMaster>, IProductRepository
    {
        private ContractLayerDBContext ktConContext;
        public ProductRepository(ContractLayerDBContext ktConContext) : base(ktConContext) { this.ktConContext = ktConContext;  }

        bool IProductRepository.Authenticate()
        {
            return true;
        }

        public IEnumerable<TblUnitMaster> GetUnits()
        {
            return this.ktConContext.Set<TblUnitMaster>();
        }

        public void SaveFarmerInwardMaster(TblFarmerInwardMt master)
        {
            master.RecordNo = this.RepositoryContext.Set<TblFarmerInwardMt>().OrderByDescending(x => x.RecordNo).FirstOrDefault().RecordNo+1;
            
            this.RepositoryContext.Set<TblFarmerInwardMt>().Add(master);
            this.RepositoryContext.SaveChanges();
        }
        public void SaveFarmerInwardDetails(TblFarmerInwardDt[] details)
        {
            this.RepositoryContext.Set<TblFarmerInwardDt>().AddRange(details);
            this.RepositoryContext.SaveChanges();
        }
    }
}
