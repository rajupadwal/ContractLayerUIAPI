﻿using System;
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


        public void SaveFarmerChickEggBillMaster(TblSalesBillMt master)
        {
            if (master.BillId > 0)
            {
                this.RepositoryContext.Set<TblSalesBillMt>().Update(master);
                this.RepositoryContext.SaveChanges();
            }
            else
            {
                this.RepositoryContext.Set<TblSalesBillMt>().Add(master);
                this.RepositoryContext.SaveChanges();
            }

        }
        public void SaveFarmerChickEggBillDetails(TblSalesBillDt[] details)
        {
            this.RepositoryContext.Set<TblSalesBillDt>().AddRange(details);
            this.RepositoryContext.SaveChanges();
        }


        IEnumerable<ViewFarmerChickEggBillMaster> IProductRepository.GetAllFarmerChickEggBillMasters()
        {



            var entryPoint = (from ep in ktConContext.TblSalesBillMt
                              join e in ktConContext.TblCustomerMaster on ep.CustomerId equals e.CustomerId
                              join t in ktConContext.TblLocationMaster on ep.LocationId equals t.LocationId
                              join p in ktConContext.TblPlanMaster on ep.PlanId equals p.PlanId
                              //where e.OwnerID == user.UID
                              select new ViewFarmerChickEggBillMaster
                              {
                                  BillNo = ep.BillNo,
                                  SaleType=ep.SaleType,
                                  BillDate = ep.BillDate,
                                  CustmerName = e.CustmerName,
                                  LocationName = t.LocationName,
                                  PlanName = p.PlanName,
                                  PlanId = ep.PlanId,
                                  PlaceOfSupply = ep.PlaceOfSupply,
                                  Address = ep.Address,
                                  TotalAmount=ep.TotalAmount,
                                  TdsAmount=ep.TdsAmount,
                                  AdminChargesAmt=ep.AdminChargesAmt,
                                  OtherCharges=ep.OtherCharges,
                                  GrandTotal=ep.GrandTotal,
                                  CustomerId = ep.CustomerId,
                                  LocationId = ep.LocationId,
                                  Customer = new TblCustomerMaster { CustomerId = e.CustomerId, CustmerName = e.CustmerName },
                                  Plan = new TblPlanMaster { PlanId = p.PlanId, PlanName = p.PlanName },
                                  Location = new TblLocationMaster { LocationId = t.LocationId, LocationName = t.LocationName },


                              });

            return entryPoint.ToList();
        }





        IEnumerable<TblSalesBillDt> IProductRepository.GetAllFarmerChickEggBillDetails(int billid)
        {
            return this.ktConContext.Set<TblSalesBillDt>().Where(p => p.BillId == billid).ToList();
        }



    }
}
