using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace ContractLayerFarm.Data.Models
{
    public partial class ContractLayerDBContext : DbContext
    {
        public ContractLayerDBContext()
        {
        }

        public ContractLayerDBContext(DbContextOptions<ContractLayerDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<TblBookingCancelMaster> TblBookingCancelMaster { get; set; }
        public virtual DbSet<TblBookingMaster> TblBookingMaster { get; set; }
        public virtual DbSet<TblCompanyProfile> TblCompanyProfile { get; set; }
        public virtual DbSet<TblCustomerMaster> TblCustomerMaster { get; set; }
        public virtual DbSet<TblEggsRangeMaster> TblEggsRangeMaster { get; set; }
        public virtual DbSet<TblEmployeeAdvance> TblEmployeeAdvance { get; set; }
        public virtual DbSet<TblEmployeeMaster> TblEmployeeMaster { get; set; }
        public virtual DbSet<TblEnquiryDetails> TblEnquiryDetails { get; set; }
        public virtual DbSet<TblExpenceTypeMaster> TblExpenceTypeMaster { get; set; }
        public virtual DbSet<TblFarmerInwardDt> TblFarmerInwardDt { get; set; }
        public virtual DbSet<TblFarmerInwardMt> TblFarmerInwardMt { get; set; }
        public virtual DbSet<TblFarmerOutwardDt> TblFarmerOutwardDt { get; set; }
        public virtual DbSet<TblFarmerOutwardMt> TblFarmerOutwardMt { get; set; }
        public virtual DbSet<TblFeedSheduleMasterDt> TblFeedSheduleMasterDt { get; set; }
        public virtual DbSet<TblFeedSheduleMasterMt> TblFeedSheduleMasterMt { get; set; }
        public virtual DbSet<TblIncomeDeatils> TblIncomeDeatils { get; set; }
        public virtual DbSet<TblLocationMaster> TblLocationMaster { get; set; }
        public virtual DbSet<TblMortalitywastageDt> TblMortalitywastageDt { get; set; }
        public virtual DbSet<TblMortalitywastageMt> TblMortalitywastageMt { get; set; }
        public virtual DbSet<TblOfficeExpencesDetails> TblOfficeExpencesDetails { get; set; }
        public virtual DbSet<TblPlanMaster> TblPlanMaster { get; set; }
        public virtual DbSet<TblProductDescriptionMaster> TblProductDescriptionMaster { get; set; }
        public virtual DbSet<TblProductMaster> TblProductMaster { get; set; }
        public virtual DbSet<TblPurchaseBillDt> TblPurchaseBillDt { get; set; }
        public virtual DbSet<TblPurchaseBillMt> TblPurchaseBillMt { get; set; }
        public virtual DbSet<TblPurchaseBillReturnDt> TblPurchaseBillReturnDt { get; set; }
        public virtual DbSet<TblPurchaseBillReturnMt> TblPurchaseBillReturnMt { get; set; }
        public virtual DbSet<TblPurchaseReturnReceipt> TblPurchaseReturnReceipt { get; set; }
        public virtual DbSet<TblSalesBillDt> TblSalesBillDt { get; set; }
        public virtual DbSet<TblSalesBillMt> TblSalesBillMt { get; set; }
        public virtual DbSet<TblSalesReceipt> TblSalesReceipt { get; set; }
        public virtual DbSet<TblShedMaster> TblShedMaster { get; set; }
        public virtual DbSet<TblStockDetails> TblStockDetails { get; set; }
        public virtual DbSet<TblSupplierMaster> TblSupplierMaster { get; set; }
        public virtual DbSet<TblUnitMaster> TblUnitMaster { get; set; }
        public virtual DbSet<TblUserInfo> TblUserInfo { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //            if (!optionsBuilder.IsConfigured)
            //            {
            //#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
            //                optionsBuilder.UseSqlServer("Server=ADMIN-PC\\SQLEXPRESS;Database=ContractLayerDB;Trusted_Connection=True;");
            //            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TblBookingCancelMaster>(entity =>
            {
                entity.HasKey(e => e.RecordNo);

                entity.ToTable("tbl_BookingCancelMaster");

                entity.Property(e => e.BookungCancelDate).HasColumnType("datetime");

                entity.Property(e => e.ChequeNo).HasMaxLength(20);

                entity.Property(e => e.Narration).HasMaxLength(20);

                entity.Property(e => e.PaymentMethod).HasMaxLength(20);
            });

            modelBuilder.Entity<TblBookingMaster>(entity =>
            {
                entity.HasKey(e => e.RecordNo);

                entity.ToTable("tbl_BookingMaster");

                entity.Property(e => e.Agreement).HasMaxLength(20);

                entity.Property(e => e.BookingDate).HasColumnType("datetime");

                entity.Property(e => e.ChequeNo).HasMaxLength(20);

                //entity.Property(e => e.DeliveryStatus).HasMaxLength(20);

                entity.Property(e => e.EnquiryRef).HasMaxLength(20);

                entity.Property(e => e.MobileNo).HasMaxLength(20);

                entity.Property(e => e.Narration).HasMaxLength(20);

                entity.Property(e => e.PaymentMethod).HasMaxLength(20);
            });

            modelBuilder.Entity<TblCompanyProfile>(entity =>
            {
                entity.HasKey(e => e.ProfileId);

                entity.ToTable("tbl_CompanyProfile");

                entity.Property(e => e.Address).HasMaxLength(50);

                entity.Property(e => e.CompanyLogo).HasMaxLength(20);

                entity.Property(e => e.CompanyName).HasMaxLength(50);

                entity.Property(e => e.EmailId).HasMaxLength(20);

                entity.Property(e => e.GstNo).HasMaxLength(25);

                entity.Property(e => e.MobileNo).HasMaxLength(20);

                entity.Property(e => e.PhoneNo).HasMaxLength(52);

                entity.Property(e => e.ThankYouNote).HasMaxLength(50);
            });

            modelBuilder.Entity<TblCustomerMaster>(entity =>
            {
                entity.HasKey(e => e.CustomerId);

                entity.ToTable("tbl_CustomerMaster");

                entity.Property(e => e.AccountNo).HasMaxLength(25);

                entity.Property(e => e.AccountType).HasMaxLength(20);

                entity.Property(e => e.Address).HasMaxLength(50);

                entity.Property(e => e.BankName).HasMaxLength(20);

                entity.Property(e => e.BranchName).HasMaxLength(20);

                entity.Property(e => e.City).HasMaxLength(20);

                entity.Property(e => e.ConatctPersonNo).HasMaxLength(20);

                entity.Property(e => e.ContactPerson).HasMaxLength(20);

                entity.Property(e => e.CustmerName).HasMaxLength(50);

                entity.Property(e => e.CustomerMobileNo).HasMaxLength(50);

                entity.Property(e => e.Designation).HasMaxLength(50);

                entity.Property(e => e.District).HasMaxLength(20);

                entity.Property(e => e.GstNo).HasMaxLength(20);

                entity.Property(e => e.IfscCode).HasMaxLength(20);

                entity.Property(e => e.Location).HasMaxLength(20);

                entity.Property(e => e.MicrCode).HasMaxLength(20);

                entity.Property(e => e.PanNo).HasMaxLength(20);

                entity.Property(e => e.Pincode).HasMaxLength(10);

                entity.Property(e => e.PlantAddress).HasMaxLength(150);

                entity.Property(e => e.State).HasMaxLength(20);

                entity.Property(e => e.Taluka).HasMaxLength(20);
            });

            modelBuilder.Entity<TblEggsRangeMaster>(entity =>
            {
                entity.HasKey(e => e.EggsRangeCode);

                entity.ToTable("tbl_EggsRangeMaster");
            });

            modelBuilder.Entity<TblEmployeeAdvance>(entity =>
            {
                entity.HasKey(e => e.EmpAdvanceId);

                entity.ToTable("tbl_EmployeeAdvance");

                entity.Property(e => e.EmployeeName).HasMaxLength(20);

                entity.Property(e => e.LocationName).HasMaxLength(20);

                entity.Property(e => e.Narration).HasMaxLength(50);

                entity.Property(e => e.RecordDate).HasColumnType("datetime");
            });

            modelBuilder.Entity<TblEmployeeMaster>(entity =>
            {
                entity.HasKey(e => e.EmployeeId);

                entity.ToTable("tbl_EmployeeMaster");

                entity.Property(e => e.AccountNo).HasMaxLength(20);

                entity.Property(e => e.AccountType).HasMaxLength(20);

                entity.Property(e => e.AadharId).HasMaxLength(20);

                entity.Property(e => e.Address).HasMaxLength(20);

                entity.Property(e => e.BankName).HasMaxLength(20);

                entity.Property(e => e.BloodGroup).HasMaxLength(10);

                entity.Property(e => e.BranchName).HasMaxLength(20);

                entity.Property(e => e.City).HasMaxLength(20);

                entity.Property(e => e.CompanyMobileNo).HasMaxLength(15);

                entity.Property(e => e.PersonalContactNo).HasMaxLength(20);

                entity.Property(e => e.DateOfJoining).HasColumnType("datetime");

                entity.Property(e => e.DateOfLeaving).HasColumnType("datetime");

                entity.Property(e => e.District).HasMaxLength(20);

                entity.Property(e => e.EducationDetails).HasMaxLength(20);

                entity.Property(e => e.EmergencyContactName).HasMaxLength(20);

                entity.Property(e => e.EmergencyNo).HasMaxLength(20);

                entity.Property(e => e.EmployeeName).HasMaxLength(20);

                entity.Property(e => e.IfscCode).HasMaxLength(20);

                entity.Property(e => e.Location).HasMaxLength(20);

                entity.Property(e => e.MaritialStatus).HasMaxLength(15);

                entity.Property(e => e.MicrCode).HasMaxLength(20);

                entity.Property(e => e.PanCardNo).HasMaxLength(20);

                entity.Property(e => e.Password).HasMaxLength(20);

                entity.Property(e => e.PastWorkExp).HasMaxLength(20);

                entity.Property(e => e.Post).HasMaxLength(20);

                entity.Property(e => e.Relation).HasMaxLength(20);

                entity.Property(e => e.Remarks).HasMaxLength(50);

                entity.Property(e => e.Role).HasMaxLength(20);

                entity.Property(e => e.Salary).HasMaxLength(20);

                entity.Property(e => e.Taluka).HasMaxLength(20);

                entity.Property(e => e.UserId).HasMaxLength(20);

                entity.Property(e => e.VoterId).HasMaxLength(20);
            });

            modelBuilder.Entity<TblEnquiryDetails>(entity =>
            {
                entity.HasKey(e => e.RecordNo);

                entity.ToTable("tbl_EnquiryDetails");

                entity.Property(e => e.Address).HasMaxLength(20);

                entity.Property(e => e.City).HasMaxLength(20);

                entity.Property(e => e.CustomerName).HasMaxLength(20);

                entity.Property(e => e.Date).HasColumnType("datetime");

                entity.Property(e => e.District).HasMaxLength(20);

                entity.Property(e => e.Enquiry).HasMaxLength(20);

                entity.Property(e => e.EnquiryType).HasMaxLength(20);

                entity.Property(e => e.Narration).HasMaxLength(20);

                entity.Property(e => e.RemindDate).HasColumnType("datetime");

                entity.Property(e => e.Taluka).HasMaxLength(20);
            });

            modelBuilder.Entity<TblExpenceTypeMaster>(entity =>
            {
                entity.HasKey(e => e.ExpenceId);

                entity.ToTable("tbl_ExpenceTypeMaster");

                entity.Property(e => e.ExpenceType).HasMaxLength(20);
            });

            modelBuilder.Entity<TblFarmerInwardDt>(entity =>
            {
                entity.HasKey(e => e.PkId);

                entity.ToTable("tbl_FarmerInwardDT");

                entity.Property(e => e.Date).HasColumnType("datetime");

                entity.Property(e => e.RecordNo).HasMaxLength(20);

                entity.Property(e => e.Unit).HasMaxLength(20);
            });

            modelBuilder.Entity<TblFarmerInwardMt>(entity =>
            {
                entity.HasKey(e => e.RecordNo);

                entity.ToTable("tbl_FarmerInwardMT");

                entity.Property(e => e.RecordNo)
                    .HasMaxLength(20)
                    .ValueGeneratedNever();

                entity.Property(e => e.Date).HasColumnType("datetime");

                entity.Property(e => e.PlanId).HasColumnName("PlanID");
            });

            modelBuilder.Entity<TblFarmerOutwardDt>(entity =>
            {
                entity.HasKey(e => e.PkId);

                entity.ToTable("tbl_FarmerOutwardDT");

                entity.Property(e => e.Date).HasColumnType("datetime");

                entity.Property(e => e.RecordNo).HasMaxLength(20);

                entity.Property(e => e.Unit).HasMaxLength(20);
            });

            modelBuilder.Entity<TblFarmerOutwardMt>(entity =>
            {
                entity.HasKey(e => e.RecordNo);

                entity.ToTable("tbl_FarmerOutwardMT");

                entity.Property(e => e.RecordNo)
                    .HasMaxLength(20)
                    .ValueGeneratedNever();

                entity.Property(e => e.Date).HasColumnType("datetime");

                entity.Property(e => e.PlanId).HasColumnName("PlanID");
            });

            modelBuilder.Entity<TblFeedSheduleMasterDt>(entity =>
            {
                entity.HasKey(e => e.PkId);

                entity.ToTable("tbl_FeedSheduleMasterDT");

                entity.Property(e => e.BirdAgeInDays).HasMaxLength(20);

                entity.Property(e => e.DailyFeedInGrams).HasMaxLength(20);
            });

            modelBuilder.Entity<TblFeedSheduleMasterMt>(entity =>
            {
                entity.HasKey(e => e.SrNo);

                entity.ToTable("tbl_FeedSheduleMasterMT");
            });

            modelBuilder.Entity<TblIncomeDeatils>(entity =>
            {
                entity.HasKey(e => e.RecordNo);

                entity.ToTable("tbl_IncomeDeatils");

                entity.Property(e => e.ChequeNo).HasMaxLength(20);

                entity.Property(e => e.Date).HasColumnType("datetime");

                entity.Property(e => e.Narration).HasMaxLength(20);

                entity.Property(e => e.PaymentMethod).HasMaxLength(20);

                entity.Property(e => e.Title).HasMaxLength(20);

                entity.Property(e => e.TypeOfIncome).HasMaxLength(20);
            });

            modelBuilder.Entity<TblLocationMaster>(entity =>
            {
                entity.HasKey(e => e.LocationId);

                entity.ToTable("tbl_LocationMaster");

                entity.Property(e => e.Address).HasMaxLength(50);

                entity.Property(e => e.BillingSeriesTo).HasMaxLength(20);

                entity.Property(e => e.BillinigSeriesfrom).HasMaxLength(20);

                entity.Property(e => e.ContactNo).HasMaxLength(20);

                entity.Property(e => e.LocationCode).HasMaxLength(20);

                entity.Property(e => e.LocationName).HasMaxLength(20);

                entity.Property(e => e.PinCode).HasMaxLength(20);

                entity.Property(e => e.Prefix).HasMaxLength(52);

                entity.Property(e => e.Remarks).HasMaxLength(30);

                entity.Property(e => e.VoucherType).HasMaxLength(52);
            });

            modelBuilder.Entity<TblMortalitywastageDt>(entity =>
            {
                entity.HasKey(e => e.PkId);

                entity.ToTable("tbl_MortalitywastageDT");

                entity.Property(e => e.Date).HasColumnType("datetime");

                entity.Property(e => e.Unit).HasMaxLength(20);
            });

            modelBuilder.Entity<TblMortalitywastageMt>(entity =>
            {
                entity.HasKey(e => e.RecordNo);

                entity.ToTable("tbl_MortalitywastageMT");

                entity.Property(e => e.Date).HasColumnType("datetime");

                entity.Property(e => e.Diseases).HasMaxLength(20);

                entity.Property(e => e.Pmdone)
                    .HasColumnName("PMDone")
                    .HasMaxLength(20);

                entity.Property(e => e.Reason).HasMaxLength(20);
            });

            modelBuilder.Entity<TblOfficeExpencesDetails>(entity =>
            {
                entity.HasKey(e => e.ExpencesNo);

                entity.ToTable("tbl_OfficeExpencesDetails");

                entity.Property(e => e.ChequeNo).HasMaxLength(20);

                entity.Property(e => e.Date).HasColumnType("datetime");

                entity.Property(e => e.Narration).HasMaxLength(20);

                entity.Property(e => e.PaymentMethod).HasMaxLength(20);
            });

            modelBuilder.Entity<TblPlanMaster>(entity =>
            {
                entity.HasKey(e => e.PlanId);

                entity.ToTable("tbl_PlanMaster");

                entity.Property(e => e.ChickAgeInDays).HasMaxLength(20);

                entity.Property(e => e.DurationInDays).HasMaxLength(20);

                entity.Property(e => e.NoOfChicks).HasMaxLength(20);

                entity.Property(e => e.PlanName).HasMaxLength(50);
            });

            modelBuilder.Entity<TblProductDescriptionMaster>(entity =>
            {
                entity.HasKey(e => e.ProductId);

                entity.ToTable("tbl_ProductDescriptionMaster");

                entity.Property(e => e.ProductName).HasMaxLength(20);
            });

            modelBuilder.Entity<TblProductMaster>(entity =>
            {
                entity.HasKey(e => e.PkId);

                entity.ToTable("tbl_ProductMaster");

                entity.Property(e => e.Cgst);

                entity.Property(e => e.Hsnsac).HasMaxLength(50);

                entity.Property(e => e.Igst);

                entity.Property(e => e.ProductType)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Sgst);

                entity.Property(e => e.Unit).HasMaxLength(50);
            });

            modelBuilder.Entity<TblPurchaseBillDt>(entity =>
            {
                entity.HasKey(e => e.PkId);

                entity.ToTable("tbl_PurchaseBillDT");

                entity.Property(e => e.BatchNo).HasMaxLength(20);

                entity.Property(e => e.BillDate).HasColumnType("datetime");

                entity.Property(e => e.BillNo).HasMaxLength(20);

                entity.Property(e => e.Cgstpercentage).HasColumnName("CGSTPercentage");

                entity.Property(e => e.Hsncode)
                    .HasColumnName("HSNCode")
                    .HasMaxLength(20);

                entity.Property(e => e.Igstpercentage).HasColumnName("IGSTPercentage");

                entity.Property(e => e.Mrp).HasColumnName("MRP");

                entity.Property(e => e.Sgstpercentage).HasColumnName("SGSTPercentage");

                entity.Property(e => e.TotalCgst).HasColumnName("TotalCGST");

                entity.Property(e => e.TotalIgst).HasColumnName("TotalIGST");

                entity.Property(e => e.TotalSgst).HasColumnName("TotalSGST");
            });

            modelBuilder.Entity<TblPurchaseBillMt>(entity =>
            {
                entity.HasKey(e => e.PkId);

                entity.ToTable("tbl_PurchaseBillMT");

                entity.Property(e => e.BatchNo).HasMaxLength(20);

                entity.Property(e => e.BillDate).HasColumnType("datetime");

                entity.Property(e => e.BillNo).HasMaxLength(20);

                entity.Property(e => e.Grndate)
                    .HasColumnName("GRNDate")
                    .HasColumnType("datetime");

                entity.Property(e => e.Narration).HasMaxLength(20);

                entity.Property(e => e.TotalCgstamt).HasColumnName("TotalCGSTAmt");

                entity.Property(e => e.TotalIgstamt).HasColumnName("TotalIGSTAmt");

                entity.Property(e => e.TotalSgstamt).HasColumnName("TotalSGSTAmt");

                entity.Property(e => e.TransportationGstamt).HasColumnName("TransportationGSTAmt");

                entity.Property(e => e.TransportationGstper).HasColumnName("TransportationGSTPer");
            });

            modelBuilder.Entity<TblPurchaseBillReturnDt>(entity =>
            {
                entity.HasKey(e => e.PkId);

                entity.ToTable("tbl_PurchaseBillReturnDT");

                entity.Property(e => e.BatchNo).HasMaxLength(20);

                entity.Property(e => e.BillDate).HasColumnType("datetime");

                entity.Property(e => e.BillNo).HasMaxLength(20);

                entity.Property(e => e.Cgstpercentage).HasColumnName("CGSTPercentage");

                entity.Property(e => e.Hsncode)
                    .HasColumnName("HSNCode")
                    .HasMaxLength(20);

                entity.Property(e => e.Igstpercentage).HasColumnName("IGSTPercentage");

                entity.Property(e => e.Mrp).HasColumnName("MRP");

                entity.Property(e => e.Sgstpercentage).HasColumnName("SGSTPercentage");

                entity.Property(e => e.TotalCgst).HasColumnName("TotalCGST");

                entity.Property(e => e.TotalIgst).HasColumnName("TotalIGST");

                entity.Property(e => e.TotalSgst).HasColumnName("TotalSGST");
            });

            modelBuilder.Entity<TblPurchaseBillReturnMt>(entity =>
            {
                entity.HasKey(e => e.PkId);

                entity.ToTable("tbl_PurchaseBillReturnMT");

                entity.Property(e => e.BatchNo).HasMaxLength(20);

                entity.Property(e => e.BillDate).HasColumnType("datetime");

                entity.Property(e => e.BillNo).HasMaxLength(20);

                entity.Property(e => e.Grndate)
                    .HasColumnName("GRNDate")
                    .HasColumnType("datetime");

                entity.Property(e => e.Narration).HasMaxLength(20);

                entity.Property(e => e.TotalCgstamt).HasColumnName("TotalCGSTAmt");

                entity.Property(e => e.TotalIgstamt).HasColumnName("TotalIGSTAmt");

                entity.Property(e => e.TotalSgstamt).HasColumnName("TotalSGSTAmt");

                entity.Property(e => e.TransportationGstamt).HasColumnName("TransportationGSTAmt");

                entity.Property(e => e.TransportationGstper).HasColumnName("TransportationGSTPer");
            });

            modelBuilder.Entity<TblPurchaseReturnReceipt>(entity =>
            {
                entity.HasKey(e => e.RecordNo);

                entity.ToTable("tbl_PurchaseReturnReceipt");

                entity.Property(e => e.ChequeNo).HasMaxLength(20);

                entity.Property(e => e.Date).HasColumnType("datetime");

                entity.Property(e => e.Narration).HasMaxLength(20);

                entity.Property(e => e.PaymentMethod).HasMaxLength(20);
            });

            modelBuilder.Entity<TblSalesBillDt>(entity =>
            {
                entity.HasKey(e => e.PkId);

                entity.ToTable("tbl_SalesBillDT");

                entity.Property(e => e.BillDate).HasColumnType("datetime");

                entity.Property(e => e.BillNo).HasMaxLength(20);
            });

            modelBuilder.Entity<TblSalesBillMt>(entity =>
            {
                entity.HasKey(e => e.PkId);

                entity.ToTable("tbl_SalesBillMT");

                entity.Property(e => e.Address).HasMaxLength(20);

                entity.Property(e => e.AdminChargesPer).HasColumnType("decimal(18, 0)");

                entity.Property(e => e.BillDate).HasColumnType("datetime");

                entity.Property(e => e.BillNo).HasMaxLength(20);

                entity.Property(e => e.ChequeNo).HasMaxLength(20);

                entity.Property(e => e.FromDate).HasColumnType("datetime");

                entity.Property(e => e.Narration).HasMaxLength(20);

                entity.Property(e => e.Note).HasMaxLength(50);

                entity.Property(e => e.PaymentMethod).HasMaxLength(20);

                entity.Property(e => e.PlaceOfSupply).HasMaxLength(20);

                entity.Property(e => e.Tdsamount).HasColumnName("TDSAmount");

                entity.Property(e => e.Tdspercentage).HasColumnName("TDSPercentage");

                entity.Property(e => e.ToDate).HasColumnType("datetime");

                entity.Property(e => e.TransportMode).HasMaxLength(20);

                entity.Property(e => e.VehicleNo).HasMaxLength(20);
            });

            modelBuilder.Entity<TblSalesReceipt>(entity =>
            {
                entity.HasKey(e => e.ReceiptNo);

                entity.ToTable("tbl_SalesReceipt");

                entity.Property(e => e.ChequeNo).HasMaxLength(20);

                entity.Property(e => e.Date).HasColumnType("datetime");

                entity.Property(e => e.Narration).HasMaxLength(20);

                entity.Property(e => e.PaymentMethod).HasMaxLength(20);

                entity.Property(e => e.PaymentType).HasMaxLength(20);
            });

            modelBuilder.Entity<TblShedMaster>(entity =>
            {
                entity.HasKey(e => e.ShedId);

                entity.ToTable("tbl_ShedMaster");

                entity.Property(e => e.ShedAgeInDays).HasMaxLength(20);

                entity.Property(e => e.ShedDaysToReapt).HasMaxLength(20);

                entity.Property(e => e.WorkDeatils).HasMaxLength(30);
            });

            modelBuilder.Entity<TblStockDetails>(entity =>
            {
                entity.HasKey(e => e.StockId);

                entity.ToTable("tbl_StockDetails");

                entity.Property(e => e.StockId).ValueGeneratedNever();

                entity.Property(e => e.CreditNoteNo).HasMaxLength(20);

                entity.Property(e => e.DebitNoteNo).HasMaxLength(20);

                entity.Property(e => e.InwardDocNo).HasMaxLength(20);

                entity.Property(e => e.OutwardDocNo).HasMaxLength(20);

                entity.Property(e => e.TranscationDate).HasColumnType("datetime");

                entity.Property(e => e.TranscationType).HasMaxLength(20);

                entity.Property(e => e.Unit).HasMaxLength(20);
            });

            modelBuilder.Entity<TblSupplierMaster>(entity =>
            {
                entity.HasKey(e => e.SupplierId);

                entity.ToTable("tbl_SupplierMaster");

                entity.Property(e => e.AccountNo).HasMaxLength(25);

                entity.Property(e => e.AccountType).HasMaxLength(20);

                entity.Property(e => e.Address).HasMaxLength(50);

                entity.Property(e => e.BankName).HasMaxLength(20);

                entity.Property(e => e.BranchName).HasMaxLength(20);

                entity.Property(e => e.City).HasMaxLength(20);

                entity.Property(e => e.ConatctPersonNo).HasMaxLength(20);

                entity.Property(e => e.ContactPerson).HasMaxLength(20);

                entity.Property(e => e.Designation).HasMaxLength(50);

                entity.Property(e => e.District).HasMaxLength(20);

                entity.Property(e => e.GstNo).HasMaxLength(20);

                entity.Property(e => e.IfscCode).HasMaxLength(20);

                entity.Property(e => e.MicrCode).HasMaxLength(20);

                entity.Property(e => e.PanNo).HasMaxLength(20);

                entity.Property(e => e.Pincode).HasMaxLength(10);

                entity.Property(e => e.PlantAddress).HasMaxLength(150);

                entity.Property(e => e.RegistrationNo).HasMaxLength(20);

                entity.Property(e => e.Remarks).HasMaxLength(50);

                entity.Property(e => e.State).HasMaxLength(20);

                entity.Property(e => e.SupplierMobileNo).HasMaxLength(50);

                entity.Property(e => e.SupplierName).HasMaxLength(50);

                entity.Property(e => e.Taluka).HasMaxLength(20);

                entity.Property(e => e.WebAddress).HasMaxLength(20);
            });

            modelBuilder.Entity<TblUnitMaster>(entity =>
            {
                entity.HasKey(e => e.UnitId);

                entity.ToTable("tbl_UnitMaster");

                entity.Property(e => e.UnitCode).HasMaxLength(20);

                entity.Property(e => e.UnitDescription).HasMaxLength(20);
            });

            modelBuilder.Entity<TblUserInfo>(entity =>
            {
                entity.HasKey(e => e.UserId);

                entity.ToTable("tbl_UserInfo");

                entity.Property(e => e.CreateDate).HasColumnType("datetime");

                entity.Property(e => e.UpdateDate).HasColumnType("datetime");

                entity.Property(e => e.UserEmail).HasMaxLength(50);

                entity.Property(e => e.UserType).HasMaxLength(50);

                entity.Property(e => e.Username).HasMaxLength(50);

                entity.Property(e => e.Userpassword).HasMaxLength(50);
            });
        }
    }
}
