using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using ContractLayerFarm.Data.Contract;
using ContractLayerFarm.Data.Models;
using ContractLayerFarm.Data.Repositories;
using Microsoft.EntityFrameworkCore;

namespace ContractLayerFarm.Data.Repositories
{
    public class ProductRepository : RepositoryBase<TblProductTypeMaster>, IProductRepository
    {
        private ContractLayerDBContext ktConContext;
        public ProductRepository(ContractLayerDBContext ktConContext) : base(ktConContext) { this.ktConContext = ktConContext; }

        //public IEnumerable<TblProductTypeMaster> SearchProduct(string searchString)
        //{
        //    if (string.IsNullOrEmpty(searchString))
        //    { return new List<TblProductTypeMaster>(); }

        //   // return this.ktConContext.Set<TblProductTypeMaster>().Where(product => product.ProductName.ToLower().Contains(searchString.ToLower()));
        //}
        public int GetChickEggsBillNo()
        {
            int maxChickEggsBillNo = this.ktConContext.TblSalesBillMt.Select(p => Convert.ToInt32(p.BillNo)).DefaultIfEmpty(0).Max() + 1;
            return maxChickEggsBillNo;
        }

        public int GetFarmerInwardNo()
        {
            int maxFarmerInwardNo = this.ktConContext.TblFarmerInwardMt.Select(p => p.RecordNo).DefaultIfEmpty(0).Max() + 1;
            return maxFarmerInwardNo;
        }

        public int GetFarmerOutwardNo()
        {
            int maxFarmerOutwardNo = this.ktConContext.TblFarmerOutwardMt.Select(p => p.RecordNo).DefaultIfEmpty(0).Max() + 1;
            return maxFarmerOutwardNo;
        }

        public decimal GetProductAvailableStock(TblFarmerOutwardDt master)
        {
            decimal availableStock = 0;

            var entryPoint = (from st in ktConContext.TblStockDetails
                              where st.ProductId == master.ProductId && st.ProductType == master.ProductType
                              select new
                              {
                                  openingStock=st.OpeningStock,
                                  inwardQty = st.InwardQty,
                                  outwardQty = st.OutwardQty
                              });

            availableStock = Convert.ToDecimal(entryPoint.Sum(x => Convert.ToDecimal(x.inwardQty)) + entryPoint.Sum(x => Convert.ToDecimal(x.inwardQty)) - entryPoint.Sum(k => Convert.ToDecimal(k.outwardQty)));

            return availableStock;
        }

        public IEnumerable<TblProductTypeMaster> GetAllProduct()
        {

            var TblProductTypeMaster = this.ktConContext.TblProductTypeMaster
                       .Include(blog => blog.Product)
                       .Include(blog => blog.Unit)
                       .ToList();
            return TblProductTypeMaster;
        }

        public IEnumerable<TblProductTypeMaster> GetAllProductTypeForProduct(TblProductTypeMaster master)
        {

            var TblProductTypeMaster = this.ktConContext.TblProductTypeMaster
                       .Include(blog => blog.Product)
                       .Include(blog => blog.Unit)
                       .Where(s => s.ProductId == master.ProductId)
                       .ToList();
            return TblProductTypeMaster;
        }

        bool IProductRepository.Authenticate()
        {
            return true;
        }

        public IEnumerable<TblUnitMaster> GetUnits()
        {
            return this.ktConContext.Set<TblUnitMaster>();
        }

        //---------------Save Opening Stock Details--------------------------//
        public void SaveOpeningStockDetails(TblProductTypeMaster master)
        {
            if (master.PkId > 0)
            {
                var entity = this.ktConContext.TblStockDetails.FirstOrDefault(item => item.ProductId == master.ProductId && item.ProductType == master.ProductType && item.TranscationType == "Opening");

                if (entity != null)
                {
                    entity.OpeningStock = master.OpeningStock;
                    ktConContext.TblStockDetails.Update(entity);
                    ktConContext.SaveChanges();
                }
            }
            else
            {
                TblStockDetails stockList = new TblStockDetails()
                {
                    InwardDocNo = "",
                    OutwardDocNo = "",
                    DebitNoteNo = "",
                    CreditNoteNo = "",
                    TranscationType = "Opening",
                    ProductId = master.ProductId,
                    ProductType = master.ProductType,
                    InwardQty = 0,
                    OutwardQty = 0,
                    TranscationDate = DateTime.Now,
                    OpeningStock = master.OpeningStock,
                    CreditNoteQty = 0,
                    DebitNoteQty = 0,
                    Unit = "",
                };

                this.RepositoryContext.Set<TblStockDetails>().Add(stockList);
                this.RepositoryContext.SaveChanges();
            }
        }


        public void SaveFarmerInwardMaster(TblFarmerInwardMt master)
        {
            List<TblStockDetails> stockList = new List<TblStockDetails>();

            foreach (var details in master.TblFarmerInwardDt)
            {
                stockList.Add(new TblStockDetails()
                {
                    InwardDocNo = master.RecordNo.ToString(),
                    OutwardDocNo = "",
                    DebitNoteNo = "",
                    CreditNoteNo = "",
                    TranscationType = typeof(TblFarmerInwardMt).ToString(),
                    ProductId = details.ProductId,
                    ProductType = details.ProductType,
                    InwardQty = details.Quantity,
                    OutwardQty = 0,
                    TranscationDate = master.Date,
                    OpeningStock = 0,
                    CreditNoteQty = 0,
                    DebitNoteQty = 0,
                    Unit = details.Unit.ToString(),
                });
            }
            if (master.PkId > 0)
            {
                var toBeDeleteStock = this.RepositoryContext.Set<TblStockDetails>().Where(s => s.InwardDocNo == master.RecordNo.ToString());
                RepositoryContext.RemoveRange(toBeDeleteStock);
                this.RepositoryContext.SaveChanges();
                this.RepositoryContext.Set<TblStockDetails>().AddRange(stockList);

                this.RepositoryContext.Set<TblFarmerInwardMt>().Update(master);
                this.RepositoryContext.SaveChanges();
            }
            else
            {
                this.RepositoryContext.Set<TblFarmerInwardMt>().Add(master);
                this.RepositoryContext.Set<TblStockDetails>().AddRange(stockList);
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
                                  PkId = ep.PkId,
                                  RecordNo = ep.RecordNo,
                                  Date = ep.Date,
                                  CustmerName = e.CustmerName,
                                  LocationName = t.LocationName,
                                  PlanName = p.PlanName,
                                  CollectionAgentName = ep.CollectionAgentName,
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
            List<TblStockDetails> stockList = new List<TblStockDetails>();

            foreach (var details in master.TblFarmerOutwardDt)
            {
                stockList.Add(new TblStockDetails()
                {
                    InwardDocNo = "",
                    OutwardDocNo = master.RecordNo.ToString(),
                    DebitNoteNo = "",
                    CreditNoteNo = "",
                    TranscationType = typeof(TblFarmerOutwardMt).ToString(),
                    ProductId = details.ProductId,
                    ProductType = details.ProductType,
                    InwardQty = 0,
                    OutwardQty = details.Quantity,
                    TranscationDate = master.Date,
                    OpeningStock = 0,
                    CreditNoteQty = 0,
                    DebitNoteQty = 0,
                    Unit = details.Unit,
                });
            }
            if (master.PkId > 0)
            {
                var toBeDeleteStock = this.RepositoryContext.Set<TblStockDetails>().Where(s => s.OutwardDocNo == master.RecordNo.ToString());
                RepositoryContext.RemoveRange(toBeDeleteStock);
                this.RepositoryContext.Set<TblStockDetails>().AddRange(stockList);
                this.RepositoryContext.Set<TblFarmerOutwardMt>().Update(master);
                this.RepositoryContext.SaveChanges();

                var entity = this.ktConContext.TblBookingMaster.FirstOrDefault(item => item.CustomerId == master.CustomerId && item.PlanId == master.PlanId);

                if (entity != null)
                {
                    entity.DeliveryStatus = "Delivered";
                    ktConContext.TblBookingMaster.Update(entity);
                    ktConContext.SaveChanges();
                }
            }
            else
            {
                this.RepositoryContext.Set<TblFarmerOutwardMt>().Add(master);
                this.RepositoryContext.Set<TblStockDetails>().AddRange(stockList);
                this.RepositoryContext.SaveChanges();

                var entity = this.ktConContext.TblBookingMaster.FirstOrDefault(item => item.CustomerId == master.CustomerId && item.PlanId == master.PlanId);

                if (entity != null)
                {
                    entity.DeliveryStatus = "Delivered";
                    ktConContext.TblBookingMaster.Update(entity);
                    ktConContext.SaveChanges();
                }
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
                                  PkId = ep.PkId,
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
            List<TblStockDetails> stockList = new List<TblStockDetails>();

            foreach (var details in master.TblPurchaseBillDt)
            {
                stockList.Add(new TblStockDetails()
                {
                    InwardDocNo = master.BatchNo.ToString(),
                    OutwardDocNo = "",
                    DebitNoteNo = "",
                    CreditNoteNo = "",
                    TranscationType = typeof(TblPurchaseBillMt).ToString(),
                    ProductId = details.ProductId,
                    ProductType = details.ProductType,
                    InwardQty = details.Quantity,
                    OutwardQty = 0,
                    TranscationDate = master.BillDate,
                    OpeningStock = 0,
                    CreditNoteQty = 0,
                    DebitNoteQty = 0,
                    Unit = details.Unit,
                });
            }
            if (master.BillId > 0)
            {
                var toBeDeleteStock = this.RepositoryContext.Set<TblStockDetails>().Where(s => s.InwardDocNo == master.BatchNo.ToString());
                RepositoryContext.RemoveRange(toBeDeleteStock);
                this.RepositoryContext.SaveChanges();
                this.RepositoryContext.Set<TblStockDetails>().AddRange(stockList);
                this.RepositoryContext.Set<TblPurchaseBillMt>().Update(master);
                this.RepositoryContext.SaveChanges();

                var entity = this.ktConContext.TblSupplierTransaction.FirstOrDefault(item => item.BillId == master.BillId.ToString() && item.TransactionType == "Purchase Bill");

                if (entity != null)
                {
                    entity.PurchaseAmount = master.GrandTotal;
                    ktConContext.TblSupplierTransaction.Update(entity);
                    ktConContext.SaveChanges();
                }
            }
            else
            {
                this.RepositoryContext.Set<TblPurchaseBillMt>().Add(master);
                this.RepositoryContext.Set<TblStockDetails>().AddRange(stockList);
                this.RepositoryContext.SaveChanges();

                TblSupplierTransaction suppransList = new TblSupplierTransaction()
                {
                    SupplierId = master.SupplierId,
                    TransactionDate = master.BillDate,
                    TransactionType = "Purchase Bill",
                    BillId = master.BillId.ToString(),
                    PurchaseAmount = master.GrandTotal,
                    PurchasePaidAmt = 0,
                    PaymentType = "",
                    Narration = master.Narration,
                    PaymentVocherNo = "",
                };

                this.RepositoryContext.Set<TblSupplierTransaction>().Add(suppransList);
                this.RepositoryContext.SaveChanges();
            }
        }

        public void SavePurchaseBillDetails(TblPurchaseBillDt[] details)
        {
            this.RepositoryContext.Set<TblPurchaseBillDt>().AddRange(details);

            // Adding new entry for stock


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
                                  BillNo = ep.BillNo,
                                  BatchNo = ep.BatchNo,
                                  SupplierName = e.SupplierName,
                                  LocationName = t.LocationName,
                                  BeforeTaxAmt = ep.BeforeTaxAmt,
                                  TransportationCost = ep.TransportationCost,
                                  TransportationGSTPer = ep.TransportationGstper,
                                  TransportationGSTAmt = ep.TransportationGstamt,
                                  TotalTransportAmt = ep.TotalTransportAmt,
                                  TotalCGSTAmt = ep.TotalCgstamt,
                                  TotalSGSTAmt = ep.TotalSgstamt,
                                  TotalIGSTAmt = ep.TotalIgstamt,
                                  OtherCharges = ep.OtherCharges,
                                  Roundoff = ep.Roundoff,
                                  GrandTotal = ep.GrandTotal,
                                  Narration = ep.Narration,
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


        public void SaveFarmerChickEggBillMaster(TblSalesBillMt master)
        {
            TblCustomerTransaction custransList = new TblCustomerTransaction()
            {
                CustomerId = master.CustomerId,
                TransactionDate = master.BillDate,
                TransactionType = typeof(TblSalesBillMt).ToString(),
                BookingId = "",
                BookingAmount = 0,
                BookingReceivedAmt = 0,
                BillId = master.BillNo,
                BillAmount = master.GrandTotal,
                BillPaidAmt = 0,
                PaymentType = "",
                Narration = master.Narration,
            };

            if (master.BillId > 0)
            {
                var toBeDeleteSaleDT = this.RepositoryContext.Set<TblSalesBillDt>().Where(s => s.BillId == master.BillId);
                RepositoryContext.RemoveRange(toBeDeleteSaleDT);
                var toBeDeleteCustTrans = this.RepositoryContext.Set<TblCustomerTransaction>().Where(s => s.BillId == master.BillNo);
                RepositoryContext.RemoveRange(toBeDeleteCustTrans);
                this.RepositoryContext.SaveChanges();
                this.RepositoryContext.Set<TblSalesBillMt>().Update(master);
                this.RepositoryContext.Set<TblCustomerTransaction>().Update(custransList);
                this.RepositoryContext.SaveChanges();
            }
            else
            {
                this.RepositoryContext.Set<TblSalesBillMt>().Add(master);
                this.RepositoryContext.Set<TblCustomerTransaction>().Add(custransList);
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
                                  BillId = ep.BillId,
                                  BillDate = ep.BillDate,
                                  CustmerName = e.CustmerName,
                                  LocationName = t.LocationName,
                                  PlanName = p.PlanName,
                                  PlanId = ep.PlanId,
                                  PlaceOfSupply = ep.PlaceOfSupply,
                                  Address = ep.Address,
                                  TotalAmount = ep.TotalAmount,
                                  TdsAmount = ep.TdsAmount,
                                  AdminChargesAmt = ep.AdminChargesAmt,
                                  OtherCharges = ep.OtherCharges,
                                  GrandTotal = ep.GrandTotal,
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
