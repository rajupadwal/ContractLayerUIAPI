using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using ContractLayerFarm.Data.Contract;
using ContractLayerFarm.Data.Models;
using ContractLayerFarm.Data.Repositories;

namespace ContractLayerFarm.Data.Repositories
{
    public class ProductRepository : RepositoryBase<TblProductTypeMaster>, IProductRepository
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
            if (master.RecordNo > 0)
            {
                this.RepositoryContext.Set<TblFarmerInwardMt>().Update(master);
                this.RepositoryContext.SaveChanges();
            }
            else
            {
                this.RepositoryContext.Set<TblFarmerInwardMt>().Add(master);
                this.RepositoryContext.SaveChanges();
            }
            
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


        //-------------------Farmer Outward Details----------------------

        public void SaveFarmerOutwardMaster(TblFarmerOutwardMt master)
        {
            if (master.RecordNo > 0)
            {
                this.RepositoryContext.Set<TblFarmerOutwardMt>().Update(master);
                this.RepositoryContext.SaveChanges();
            }
            else
            {
                this.RepositoryContext.Set<TblFarmerOutwardMt>().Add(master);
                this.RepositoryContext.SaveChanges();
            }

        }
        public void SaveFarmerOutwardDetails(TblFarmerOutwardDt[] details)
        {
            this.RepositoryContext.Set<TblFarmerOutwardDt>().AddRange(details);
            this.RepositoryContext.SaveChanges();
        }


        IEnumerable<ViewFarmerInwardMaster> IProductRepository.GetAllFarmerOutwardMasters()
        {



            var entryPoint = (from ep in ktConContext.TblFarmerOutwardMt
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

        IEnumerable<TblFarmerOutwardDt> IProductRepository.GetAllFarmerOutwardMasteDetails(int recordNo)
        {
            return this.ktConContext.Set<TblFarmerOutwardDt>().Where(p => p.RecordNo == recordNo).ToList();
        }


        //-------------------Purchase Bill Details----------------------

        public void SavePurchaseBillMaster(TblPurchaseBillMt master)
        {
            if (master.BillId > 0)
            {
                this.RepositoryContext.Set<TblPurchaseBillMt>().Update(master);
                this.RepositoryContext.SaveChanges();
            }
            else
            {
                this.RepositoryContext.Set<TblPurchaseBillMt>().Add(master);
                this.RepositoryContext.SaveChanges();
            }

        }
        public void SavePurchaseBillDetails(TblPurchaseBillDt[] details)
        {
            this.RepositoryContext.Set<TblPurchaseBillDt>().AddRange(details);
            this.RepositoryContext.SaveChanges();
        }


        IEnumerable<ViewPurchaseBillMaster> IProductRepository.GetAllPurchaseBillMasters()
        {



            var entryPoint = (from ep in ktConContext.TblPurchaseBillMt
                              join e in ktConContext.TblSupplierMaster on ep.SupplierId equals e.SupplierId
                              join t in ktConContext.TblLocationMaster on ep.LocationId equals t.LocationId
                              //where e.OwnerID == user.UID
                              select new ViewPurchaseBillMaster
                              {
                                  BillId = ep.BillId,
                                  BillDate = ep.BillDate,
                                  BillNo=ep.BillNo,
                                  BatchNo=ep.BatchNo,
                                  SupplierName = e.SupplierName,
                                  LocationName = t.LocationName,
                                  SupplierId = ep.SupplierId,
                                  LocationId = ep.LocationId,
                                  Supplier = new TblSupplierMaster { SupplierId = e.SupplierId, SupplierName = e.SupplierName },
                                  Location = new TblLocationMaster { LocationId = t.LocationId, LocationName = t.LocationName },
                              });

            return entryPoint.ToList();
        }

        IEnumerable<TblPurchaseBillDt> IProductRepository.GetAllPurchaseBillMasteDetails(int billId)
        {
            return this.ktConContext.Set<TblPurchaseBillDt>().Where(p => p.BillId == billId).ToList();
        }
    }
}
