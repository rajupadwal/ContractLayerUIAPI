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
    public class ProductRepository : RepositoryBase<TblProductTypeMaster>, IProductRepository
    {
        private ContractLayerDBContext ktConContext;
        public ProductRepository(ContractLayerDBContext ktConContext) : base(ktConContext) { this.ktConContext = ktConContext; }
        //string connectionString = "Data Source=IDCSQL6.znetlive.com,1234;Initial Catalog=a1079e563_ContractLayer;user id=Contractpro;password=Contract@12345;Pooling=False;MultipleActiveResultSets=False;Connect Timeout=60;Encrypt=False;TrustServerCertificate=True;";
        //string connectionString = "Data Source=216.10.240.149;Initial Catalog=ktconin_ContractLayerDB;user id=ContarctLayer;password=Layer@12345;Pooling=False;MultipleActiveResultSets=False;Connect Timeout=60;Encrypt=False;TrustServerCertificate=True;";
        string connectionString = "Server=CHINTAMANI-PC;Database=ContractLayerDB;user id=sa;password=raju;Pooling=False;MultipleActiveResultSets=False;Connect Timeout=60;Encrypt=False;TrustServerCertificate=True;";

        
        public IEnumerable<TblUserInfo> SearchLogin(TblUserInfo user)
        {
            return this.ktConContext.Set<TblUserInfo>().Where(info => info.Username==user.Username && info.Userpassword==user.Userpassword);
        }

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

        public int GetPurchaseBillReturnGRNNo()
        {
            int maxPurchaseBillGRNNo = this.ktConContext.TblPurchaseBillReturnMt.Select(p => Convert.ToInt32(p.BatchNo)).DefaultIfEmpty(0).Max() + 1;
            return maxPurchaseBillGRNNo;
        }

        public int GetPurchaseBillGRNNo()
        {
            int maxPurchaseBillGRNNo = this.ktConContext.TblPurchaseBillMt.Select(p => Convert.ToInt32(p.BatchNo)).DefaultIfEmpty(0).Max() + 1;
            return maxPurchaseBillGRNNo;
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
                                  outwardQty = st.OutwardQty,
                                  rejectedQty=st.RejectedQty
                              });

            availableStock = Convert.ToDecimal(entryPoint.Sum(x => Convert.ToDecimal(x.inwardQty)) + entryPoint.Sum(x => Convert.ToDecimal(x.inwardQty)) - entryPoint.Sum(k => Convert.ToDecimal(k.outwardQty)) - entryPoint.Sum(k => Convert.ToDecimal(k.rejectedQty)));

            return availableStock;
        }


        IEnumerable<ViewStockDetails> IProductRepository.GetCustomerBookingOutstanding()
        {
            List<ViewStockDetails> lstcustBookOut = new List<ViewStockDetails>();

            using (SqlConnection con = new SqlConnection(connectionString))
            {
                string sqlQuery = "SELECT cm.CustmerName, cm.Address,cm.CustomerMobileNo,sum(ct.BookingAmount) as BookingAmount,sum(ct.BookingReceivedAmt) as BookingReceivedAmt,sum(ct.CancelBookingAmt) as CancelBookingAmt,(sum(ct.BookingAmount) - sum(ct.BookingReceivedAmt) - sum(ct.CancelBookingAmt)) as Outstanding FROM tbl_CustomerMaster cm inner join tbl_CustomerTransaction ct on cm.CustomerId = ct.CustomerId group by cm.CustmerName, cm.Address,cm.CustomerMobileNo";
                SqlCommand cmd = new SqlCommand(sqlQuery, con);
                con.Open();
                SqlDataReader rdr = cmd.ExecuteReader();
                while (rdr.Read())
                {
                    ViewStockDetails stockDetails = new ViewStockDetails();

                    stockDetails.CustomerName = (rdr["CustmerName"].ToString());
                    stockDetails.Address = (rdr["Address"].ToString());
                    stockDetails.MobileNo = (rdr["CustomerMobileNo"].ToString());
                    stockDetails.BookingAmount = Convert.ToDecimal(rdr["BookingAmount"]);
                    stockDetails.BookingReceivedAmt = Convert.ToDecimal(rdr["BookingReceivedAmt"]); 
                    stockDetails.CancelBookingAmt = Convert.ToDecimal(rdr["CancelBookingAmt"]);
                    stockDetails.BookingOutstanding = Convert.ToDecimal(rdr["Outstanding"]);

                    lstcustBookOut.Add(stockDetails);
                }
                con.Close();
            }
            return lstcustBookOut;
        }

        IEnumerable<ViewStockDetails> IProductRepository.GetCustomerBillOutstanding()
        {
            List<ViewStockDetails> lstcustBillOut = new List<ViewStockDetails>();

            using (SqlConnection con = new SqlConnection(connectionString))
            {
                string sqlQuery = "SELECT cm.CustmerName, cm.Address,cm.CustomerMobileNo,sum(ct.BillAmount) as BillAmount,sum(ct.BillPaidAmt) as BillPaidAmt,(sum(ct.BillAmount) - sum(ct.BillPaidAmt)) as Outstanding FROM tbl_CustomerMaster cm inner join tbl_CustomerTransaction ct on cm.CustomerId = ct.CustomerId group by cm.CustmerName, cm.Address,cm.CustomerMobileNo";
                SqlCommand cmd = new SqlCommand(sqlQuery, con);
                con.Open();
                SqlDataReader rdr = cmd.ExecuteReader();
                while (rdr.Read())
                {
                    ViewStockDetails stockDetails = new ViewStockDetails();

                    stockDetails.CustomerName = (rdr["CustmerName"].ToString());
                    stockDetails.Address = (rdr["Address"].ToString());
                    stockDetails.MobileNo = (rdr["CustomerMobileNo"].ToString());
                    stockDetails.BillAmount = Convert.ToDecimal(rdr["BillAmount"]);
                    stockDetails.BillPaidAmt = Convert.ToDecimal(rdr["BillPaidAmt"]);
                    stockDetails.BillOutstanding = Convert.ToDecimal(rdr["Outstanding"]);

                    lstcustBillOut.Add(stockDetails);
                }
                con.Close();
            }
            return lstcustBillOut;
        }

        IEnumerable<ViewStockDetails> IProductRepository.GetSupplierBillOutstanding()
        {
            List<ViewStockDetails> lstcustBillOut = new List<ViewStockDetails>();

            using (SqlConnection con = new SqlConnection(connectionString))
            {
                string sqlQuery = "SELECT sm.SupplierName, sm.Address,sm.SupplierMobileNo,sum(st.PurchaseAmount) as PurchaseAmount,sum(st.PurchasePaidAmt) as PurchasePaidAmt,(sum(st.PurchaseAmount) - sum(st.PurchasePaidAmt)) as Outstanding FROM tbl_SupplierMaster sm inner join tbl_SupplierTransaction st on sm.SupplierId = st.SupplierId group by sm.SupplierName, sm.Address,sm.SupplierMobileNo";
                SqlCommand cmd = new SqlCommand(sqlQuery, con);
                con.Open();
                SqlDataReader rdr = cmd.ExecuteReader();
                while (rdr.Read())
                {
                    ViewStockDetails stockDetails = new ViewStockDetails();

                    stockDetails.SupplierName = (rdr["SupplierName"].ToString());
                    stockDetails.Address = (rdr["Address"].ToString());
                    stockDetails.MobileNo = (rdr["SupplierMobileNo"].ToString());
                    stockDetails.PurchaseAmount = Convert.ToDecimal(rdr["PurchaseAmount"]);
                    stockDetails.PurchasePaidAmt = Convert.ToDecimal(rdr["PurchasePaidAmt"]);
                    stockDetails.PurchaseOutstanding = Convert.ToDecimal(rdr["Outstanding"]);

                    lstcustBillOut.Add(stockDetails);
                }
                con.Close();
            }
            return lstcustBillOut;
        }

        IEnumerable<ViewStockDetails> IProductRepository.GetSupplierLedger(int supplierid)
        {
            decimal outstandingAmt = 0;

            var entryPoint = (from ct in ktConContext.TblSupplierTransaction
                              where ct.SupplierId == supplierid
                              select new
                              {
                                  purchaseamt = ct.PurchaseAmount,
                                  purchasepaid = ct.PurchasePaidAmt
                              });

            outstandingAmt = Convert.ToDecimal(entryPoint.Sum(x => Convert.ToDecimal(x.purchaseamt)) - entryPoint.Sum(k => Convert.ToDecimal(k.purchasepaid)));


            List<ViewStockDetails> lstcustBillOut = new List<ViewStockDetails>();

            using (SqlConnection con = new SqlConnection(connectionString))
            {
                 
                string sqlQuery = "SELECT sm.SupplierName, st.TransactionDate,st.TransactionType,st.BillId ,st.PurchaseAmount,st.PaymentVocherNo,st.PurchasePaidAmt,st.PaymentType,st.Narration FROM tbl_SupplierTransaction st inner join tbl_SupplierMaster sm on st.SupplierId = sm.SupplierId where st.SupplierId=@SupplierID order by st.PkId";
                
                SqlCommand cmd = new SqlCommand(sqlQuery, con);
                cmd.Parameters.Add("@SupplierID",System.Data.SqlDbType.Int).Value =supplierid;
                con.Open();
                SqlDataReader rdr = cmd.ExecuteReader();
                while (rdr.Read())
                {
                    ViewStockDetails stockDetails = new ViewStockDetails();

                    stockDetails.SupplierName = (rdr["SupplierName"].ToString());
                    stockDetails.TransactionDate = Convert.ToDateTime(rdr["TransactionDate"]);
                    stockDetails.TransactionType = (rdr["TransactionType"].ToString());
                    stockDetails.BillId = (rdr["BillId"].ToString());
                    stockDetails.PaymentVocherNo = (rdr["PaymentVocherNo"].ToString());
                    stockDetails.PaymentType = (rdr["PaymentType"].ToString());
                    stockDetails.Narration = (rdr["Narration"].ToString());
                    stockDetails.PurchaseAmount = Convert.ToDecimal(rdr["PurchaseAmount"]);
                    stockDetails.PurchasePaidAmt = Convert.ToDecimal(rdr["PurchasePaidAmt"]);

                    lstcustBillOut.Add(stockDetails);
                }
                lstcustBillOut.Add(new ViewStockDetails() { PurchaseAmount = outstandingAmt, BillId = "Closing Balance" });
                con.Close();
            }
            return lstcustBillOut;
        }

        IEnumerable<ViewStockDetails> IProductRepository.GetCustomerLedger(int customerid)
        {
            decimal settlementAmt = 0;

            var entryPoint = (from ct in ktConContext.TblCustomerTransaction
                              where ct.CustomerId ==customerid
                              select new
                              {
                                  billamt = ct.BillAmount,
                                  billpaid = ct.BillPaidAmt,
                                  bookingamt = ct.BookingAmount,
                                  bookingpaid = ct.BookingReceivedAmt,
                                  cancelbookamt = ct.CancelBookingAmt
                              });

            settlementAmt = Convert.ToDecimal(entryPoint.Sum(x => Convert.ToDecimal(x.billamt)) - entryPoint.Sum(k => Convert.ToDecimal(k.billpaid)) - entryPoint.Sum(k => Convert.ToDecimal(k.bookingamt)) + entryPoint.Sum(k => Convert.ToDecimal(k.bookingpaid)) + entryPoint.Sum(k => Convert.ToDecimal(k.cancelbookamt)));

            List<ViewStockDetails> lstcustBillOut = new List<ViewStockDetails>();

            using (SqlConnection con = new SqlConnection(connectionString))
            {

                string sqlQuery = "SELECT cm.CustmerName, ct.TransactionDate,ct.TransactionType,ct.BookingId ,ct.BookingAmount,ct.ReceiptNo,ct.BookingReceivedAmt,ct.CancelBookingAmt,ct.BillId,ct.BillAmount,ct.BillPaidAmt,ct.PaymentType,ct.Narration FROM tbl_CustomerTransaction ct inner join tbl_CustomerMaster cm on ct.CustomerId = cm.CustomerId where ct.CustomerId=@CustomerID order by ct.PkId";

                SqlCommand cmd = new SqlCommand(sqlQuery, con);
                cmd.Parameters.Add("@CustomerID", System.Data.SqlDbType.Int).Value = customerid;
                con.Open();
                SqlDataReader rdr = cmd.ExecuteReader();
                while (rdr.Read())
                {
                    ViewStockDetails stockDetails = new ViewStockDetails();

                    stockDetails.CustomerName = (rdr["CustmerName"].ToString());
                    stockDetails.TransactionDate = Convert.ToDateTime(rdr["TransactionDate"]);
                    if (rdr["TransactionType"].ToString() == "ContractLayerFarm.Data.Models.TblBookingMaster")
                    {
                        stockDetails.TransactionType = "Booking Order";
                    }
                    if (rdr["TransactionType"].ToString() == "ContractLayerFarm.Data.Models.TblSalesBillMt")
                    {
                        stockDetails.TransactionType = "Sale Bill";
                    }
                    if (rdr["TransactionType"].ToString() == "ContractLayerFarm.Data.Models.TblBookingCancelMaster")
                    {
                        stockDetails.TransactionType = "Booking Cancel";
                    }
                    if (rdr["TransactionType"].ToString() == "ContractLayerFarm.Data.Models.TblSalesReceipt")
                    {
                        stockDetails.TransactionType = "Sale Receipt";
                    }
                     
                    stockDetails.BookingId = (rdr["BookingId"].ToString());
                    stockDetails.BookingAmount = Convert.ToDecimal(rdr["BookingAmount"]);
                    stockDetails.ReceiptNo = (rdr["ReceiptNo"].ToString());
                    stockDetails.BookingReceivedAmt = Convert.ToDecimal(rdr["BookingReceivedAmt"]);
                    stockDetails.CancelBookingAmt = Convert.ToDecimal(rdr["CancelBookingAmt"]);
                    stockDetails.BillId = (rdr["BillId"].ToString());
                    stockDetails.BillAmount = Convert.ToDecimal(rdr["BillAmount"]);
                    stockDetails.BillPaidAmt = Convert.ToDecimal(rdr["BillPaidAmt"]);
                    stockDetails.PaymentType = (rdr["PaymentType"].ToString());
                    stockDetails.Narration = (rdr["Narration"].ToString());

                    lstcustBillOut.Add(stockDetails);
                    
                }
                lstcustBillOut.Add(new ViewStockDetails() { BookingAmount = settlementAmt, BookingId = "Closing Balance" });
                con.Close();
            }
            return lstcustBillOut;
        }

        //public IConfiguration Configuration { get; }

        //public void GetConnectionString1(IServiceCollection services)
        //{
        //    services.AddDbContext<ContractLayerDBContext>(options =>

        //   options.UseSqlServer(Configuration.GetConnectionString("CLFDatabase")));
        //}

        IEnumerable<ViewStockDetails> IProductRepository.GetProductwiseAvailableStock()
        {
            List<ViewStockDetails> lstStockDetails = new List<ViewStockDetails>();

            using (SqlConnection con = new SqlConnection(connectionString))
            {
                string sqlQuery = "SELECT pm.ProductName, pt.ProductType,um.UnitDescription,sum(st.OpeningStock) as OpeningStock,sum(st.InwardQty) as InwardQty,sum(st.OutwardQty) as OutwardQty,sum(st.RejectedQty) as RejectedQty,(sum(st.OpeningStock) + sum(st.InwardQty) - sum(st.OutwardQty) - sum(st.RejectedQty)) as AvailableStock FROM tbl_ProductTypeMaster pt inner join tbl_ProductMaster pm on pt.ProductId = pm.ProductId inner join tbl_UnitMaster um on pt.UnitId = um.UnitId inner join tbl_StockDetails st on pt.ProductId = st.ProductId and pt.ProductType = st.ProductType group by  pm.ProductName, pt.ProductType,um.UnitDescription";
                SqlCommand cmd = new SqlCommand(sqlQuery, con);
                con.Open();
                SqlDataReader rdr = cmd.ExecuteReader();
                while (rdr.Read())
                {
                    ViewStockDetails stockDetails = new ViewStockDetails();

                    stockDetails.ProductName =(rdr["ProductName"].ToString());
                    stockDetails.ProductType = (rdr["ProductType"].ToString());
                    stockDetails.UnitDescription = (rdr["UnitDescription"].ToString());
                    stockDetails.OpeningStock = Convert.ToDecimal(rdr["OpeningStock"]);
                    stockDetails.InwardQty = Convert.ToDecimal(rdr["InwardQty"]);
                    stockDetails.OutwardQty = Convert.ToDecimal(rdr["OutwardQty"]);
                    stockDetails.RejectedQty = Convert.ToDecimal(rdr["RejectedQty"]);
                    stockDetails.AvailableStock = Convert.ToDecimal(rdr["AvailableStock"]);

                    lstStockDetails.Add(stockDetails);
                }
                con.Close();
            }
            return lstStockDetails;

            /*var entryPoint = (from pt in ktConContext.TblProductTypeMaster
                               join pm in ktConContext.TblProductMaster
                               on pt.ProductId equals pm.ProductId
                               join um in ktConContext.TblUnitMaster
                               on pt.UnitId equals um.UnitId
                               select new ViewStockDetails
                               {
                                   ProductName = pm.ProductName,
                                   ProductType = pt.ProductType,
                                   UnitDescription =um.UnitDescription,
                               });

             return entryPoint.ToList();
            var entryPoint = (from pt in ktConContext.TblProductTypeMaster
                               join pm in ktConContext.TblProductMaster
                               on pt.ProductId equals pm.ProductId
                               join um in ktConContext.TblUnitMaster
                               on pt.UnitId equals um.UnitId
                               join sd in ktConContext.TblStockDetails
                               on new { pt.ProductId, pt.ProductType} equals new { sd.ProductId, sd.ProductType }
                               group new { pt, pm, um, sd } by new
                               {
                                   pm.ProductName,
                                   pt.ProductType,
                                   um.UnitDescription,

                               } into g
                               select new ViewStockDetails
                               {
                                   ProductName = g.key.ProductName,
                                   ProductType = g.key.ProductType,
                                   UnitDescription = g.key.UnitDescription,
                                   OpeningStock = Convert.ToDecimal(g.Sum(t3 => t3.OpeningStock)),
                                   InwardQty = Convert.ToDecimal(g.Sum(t3 => t3.InwardQty)),
                                   OutwardQty = Convert.ToDecimal(g.Sum(t3 => t3.OutwardQty)),
                                   AvailableStock = Convert.ToDecimal(g.Sum(t3 => t3.OpeningStock)) + Convert.ToDecimal(g.Sum(t3 => t3.InwardQty)) - Convert.ToDecimal(g.Sum(t3 => t3.OutwardQty))
                               });

             return entryPoint.ToList();*/
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

                var entity1 = this.ktConContext.TblProductTypeMaster.FirstOrDefault(item => item.ProductId == master.ProductId && item.ProductType == master.ProductType && item.PkId == master.PkId);

                if (entity1 != null)
                {
                    entity1.OpeningStock = master.OpeningStock;
                    entity1.Cgst = master.Cgst; entity1.Sgst = master.Sgst; entity1.Igst = master.Igst; entity1.Hsnsac = master.Hsnsac;
                    entity1.MinimumQty = master.MinimumQty; entity1.ProductType = master.ProductType;entity1.PurchasePrice = master.PurchasePrice;
                    entity1.SellingPrice = master.SellingPrice; entity1.UnitId = master.UnitId;

                    ktConContext.TblProductTypeMaster.Update(entity1);
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
                    RejectedQty = 0,
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

        //-------------------------Farmer Inward------------------------------//

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
                    RejectedQty = 0,
                    TranscationDate = master.Date,
                    OpeningStock = 0,
                    CreditNoteQty = 0,
                    DebitNoteQty = 0,
                    Unit = details.Unit.ToString(),
                });
            }
            if (master.PkId > 0)
            {
                var toBeDeleteStock = this.RepositoryContext.Set<TblStockDetails>().Where(s => s.InwardDocNo == master.RecordNo.ToString() && s.TranscationType == typeof(TblFarmerInwardMt).ToString());
                RepositoryContext.RemoveRange(toBeDeleteStock);
                this.RepositoryContext.SaveChanges();
                this.RepositoryContext.Set<TblStockDetails>().AddRange(stockList);
                var toBeDeleteDT = this.RepositoryContext.Set<TblFarmerInwardDt>().Where(s => s.RecordNo == master.PkId);
                RepositoryContext.RemoveRange(toBeDeleteDT);
                this.RepositoryContext.SaveChanges();

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

        public void DeleteFarmerInward(TblFarmerInwardMt master)
        {
                var toBeDeleteStock = this.RepositoryContext.Set<TblStockDetails>().Where(s => s.InwardDocNo == master.RecordNo.ToString() && s.TranscationType == typeof(TblFarmerInwardMt).ToString());
                RepositoryContext.RemoveRange(toBeDeleteStock);
                this.RepositoryContext.SaveChanges();

                var toBeDeleteDT = this.RepositoryContext.Set<TblFarmerInwardDt>().Where(s => s.RecordNo == master.PkId);
                RepositoryContext.RemoveRange(toBeDeleteDT);
                this.RepositoryContext.SaveChanges();

                var toBeDeleteMT = this.RepositoryContext.Set<TblFarmerInwardMt>().Where(s => s.PkId == master.PkId);
                RepositoryContext.RemoveRange(toBeDeleteMT);
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
                    RejectedQty = 0,
                    TranscationDate = master.Date,
                    OpeningStock = 0,
                    CreditNoteQty = 0,
                    DebitNoteQty = 0,
                    Unit = details.Unit,
                });
            }
            if (master.PkId > 0)
            {
                var toBeDeleteStock = this.RepositoryContext.Set<TblStockDetails>().Where(s => s.OutwardDocNo == master.RecordNo.ToString() && s.TranscationType == typeof(TblFarmerOutwardMt).ToString());
                RepositoryContext.RemoveRange(toBeDeleteStock);

                var toBeDeleteDT = this.RepositoryContext.Set<TblFarmerOutwardDt>().Where(s => s.RecordNo == master.PkId);
                RepositoryContext.RemoveRange(toBeDeleteDT);
                this.RepositoryContext.SaveChanges();

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

        public void DeleteFarmerOutward(TblFarmerOutwardMt master)
        {
            var entity = this.ktConContext.TblBookingMaster.FirstOrDefault(item => item.CustomerId == master.CustomerId && item.PlanId == master.PlanId );

            if (entity != null)
            {
                entity.DeliveryStatus = "Pending";
                ktConContext.TblBookingMaster.Update(entity);
                ktConContext.SaveChanges();
            }

            var toBeDeleteStock = this.RepositoryContext.Set<TblStockDetails>().Where(s => s.OutwardDocNo == master.RecordNo.ToString() && s.TranscationType == typeof(TblFarmerOutwardMt).ToString());
            RepositoryContext.RemoveRange(toBeDeleteStock);
            this.RepositoryContext.SaveChanges();

            var toBeDeleteDT = this.RepositoryContext.Set<TblFarmerOutwardDt>().Where(s => s.RecordNo == master.PkId);
            RepositoryContext.RemoveRange(toBeDeleteDT);
            this.RepositoryContext.SaveChanges();

            var toBeDeleteMT = this.RepositoryContext.Set<TblFarmerOutwardMt>().Where(s => s.PkId == master.PkId);
            RepositoryContext.RemoveRange(toBeDeleteMT);
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
                    RejectedQty = 0,
                    TranscationDate = master.BillDate,
                    OpeningStock = 0,
                    CreditNoteQty = 0,
                    DebitNoteQty = 0,
                    Unit = details.Unit,
                });
            }
            if (master.BillId > 0)
            {
                var toBeDeleteStock = this.RepositoryContext.Set<TblStockDetails>().Where(s => s.InwardDocNo == master.BatchNo.ToString() && s.TranscationType == typeof(TblPurchaseBillMt).ToString());
                RepositoryContext.RemoveRange(toBeDeleteStock);
                this.RepositoryContext.SaveChanges();
                var toBeDeleteDT = this.RepositoryContext.Set<TblPurchaseBillDt>().Where(s => s.BillId == master.BillId);
                RepositoryContext.RemoveRange(toBeDeleteDT);
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

        public void SavePurchaseBillReturnMaster(TblPurchaseBillReturnMt master)
        {
            List<TblStockDetails> stockList = new List<TblStockDetails>();

            foreach (var details in master.TblPurchaseBillReturnDt)
            {
                stockList.Add(new TblStockDetails()
                {
                    InwardDocNo = "",
                    OutwardDocNo = master.BatchNo.ToString(),
                    DebitNoteNo = "",
                    CreditNoteNo = "",
                    TranscationType = typeof(TblPurchaseBillReturnMt).ToString(),
                    ProductId = details.ProductId,
                    ProductType = details.ProductType,
                    InwardQty = 0,
                    OutwardQty = 0,
                    RejectedQty=details.RejectedQty,
                    TranscationDate = master.BillDate,
                    OpeningStock = 0,
                    CreditNoteQty = 0,
                    DebitNoteQty = 0,
                    Unit = details.Unit,
                });
            }
            if (master.BillId > 0)
            {
                var toBeDeleteStock = this.RepositoryContext.Set<TblStockDetails>().Where(s => s.OutwardDocNo == master.BatchNo.ToString() && s.TranscationType == typeof(TblPurchaseBillReturnMt).ToString());
                RepositoryContext.RemoveRange(toBeDeleteStock);
                this.RepositoryContext.SaveChanges();
                var toBeDeleteDT = this.RepositoryContext.Set<TblPurchaseBillReturnDt>().Where(s => s.BillId == master.BillId);
                RepositoryContext.RemoveRange(toBeDeleteDT);
                this.RepositoryContext.SaveChanges();

                this.RepositoryContext.Set<TblStockDetails>().AddRange(stockList);
                this.RepositoryContext.Set<TblPurchaseBillReturnMt>().Update(master);
                this.RepositoryContext.SaveChanges();

            }
            else
            {
                this.RepositoryContext.Set<TblPurchaseBillReturnMt>().Add(master);
                this.RepositoryContext.Set<TblStockDetails>().AddRange(stockList);
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

        IEnumerable<ViewPurchaseBillMaster> IProductRepository.GetAllPurchaseBillReturnMasters()
        {
            var entryPoint = (from ep in ktConContext.TblPurchaseBillReturnMt
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
                                  TransportationGSTPer = ep.TransportationgstPer,
                                  TransportationGSTAmt = ep.TransportationgstAmt,
                                  TotalTransportAmt = ep.TotalTransportAmt,
                                  TotalCGSTAmt = ep.TotalCgstTamt,
                                  TotalSGSTAmt = ep.TotalSgstAmt,
                                  TotalIGSTAmt = ep.TotalIgstAmt,
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

        public void DeletePurchaseBill(TblPurchaseBillMt master)
        {
            var toBeDeleteStock = this.RepositoryContext.Set<TblStockDetails>().Where(s => s.InwardDocNo == master.BatchNo.ToString() && s.TranscationType == typeof(TblPurchaseBillMt).ToString());
            RepositoryContext.RemoveRange(toBeDeleteStock);
            this.RepositoryContext.SaveChanges();

            //var toBeDeleteSuppTrans = this.RepositoryContext.Set<TblSupplierTransaction>().Where(s => s.BillId == master.BillId.ToString() && s.TransactionType == "Purchase Bill");
            //RepositoryContext.RemoveRange(toBeDeleteStock);
            //this.RepositoryContext.SaveChanges();

            var toBeDeleteSuppTrans = this.RepositoryContext.Set<TblSupplierTransaction>().Where(s => s.BillId == master.BillId.ToString() && s.TransactionType == "Purchase Bill");
            RepositoryContext.RemoveRange(toBeDeleteSuppTrans);
            this.RepositoryContext.SaveChanges();

            var toBeDeleteDT = this.RepositoryContext.Set<TblPurchaseBillDt>().Where(s => s.BillId == master.BillId);
            RepositoryContext.RemoveRange(toBeDeleteDT);
            this.RepositoryContext.SaveChanges();

            var toBeDeleteMT = this.RepositoryContext.Set<TblPurchaseBillMt>().Where(s => s.BillId == master.BillId);
            RepositoryContext.RemoveRange(toBeDeleteMT);
            this.RepositoryContext.SaveChanges();
        }

        public void DeletePurchaseBillReturn(TblPurchaseBillReturnMt master)
        {
            var toBeDeleteStock = this.RepositoryContext.Set<TblStockDetails>().Where(s => s.OutwardDocNo == master.BatchNo.ToString() && s.TranscationType == typeof(TblPurchaseBillReturnMt).ToString());
            RepositoryContext.RemoveRange(toBeDeleteStock);
            this.RepositoryContext.SaveChanges();

            var toBeDeleteDT = this.RepositoryContext.Set<TblPurchaseBillReturnDt>().Where(s => s.BillId == master.BillId);
            RepositoryContext.RemoveRange(toBeDeleteDT);
            this.RepositoryContext.SaveChanges();

            var toBeDeleteMT = this.RepositoryContext.Set<TblPurchaseBillReturnMt>().Where(s => s.BillId == master.BillId);
            RepositoryContext.RemoveRange(toBeDeleteMT);
            this.RepositoryContext.SaveChanges();
        }

        IEnumerable<TblPurchaseBillDt> IProductRepository.GetAllPurchaseBillMasteDetails(int billId)
        {
            return this.ktConContext.Set<TblPurchaseBillDt>().Where(p => p.BillId == billId).ToList();
        }

        IEnumerable<TblPurchaseBillReturnDt> IProductRepository.GetAllPurchaseBillReturnMasteDetails(int billId)
        {
            return this.ktConContext.Set<TblPurchaseBillReturnDt>().Where(p => p.BillId == billId).ToList();
        }

        //------------------------Create Bill--------------------------

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
                CancelBookingAmt=0,
                BillId = master.BillNo,
                BillAmount = master.GrandTotal,
                BillPaidAmt = 0,
                ReceiptNo="",
                PaymentType = "",
                Narration = master.Narration,
            };

            if (master.BillId > 0)
            {
                var toBeDeleteSaleDT = this.RepositoryContext.Set<TblSalesBillDt>().Where(s => s.BillId == master.BillId);
                RepositoryContext.RemoveRange(toBeDeleteSaleDT);
                var toBeDeleteCustTrans = this.RepositoryContext.Set<TblCustomerTransaction>().Where(s => s.BillId == master.BillNo && s.TransactionType == typeof(TblSalesBillMt).ToString());
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

        public void DeleteSaleBill(TblSalesBillMt master)
        {
            var toBeDeletecustTrans = this.RepositoryContext.Set<TblCustomerTransaction>().Where(s => s.BillId == master.BillId.ToString() && s.TransactionType == typeof(TblSalesBillMt).ToString());
            RepositoryContext.RemoveRange(toBeDeletecustTrans);
            this.RepositoryContext.SaveChanges();

            var toBeDeleteDT = this.RepositoryContext.Set<TblSalesBillDt>().Where(s => s.BillId == master.BillId);
            RepositoryContext.RemoveRange(toBeDeleteDT);
            this.RepositoryContext.SaveChanges();

            var toBeDeleteMT = this.RepositoryContext.Set<TblSalesBillMt>().Where(s => s.BillId == master.BillId);
            RepositoryContext.RemoveRange(toBeDeleteMT);
            this.RepositoryContext.SaveChanges();
        }

        IEnumerable<TblSalesBillDt> IProductRepository.GetAllFarmerChickEggBillDetails(int billid)
        {
            return this.ktConContext.Set<TblSalesBillDt>().Where(p => p.BillId == billid).ToList();
        }

        public decimal GetCustomerOutstandingAmt(TblSalesBillMt master)
        {
            decimal outstandingAmt = 0;
           
                var entryPoint = (from ct in ktConContext.TblCustomerTransaction
                                  where ct.CustomerId == master.CustomerId
                                  select new
                                  {
                                      billamt = ct.BillAmount,
                                      billpaid = ct.BillPaidAmt
                                  });

                outstandingAmt = Convert.ToDecimal(entryPoint.Sum(x => Convert.ToDecimal(x.billamt)) - entryPoint.Sum(k => Convert.ToDecimal(k.billpaid)));

            return outstandingAmt;
        }

        public decimal GetCustomerSettlementAmt(TblSalesBillMt master)
        {
            decimal settlementAmt = 0;

            var entryPoint = (from ct in ktConContext.TblCustomerTransaction
                              where ct.CustomerId == master.Customer.CustomerId
                              select new
                              {
                                  billamt = ct.BillAmount,
                                  billpaid = ct.BillPaidAmt,
                                  bookingamt=ct.BookingAmount,
                                  bookingpaid=ct.BookingReceivedAmt,
                                  cancelbookamt=ct.CancelBookingAmt
                              });

            settlementAmt = Convert.ToDecimal(entryPoint.Sum(x => Convert.ToDecimal(x.billamt)) - entryPoint.Sum(k => Convert.ToDecimal(k.billpaid)) - entryPoint.Sum(k => Convert.ToDecimal(k.bookingamt)) + entryPoint.Sum(k => Convert.ToDecimal(k.bookingpaid)) + entryPoint.Sum(k => Convert.ToDecimal(k.cancelbookamt)));

            return settlementAmt;
        }
    }
}
