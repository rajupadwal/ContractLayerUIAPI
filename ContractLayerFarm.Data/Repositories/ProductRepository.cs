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
            this.RepositoryContext.Set<TblFarmerInwardMt>().Add(master);
            this.RepositoryContext.SaveChanges();
        }
        public void SaveFarmerInwardDetails(TblFarmerInwardDt[] details)
        {
            this.RepositoryContext.Set<TblFarmerInwardDt>().AddRange(details);
            this.RepositoryContext.SaveChanges();
        }

        
        IEnumerable<ViewFarmerInwardMaster> IProductRepository.GetAllFarmerInwardMasters()
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
                                  CustmerName = e.CustmerName,
                                  LocationName = t.LocationName,
                                  PlanName = p.PlanName,
                                  PlanId = ep.PlanId,
                                  CustomerId = ep.CustomerId,
                                  LocationId = ep.LocationId,
                                  Customer = new TblCustomerMaster { CustomerId = e.CustomerId, CustmerName = e.CustmerName },
                                  Plan = new TblPlanMaster { PlanId = p.PlanId, PlanName = p.PlanName },
                                  Location = new TblLocationMaster { LocationId = t.LocationId, LocationName = t.LocationName },
                                 

                              });

            return entryPoint.ToList();
        }



     

        IEnumerable<TblFarmerInwardDt> IProductRepository.GetAllFarmerInwardMasteDetails(int recordNo)
        {
            return this.ktConContext.Set<TblFarmerInwardDt>().Where(p => p.RecordNo == recordNo).ToList();
        }
    }
}
