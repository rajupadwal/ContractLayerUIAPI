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
            
            this.RepositoryContext.Set<TblFarmerInwardMt>().AddRange(master);
            this.RepositoryContext.SaveChanges();
        }
        public void SaveFarmerInwardDetails(TblFarmerInwardDt[] details)
        {
            this.RepositoryContext.Set<TblFarmerInwardDt>().AddRange(details);
            this.RepositoryContext.SaveChanges();
        }

        
        IEnumerable<ViewFarmerInwardMaster> IProductRepository.GetAllFarmerInwardMasters()
        {
            return this.ktConContext.Set<ViewFarmerInwardMaster>();
        }


        IEnumerable<ViewFarmerInwardMaster> IProductRepository.GetAllFarmerInwardMasters1()
        {

            var entryPoint = (from ep in ktConContext.TblFarmerInwardMt
                              join e in ktConContext.TblCustomerMaster on ep.CustomerId equals e.CustomerId
                              join t in ktConContext.TblLocationMaster on ep.LocationId equals t.LocationId
                              join p in ktConContext.TblPlanMaster on ep.PlanId equals p.PlanId
                              //where e.OwnerID == user.UID
                              select new ViewFarmerInwardMaster
                              {
                                  RecordNo = ep.RecordNo,
                                  Date = ep.Date,
                                  CustmerName=e.CustmerName,
                                  LocationName=t.LocationName,
                                  PlanName=p.PlanName,
                              });

            return entryPoint.ToList();

        }

    }
}
