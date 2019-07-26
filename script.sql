USE [master]
GO
/****** Object:  Database [ContractLayerDB]    Script Date: 07/22/2019 17:36:11 ******/
CREATE DATABASE [ContractLayerDB] ON  PRIMARY 
( NAME = N'ContractLayerDB12', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL10.SQLEXPRESS\MSSQL\DATA\ContractLayerDB.mdf' , SIZE = 3072KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'ContractLayerDB12_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL10.SQLEXPRESS\MSSQL\DATA\ContractLayerDB_log.ldf' , SIZE = 1024KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [ContractLayerDB] SET COMPATIBILITY_LEVEL = 100
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [ContractLayerDB].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [ContractLayerDB] SET ANSI_NULL_DEFAULT OFF
GO
ALTER DATABASE [ContractLayerDB] SET ANSI_NULLS OFF
GO
ALTER DATABASE [ContractLayerDB] SET ANSI_PADDING OFF
GO
ALTER DATABASE [ContractLayerDB] SET ANSI_WARNINGS OFF
GO
ALTER DATABASE [ContractLayerDB] SET ARITHABORT OFF
GO
ALTER DATABASE [ContractLayerDB] SET AUTO_CLOSE OFF
GO
ALTER DATABASE [ContractLayerDB] SET AUTO_CREATE_STATISTICS ON
GO
ALTER DATABASE [ContractLayerDB] SET AUTO_SHRINK OFF
GO
ALTER DATABASE [ContractLayerDB] SET AUTO_UPDATE_STATISTICS ON
GO
ALTER DATABASE [ContractLayerDB] SET CURSOR_CLOSE_ON_COMMIT OFF
GO
ALTER DATABASE [ContractLayerDB] SET CURSOR_DEFAULT  GLOBAL
GO
ALTER DATABASE [ContractLayerDB] SET CONCAT_NULL_YIELDS_NULL OFF
GO
ALTER DATABASE [ContractLayerDB] SET NUMERIC_ROUNDABORT OFF
GO
ALTER DATABASE [ContractLayerDB] SET QUOTED_IDENTIFIER OFF
GO
ALTER DATABASE [ContractLayerDB] SET RECURSIVE_TRIGGERS OFF
GO
ALTER DATABASE [ContractLayerDB] SET  DISABLE_BROKER
GO
ALTER DATABASE [ContractLayerDB] SET AUTO_UPDATE_STATISTICS_ASYNC OFF
GO
ALTER DATABASE [ContractLayerDB] SET DATE_CORRELATION_OPTIMIZATION OFF
GO
ALTER DATABASE [ContractLayerDB] SET TRUSTWORTHY OFF
GO
ALTER DATABASE [ContractLayerDB] SET ALLOW_SNAPSHOT_ISOLATION OFF
GO
ALTER DATABASE [ContractLayerDB] SET PARAMETERIZATION SIMPLE
GO
ALTER DATABASE [ContractLayerDB] SET READ_COMMITTED_SNAPSHOT OFF
GO
ALTER DATABASE [ContractLayerDB] SET HONOR_BROKER_PRIORITY OFF
GO
ALTER DATABASE [ContractLayerDB] SET  READ_WRITE
GO
ALTER DATABASE [ContractLayerDB] SET RECOVERY SIMPLE
GO
ALTER DATABASE [ContractLayerDB] SET  MULTI_USER
GO
ALTER DATABASE [ContractLayerDB] SET PAGE_VERIFY CHECKSUM
GO
ALTER DATABASE [ContractLayerDB] SET DB_CHAINING OFF
GO
USE [ContractLayerDB]
GO
/****** Object:  Table [dbo].[tbl_CompanyProfile]    Script Date: 07/22/2019 17:36:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_CompanyProfile](
	[ProfileId] [int] IDENTITY(1,1) NOT NULL,
	[CompanyName] [nvarchar](50) NULL,
	[PhoneNo] [nvarchar](52) NULL,
	[Address] [nvarchar](50) NULL,
	[EmailId] [nvarchar](20) NULL,
	[MobileNo] [nvarchar](20) NULL,
	[GstNo] [nvarchar](25) NULL,
	[CompanyLogo] [nvarchar](20) NULL,
	[ThankYouNote] [nvarchar](50) NULL,
 CONSTRAINT [PK_CompanyProfile] PRIMARY KEY CLUSTERED 
(
	[ProfileId] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_ExpenceTypeMaster]    Script Date: 07/22/2019 17:36:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_ExpenceTypeMaster](
	[ExpenceId] [int] IDENTITY(1,1) NOT NULL,
	[ExpenceType] [nvarchar](20) NULL,
	[IsDeleted] [bit] NULL,
 CONSTRAINT [PK_tbl_ExpenceTypeMaster] PRIMARY KEY CLUSTERED 
(
	[ExpenceId] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_EggsRangeMaster]    Script Date: 07/22/2019 17:36:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_EggsRangeMaster](
	[EggsRangeCode] [int] IDENTITY(1,1) NOT NULL,
	[EggsRangeFrom] [int] NULL,
	[EggsRangeTo] [int] NULL,
	[EggsRate] [decimal](18, 2) NULL,
 CONSTRAINT [PK_EggsRangeMaster] PRIMARY KEY CLUSTERED 
(
	[EggsRangeCode] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_LocationMaster]    Script Date: 07/22/2019 17:36:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_LocationMaster](
	[LocationId] [int] IDENTITY(1,1) NOT NULL,
	[LocationName] [nvarchar](20) NULL,
	[LocationCode] [nvarchar](20) NULL,
	[PinCode] [nvarchar](20) NULL,
	[Address] [nvarchar](50) NULL,
	[Remarks] [nvarchar](30) NULL,
	[ContactNo] [nvarchar](20) NULL,
	[VoucherType] [nvarchar](52) NULL,
	[Prefix] [nvarchar](52) NULL,
	[BillinigSeriesfrom] [nvarchar](20) NULL,
	[BillingSeriesTo] [nvarchar](20) NULL,
 CONSTRAINT [PK_LocationMaster] PRIMARY KEY CLUSTERED 
(
	[LocationId] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_ProductTypeMaster]    Script Date: 07/22/2019 17:36:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_ProductTypeMaster](
	[PkId] [int] IDENTITY(1,1) NOT NULL,
	[ProductId] [int] NOT NULL,
	[ProductType] [nvarchar](50) NOT NULL,
	[Hsnsac] [nvarchar](50) NULL,
	[Unit] [nvarchar](50) NULL,
	[PurchasePrice] [decimal](18, 2) NULL,
	[SellingPrice] [decimal](18, 2) NULL,
	[Cgst] [decimal](18, 2) NULL,
	[Sgst] [decimal](18, 2) NULL,
	[Igst] [decimal](18, 2) NULL,
	[MinimumQty] [decimal](18, 2) NULL,
	[OpeningStock] [decimal](18, 2) NULL,
 CONSTRAINT [PK_tbl_ProductMaster] PRIMARY KEY CLUSTERED 
(
	[ProductId] ASC,
	[ProductType] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_ProductMaster]    Script Date: 07/22/2019 17:36:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_ProductMaster](
	[ProductId] [int] IDENTITY(1,1) NOT NULL,
	[ProductName] [nvarchar](20) NULL,
 CONSTRAINT [PK_ProductDescriptionMaster] PRIMARY KEY CLUSTERED 
(
	[ProductId] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_PlanMaster]    Script Date: 07/22/2019 17:36:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_PlanMaster](
	[PlanId] [int] IDENTITY(1,1) NOT NULL,
	[PlanName] [nvarchar](50) NULL,
	[ChickAgeInDays] [nvarchar](20) NULL,
	[DurationInDays] [nvarchar](20) NULL,
	[NoOfChicks] [nvarchar](20) NULL,
	[EggsReturn] [int] NULL,
	[ChicksReturnRate] [decimal](18, 2) NULL,
	[Amount] [decimal](18, 2) NULL,
	[AdminCharges] [decimal](18, 2) NULL,
 CONSTRAINT [PK_PlanMaster] PRIMARY KEY CLUSTERED 
(
	[PlanId] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_Purchasepayment]    Script Date: 07/22/2019 17:36:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_Purchasepayment](
	[RecordNo] [int] IDENTITY(1,1) NOT NULL,
	[Date] [datetime] NULL,
	[LocationId] [int] NULL,
	[SupplierId] [int] NULL,
	[PaymentType] [nvarchar](20) NULL,
	[BillRefNo] [nvarchar](20) NULL,
	[PaymentMethod] [nvarchar](20) NULL,
	[ChequeNo] [nvarchar](20) NULL,
	[AmountPaid] [decimal](18, 2) NULL,
	[Narration] [nvarchar](20) NULL,
	[IsDeleted] [bit] NULL,
 CONSTRAINT [PK_tbl_Purchasepayment] PRIMARY KEY CLUSTERED 
(
	[RecordNo] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_HatcheryMaster]    Script Date: 07/22/2019 17:36:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_HatcheryMaster](
	[SrNo] [int] IDENTITY(1,1) NOT NULL,
	[HatcheryName] [nvarchar](50) NULL,
	[ContactPersonName] [nvarchar](50) NULL,
	[MobileNo] [nvarchar](20) NULL,
	[Address] [nvarchar](50) NULL,
	[LocationId] [int] NULL,
	[HatcheryRate] [decimal](18, 2) NULL,
	[Password] [nvarchar](50) NULL,
	[IsDeleted] [bit] NULL,
 CONSTRAINT [PK_tbl_HatcheryMaster] PRIMARY KEY CLUSTERED 
(
	[SrNo] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_ShedMaster]    Script Date: 07/22/2019 17:36:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_ShedMaster](
	[ShedId] [int] IDENTITY(1,1) NOT NULL,
	[WorkDeatils] [nvarchar](30) NULL,
	[ShedAgeInDays] [nvarchar](20) NULL,
	[ShedDaysToReapt] [nvarchar](20) NULL,
 CONSTRAINT [PK_ShedMaster] PRIMARY KEY CLUSTERED 
(
	[ShedId] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_UserInfo]    Script Date: 07/22/2019 17:36:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_UserInfo](
	[UserId] [int] IDENTITY(1,1) NOT NULL,
	[Username] [nvarchar](50) NULL,
	[Userpassword] [nvarchar](50) NULL,
	[UserEmail] [nvarchar](50) NULL,
	[UserType] [nvarchar](50) NULL,
	[CreateDate] [datetime] NULL,
	[UpdateDate] [datetime] NULL,
 CONSTRAINT [PK_UserInfo] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_UnitMaster]    Script Date: 07/22/2019 17:36:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_UnitMaster](
	[UnitId] [int] IDENTITY(1,1) NOT NULL,
	[UnitCode] [nvarchar](20) NULL,
	[UnitDescription] [nvarchar](20) NULL,
 CONSTRAINT [PK_UnitMaster] PRIMARY KEY CLUSTERED 
(
	[UnitId] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_SupplierMaster]    Script Date: 07/22/2019 17:36:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_SupplierMaster](
	[SupplierId] [int] IDENTITY(1,1) NOT NULL,
	[SupplierName] [nvarchar](50) NULL,
	[SupplierMobileNo] [nvarchar](50) NULL,
	[Address] [nvarchar](50) NULL,
	[PlantAddress] [nvarchar](150) NULL,
	[State] [nvarchar](20) NULL,
	[District] [nvarchar](20) NULL,
	[Taluka] [nvarchar](20) NULL,
	[City] [nvarchar](20) NULL,
	[Pincode] [nvarchar](10) NULL,
	[WebAddress] [nvarchar](20) NULL,
	[RegistrationNo] [nvarchar](20) NULL,
	[GstNo] [nvarchar](20) NULL,
	[PanNo] [nvarchar](20) NULL,
	[Remarks] [nvarchar](50) NULL,
	[ContactPerson] [nvarchar](20) NULL,
	[ConatctPersonNo] [nvarchar](20) NULL,
	[Designation] [nvarchar](50) NULL,
	[BankName] [nvarchar](20) NULL,
	[AccountNo] [nvarchar](25) NULL,
	[IfscCode] [nvarchar](20) NULL,
	[MicrCode] [nvarchar](20) NULL,
	[BranchName] [nvarchar](20) NULL,
	[AccountType] [nvarchar](20) NULL,
 CONSTRAINT [PK_SupplierMaster] PRIMARY KEY CLUSTERED 
(
	[SupplierId] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_StockDetails]    Script Date: 07/22/2019 17:36:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_StockDetails](
	[StockId] [int] NOT NULL,
	[InwardDocNo] [nvarchar](20) NULL,
	[OutwardDocNo] [nvarchar](20) NULL,
	[DebitNoteNo] [nvarchar](20) NULL,
	[CreditNoteNo] [nvarchar](20) NULL,
	[TranscationType] [nvarchar](20) NULL,
	[ProductId] [int] NULL,
	[ProductType] [nvarchar](50) NULL,
	[InwardQty] [decimal](18, 2) NULL,
	[OutwardQty] [decimal](18, 2) NULL,
	[TranscationDate] [datetime] NULL,
	[OpeningStock] [decimal](18, 2) NULL,
	[CreditNoteQty] [decimal](18, 2) NULL,
	[DebitNoteQty] [decimal](18, 2) NULL,
	[Unit] [nvarchar](20) NULL,
	[IsDelete] [bit] NULL,
 CONSTRAINT [PK_StockDetails] PRIMARY KEY CLUSTERED 
(
	[StockId] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_FeedSheduleMasterDT]    Script Date: 07/22/2019 17:36:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_FeedSheduleMasterDT](
	[PkId] [int] IDENTITY(1,1) NOT NULL,
	[SrNo] [int] NULL,
	[ProductId] [int] NULL,
	[ProductType] [nvarchar](50) NULL,
	[BirdAgeInDays] [nvarchar](20) NULL,
	[DailyFeedInGrams] [nvarchar](20) NULL,
	[IsDeleted] [bit] NULL,
 CONSTRAINT [PK_tbl_FeedSheduleMaster] PRIMARY KEY CLUSTERED 
(
	[PkId] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_PurchaseBillReturnMT]    Script Date: 07/22/2019 17:36:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_PurchaseBillReturnMT](
	[PkId] [int] NOT NULL,
	[BillId] [int] IDENTITY(1,1) NOT NULL,
	[BatchNo] [nvarchar](20) NULL,
	[BillNo] [nvarchar](20) NULL,
	[BillDate] [datetime] NULL,
	[GRNDate] [datetime] NULL,
	[LocationId] [int] NULL,
	[SupplierId] [int] NULL,
	[BeforeTaxAmt] [decimal](18, 2) NULL,
	[TransportationCost] [decimal](18, 2) NULL,
	[TransportationgstPer] [decimal](18, 2) NULL,
	[TransportationgstAmt] [decimal](18, 2) NULL,
	[TotalTransportAmt] [decimal](18, 2) NULL,
	[TotalCgstTAmt] [decimal](18, 2) NULL,
	[TotalSgstAmt] [decimal](18, 2) NULL,
	[TotalIgstAmt] [decimal](18, 2) NULL,
	[OtherCharges] [decimal](18, 2) NULL,
	[Roundoff] [decimal](18, 2) NULL,
	[GrandTotal] [decimal](18, 2) NULL,
	[Narration] [nvarchar](20) NULL,
	[IsDeleted] [bit] NULL,
 CONSTRAINT [PK_tbl_PurchaseBillReturnMT] PRIMARY KEY CLUSTERED 
(
	[BillId] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_IncomeDeatils]    Script Date: 07/22/2019 17:36:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_IncomeDeatils](
	[RecordNo] [int] IDENTITY(1,1) NOT NULL,
	[Date] [datetime] NULL,
	[LocationId] [int] NULL,
	[TypeOfIncome] [nvarchar](20) NULL,
	[Title] [nvarchar](20) NULL,
	[PaymentMethod] [nvarchar](20) NULL,
	[ChequeNo] [nvarchar](20) NULL,
	[Amount] [decimal](18, 2) NULL,
	[Narration] [nvarchar](20) NULL,
	[IsDeleted] [bit] NULL,
 CONSTRAINT [PK_tbl_IncomeDeatils] PRIMARY KEY CLUSTERED 
(
	[RecordNo] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_CustomerMaster]    Script Date: 07/22/2019 17:36:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_CustomerMaster](
	[CustomerId] [int] IDENTITY(1,1) NOT NULL,
	[CustmerName] [nvarchar](50) NULL,
	[CustomerMobileNo] [nvarchar](50) NULL,
	[Address] [nvarchar](50) NULL,
	[PlantAddress] [nvarchar](150) NULL,
	[State] [nvarchar](20) NULL,
	[District] [nvarchar](20) NULL,
	[Taluka] [nvarchar](20) NULL,
	[City] [nvarchar](20) NULL,
	[Pincode] [nvarchar](10) NULL,
	[LocationId] [int] NULL,
	[GstNo] [nvarchar](20) NULL,
	[PanNo] [nvarchar](20) NULL,
	[ContactPerson] [nvarchar](20) NULL,
	[ConatctPersonNo] [nvarchar](20) NULL,
	[Designation] [nvarchar](50) NULL,
	[BankName] [nvarchar](20) NULL,
	[AccountNo] [nvarchar](25) NULL,
	[IfscCode] [nvarchar](20) NULL,
	[MicrCode] [nvarchar](20) NULL,
	[BranchName] [nvarchar](20) NULL,
	[AccountType] [nvarchar](20) NULL,
	[IsDeleted] [bit] NULL,
 CONSTRAINT [PK_CutstomerMaster] PRIMARY KEY CLUSTERED 
(
	[CustomerId] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_EnquiryDetails]    Script Date: 07/22/2019 17:36:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_EnquiryDetails](
	[RecordNo] [int] IDENTITY(1,1) NOT NULL,
	[Date] [datetime] NULL,
	[CustomerName] [nvarchar](20) NULL,
	[Enquiry] [nvarchar](20) NULL,
	[RequiredQty] [decimal](18, 2) NULL,
	[District] [nvarchar](20) NULL,
	[Taluka] [nvarchar](20) NULL,
	[City] [nvarchar](20) NULL,
	[PinCode] [int] NULL,
	[MobileNo] [int] NULL,
	[Address] [nvarchar](20) NULL,
	[RemindDate] [datetime] NULL,
	[EnquiryType] [nvarchar](20) NULL,
	[Narration] [nvarchar](20) NULL,
	[LocationId] [int] NULL,
	[IsDeleted] [bit] NULL,
 CONSTRAINT [PK_tbl_EnquiryDetails] PRIMARY KEY CLUSTERED 
(
	[RecordNo] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_EmployeeMaster]    Script Date: 07/22/2019 17:36:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_EmployeeMaster](
	[EmployeeId] [int] IDENTITY(1,1) NOT NULL,
	[EmployeeName] [nvarchar](50) NULL,
	[Address] [nvarchar](20) NULL,
	[EducationDetails] [nvarchar](20) NULL,
	[PastWorkExp] [nvarchar](20) NULL,
	[PersonalContactNo] [nvarchar](20) NULL,
	[PanCardNo] [nvarchar](20) NULL,
	[AadharId] [nvarchar](20) NULL,
	[VoterId] [nvarchar](20) NULL,
	[BloodGroup] [nvarchar](10) NULL,
	[MaritialStatus] [nvarchar](15) NULL,
	[Salary] [nvarchar](20) NULL,
	[DateOfJoining] [datetime] NULL,
	[DateOfLeaving] [datetime] NULL,
	[Role] [nvarchar](20) NULL,
	[LocationId] [int] NULL,
	[UserId] [nvarchar](20) NULL,
	[Password] [nvarchar](20) NULL,
	[CompanyMobileNo] [nvarchar](15) NULL,
	[Post] [nvarchar](20) NULL,
	[Remarks] [nvarchar](50) NULL,
	[District] [nvarchar](20) NULL,
	[Taluka] [nvarchar](20) NULL,
	[City] [nvarchar](20) NULL,
	[EmergencyContactName] [nvarchar](20) NULL,
	[EmergencyNo] [nvarchar](20) NULL,
	[Relation] [nvarchar](20) NULL,
	[BankName] [nvarchar](20) NULL,
	[AccountNo] [nvarchar](20) NULL,
	[IfscCode] [nvarchar](20) NULL,
	[MicrCode] [nvarchar](20) NULL,
	[BranchName] [nvarchar](20) NULL,
	[AccountType] [nvarchar](20) NULL,
 CONSTRAINT [PK_EmployeeMaster] PRIMARY KEY CLUSTERED 
(
	[EmployeeId] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_EmployeeAdvance]    Script Date: 07/22/2019 17:36:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_EmployeeAdvance](
	[RecordNo] [int] IDENTITY(1,1) NOT NULL,
	[RecordDate] [datetime] NULL,
	[LocationId] [int] NULL,
	[Advance] [decimal](18, 2) NULL,
	[Narration] [nvarchar](50) NULL,
	[EmployeeId] [int] NULL,
 CONSTRAINT [PK_tbl_EmployeeAdvance] PRIMARY KEY CLUSTERED 
(
	[RecordNo] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_PurchaseReturnReceipt]    Script Date: 07/22/2019 17:36:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_PurchaseReturnReceipt](
	[RecordNo] [int] IDENTITY(1,1) NOT NULL,
	[Date] [datetime] NULL,
	[LocationId] [int] NULL,
	[SupplierId] [int] NULL,
	[PaymentMethod] [nvarchar](20) NULL,
	[ChequeNo] [nvarchar](20) NULL,
	[AmountReceived] [decimal](18, 2) NULL,
	[Narration] [nvarchar](20) NULL,
	[IsDeleted] [bit] NULL,
 CONSTRAINT [PK_tbl_PurchaseReturnReceipt] PRIMARY KEY CLUSTERED 
(
	[RecordNo] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_PurchaseBillMT]    Script Date: 07/22/2019 17:36:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_PurchaseBillMT](
	[PkId] [int] NOT NULL,
	[BillId] [int] IDENTITY(1,1) NOT NULL,
	[BatchNo] [nvarchar](20) NULL,
	[BillNo] [nvarchar](20) NULL,
	[BillDate] [datetime] NULL,
	[GRNDate] [datetime] NULL,
	[LocationId] [int] NULL,
	[SupplierId] [int] NULL,
	[BeforeTaxAmt] [decimal](18, 2) NULL,
	[TransportationCost] [decimal](18, 2) NULL,
	[TransportationGSTPer] [decimal](18, 2) NULL,
	[TransportationGSTAmt] [decimal](18, 2) NULL,
	[TotalTransportAmt] [decimal](18, 2) NULL,
	[TotalCGSTAmt] [decimal](18, 2) NULL,
	[TotalSGSTAmt] [decimal](18, 2) NULL,
	[TotalIGSTAmt] [decimal](18, 2) NULL,
	[OtherCharges] [decimal](18, 2) NULL,
	[Roundoff] [decimal](18, 2) NULL,
	[GrandTotal] [decimal](18, 2) NULL,
	[Narration] [nvarchar](20) NULL,
	[IsDeleted] [bit] NULL,
 CONSTRAINT [PK_tbl_PurchaseBillMT] PRIMARY KEY CLUSTERED 
(
	[BillId] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_PurchaseBillDT]    Script Date: 07/22/2019 17:36:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_PurchaseBillDT](
	[PkId] [int] IDENTITY(1,1) NOT NULL,
	[BillId] [int] NOT NULL,
	[BatchNo] [nvarchar](20) NULL,
	[BillNo] [nvarchar](20) NULL,
	[BillDate] [datetime] NULL,
	[ProductId] [int] NULL,
	[ProductType] [nvarchar](50) NULL,
	[HsnCode] [nvarchar](20) NULL,
	[Quantity] [decimal](18, 2) NULL,
	[Rate] [decimal](18, 2) NULL,
	[Mrp] [decimal](18, 2) NULL,
	[Discount] [decimal](18, 2) NULL,
	[TaxableAmt] [decimal](18, 2) NULL,
	[CgstPercentage] [decimal](18, 2) NULL,
	[SgstPercentage] [decimal](18, 2) NULL,
	[IgstPercentage] [decimal](18, 2) NULL,
	[TotalCgst] [decimal](18, 2) NULL,
	[TotalSgst] [decimal](18, 2) NULL,
	[TotalIgst] [decimal](18, 2) NULL,
	[TotalAmount] [decimal](18, 2) NULL,
	[IsDeleted] [bit] NULL,
 CONSTRAINT [PK_tbl_PurchaseBillDT] PRIMARY KEY CLUSTERED 
(
	[PkId] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_BookingMaster]    Script Date: 07/22/2019 17:36:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_BookingMaster](
	[RecordNo] [int] IDENTITY(1,1) NOT NULL,
	[LocationId] [int] NULL,
	[CustomerId] [int] NULL,
	[BookingDate] [datetime] NULL,
	[MobileNo] [nvarchar](20) NULL,
	[PlanId] [int] NULL,
	[NoOfPlan] [int] NULL,
	[NoOfChicks] [int] NULL,
	[NoOfPlanCancel] [int] NULL,
	[Amount] [decimal](18, 2) NULL,
	[EmployeeId] [int] NULL,
	[EnquiryRef] [nvarchar](20) NULL,
	[Agreement] [nvarchar](20) NULL,
	[EggsLiability] [decimal](18, 2) NULL,
	[PaymentMethod] [nvarchar](20) NULL,
	[ChequeNo] [nvarchar](20) NULL,
	[PaidAmount] [decimal](18, 2) NULL,
	[BalanceAmount] [decimal](18, 2) NULL,
	[Narration] [nvarchar](20) NULL,
	[DeliveryStatus] [nvarchar](20) NULL,
	[IsDeleted] [bit] NULL,
 CONSTRAINT [PK_BookingMaster_1] PRIMARY KEY CLUSTERED 
(
	[RecordNo] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_BookingCancelMaster]    Script Date: 07/22/2019 17:36:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_BookingCancelMaster](
	[RecordNo] [int] IDENTITY(1,1) NOT NULL,
	[LocationId] [int] NULL,
	[CustomerId] [int] NULL,
	[BookungCancelDate] [datetime] NULL,
	[PlanId] [int] NULL,
	[NoOfPlan] [int] NULL,
	[NoOfChicks] [int] NULL,
	[Amonut] [decimal](18, 2) NULL,
	[CancelNoOfPlan] [int] NULL,
	[CancelNoOfChicks] [int] NULL,
	[CancelAmount] [decimal](18, 2) NULL,
	[PaymentMethod] [nvarchar](20) NULL,
	[ChequeNo] [nvarchar](20) NULL,
	[PaidAmount] [decimal](18, 2) NULL,
	[Narration] [nvarchar](20) NULL,
	[IsDeleted] [bit] NULL,
 CONSTRAINT [PK_BookingCancelMaster_1] PRIMARY KEY CLUSTERED 
(
	[RecordNo] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_FarmerInwardMT]    Script Date: 07/22/2019 17:36:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_FarmerInwardMT](
	[RecordNo] [int] IDENTITY(1,1) NOT NULL,
	[Date] [datetime] NOT NULL,
	[LocationId] [int] NOT NULL,
	[CustomerId] [int] NOT NULL,
	[PlanID] [int] NOT NULL,
	[IsDeleted] [bit] NULL,
 CONSTRAINT [PK_tbl_FarmerInwardMT] PRIMARY KEY CLUSTERED 
(
	[RecordNo] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_OfficeExpencesDetails]    Script Date: 07/22/2019 17:36:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_OfficeExpencesDetails](
	[ExpencesNo] [int] IDENTITY(1,1) NOT NULL,
	[Date] [datetime] NULL,
	[ExpenceId] [int] NULL,
	[LocationId] [int] NULL,
	[EmployeeId] [int] NULL,
	[PaymentMethod] [nvarchar](20) NULL,
	[ChequeNo] [nvarchar](20) NULL,
	[Amount] [decimal](18, 2) NULL,
	[Narration] [nvarchar](20) NULL,
	[IsDeleted] [bit] NULL,
 CONSTRAINT [PK_tbl_OfficeExpencesDetails] PRIMARY KEY CLUSTERED 
(
	[ExpencesNo] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_MortalitywastageMT]    Script Date: 07/22/2019 17:36:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_MortalitywastageMT](
	[RecordNo] [int] IDENTITY(1,1) NOT NULL,
	[Date] [datetime] NULL,
	[LocationId] [int] NULL,
	[CustomerId] [int] NULL,
	[Reason] [nvarchar](20) NULL,
	[PmDone] [nvarchar](20) NULL,
	[EmployeeId] [int] NULL,
	[Diseases] [nvarchar](20) NULL,
	[PlanId] [int] NULL,
	[IsDeleted] [bit] NULL,
 CONSTRAINT [PK_tbl_MortalitywastageDetails] PRIMARY KEY CLUSTERED 
(
	[RecordNo] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_PurchaseBillReturnDT]    Script Date: 07/22/2019 17:36:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_PurchaseBillReturnDT](
	[PkId] [int] IDENTITY(1,1) NOT NULL,
	[BillId] [int] NOT NULL,
	[BatchNo] [nvarchar](20) NULL,
	[BillNo] [nvarchar](20) NULL,
	[BillDate] [datetime] NULL,
	[ProductId] [int] NULL,
	[ProductType] [nvarchar](50) NULL,
	[HsnCode] [nvarchar](20) NULL,
	[Quantity] [decimal](18, 2) NULL,
	[RejectedQty] [decimal](18, 2) NULL,
	[Rate] [decimal](18, 2) NULL,
	[Mrp] [decimal](18, 2) NULL,
	[Discount] [decimal](18, 2) NULL,
	[TaxableAmt] [decimal](18, 2) NULL,
	[CgstPercentage] [decimal](18, 2) NULL,
	[SgstPercentage] [decimal](18, 2) NULL,
	[IgstPercentage] [decimal](18, 2) NULL,
	[TotalCgst] [decimal](18, 2) NULL,
	[TotalSgst] [decimal](18, 2) NULL,
	[TotalIgst] [decimal](18, 2) NULL,
	[TotalAmount] [decimal](18, 2) NULL,
	[IsDeleted] [bit] NULL,
 CONSTRAINT [PK_tbl_PurchaseBillReturnDT] PRIMARY KEY CLUSTERED 
(
	[PkId] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_FarmerOutwardMT]    Script Date: 07/22/2019 17:36:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_FarmerOutwardMT](
	[RecordNo] [int] IDENTITY(1,1) NOT NULL,
	[Date] [datetime] NOT NULL,
	[LocationId] [int] NOT NULL,
	[CustomerId] [int] NOT NULL,
	[PlanID] [int] NOT NULL,
	[IsDeleted] [bit] NULL,
 CONSTRAINT [PK_tbl_FarmerOutwardMT] PRIMARY KEY CLUSTERED 
(
	[RecordNo] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_SalesReceipt]    Script Date: 07/22/2019 17:36:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_SalesReceipt](
	[ReceiptNo] [int] IDENTITY(1,1) NOT NULL,
	[Date] [datetime] NULL,
	[LocationId] [int] NULL,
	[CustomerId] [int] NULL,
	[PaymentType] [nvarchar](20) NULL,
	[BillRefNo] [nvarchar](20) NULL,
	[PaymentMethod] [nvarchar](20) NULL,
	[ChequeNo] [nvarchar](20) NULL,
	[ChequeAmount] [decimal](18, 2) NULL,
	[CashAmount] [decimal](18, 2) NULL,
	[Narration] [nvarchar](20) NULL,
	[IsDeleted] [bit] NULL,
 CONSTRAINT [PK_tbl_SalesReceipt] PRIMARY KEY CLUSTERED 
(
	[ReceiptNo] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_SalesBillMT]    Script Date: 07/22/2019 17:36:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_SalesBillMT](
	[BillId] [int] IDENTITY(1,1) NOT NULL,
	[BillNo] [nvarchar](20) NOT NULL,
	[BillDate] [datetime] NULL,
	[LocationId] [int] NULL,
	[CustomerId] [int] NULL,
	[OutstandingAmt] [decimal](18, 2) NULL,
	[BookingDueAmt] [decimal](18, 2) NULL,
	[TransportMode] [nvarchar](20) NULL,
	[VehicleNo] [nvarchar](20) NULL,
	[PlaceOfSupply] [nvarchar](20) NULL,
	[Address] [nvarchar](20) NULL,
	[FromDate] [datetime] NULL,
	[ToDate] [datetime] NULL,
	[TotalAmount] [decimal](18, 2) NULL,
	[TdsPercentage] [decimal](18, 2) NULL,
	[TdsAmount] [decimal](18, 2) NULL,
	[AdminChargesPer] [decimal](18, 0) NULL,
	[AdminChargesAmt] [decimal](18, 2) NULL,
	[OtherCharges] [decimal](18, 2) NULL,
	[GrandTotal] [decimal](18, 2) NULL,
	[PaymentMethod] [nvarchar](20) NULL,
	[ChequeNo] [nvarchar](20) NULL,
	[ChequeAmt] [decimal](18, 2) NULL,
	[CashAmount] [decimal](18, 2) NULL,
	[Narration] [nvarchar](20) NULL,
	[Note] [nvarchar](50) NULL,
	[IsDeleted] [bit] NULL,
 CONSTRAINT [PK_tbl_SalesBillMT] PRIMARY KEY CLUSTERED 
(
	[BillId] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_SalesBillDT]    Script Date: 07/22/2019 17:36:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_SalesBillDT](
	[PkId] [int] IDENTITY(1,1) NOT NULL,
	[BillId] [int] NOT NULL,
	[BillNo] [nvarchar](20) NULL,
	[BillDate] [datetime] NULL,
	[ProductId] [int] NULL,
	[ProductType] [nvarchar](50) NULL,
	[Unit] [nvarchar](20) NULL,
	[Quantity] [decimal](18, 2) NULL,
	[Rate] [decimal](18, 2) NULL,
	[Amount] [decimal](18, 2) NULL,
	[IsDeleted] [bit] NULL,
 CONSTRAINT [PK_tbl_SalesBillDT] PRIMARY KEY CLUSTERED 
(
	[PkId] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_FarmerOutwardDT]    Script Date: 07/22/2019 17:36:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_FarmerOutwardDT](
	[PkId] [int] IDENTITY(1,1) NOT NULL,
	[RecordNo] [int] NULL,
	[Date] [datetime] NULL,
	[ProductId] [int] NULL,
	[Unit] [nvarchar](20) NULL,
	[Quantity] [decimal](18, 2) NULL,
	[IsDeleted] [bit] NULL,
 CONSTRAINT [PK_tbl_FarmerOutwardDT] PRIMARY KEY CLUSTERED 
(
	[PkId] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_MortalitywastageDT]    Script Date: 07/22/2019 17:36:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_MortalitywastageDT](
	[PkId] [int] IDENTITY(1,1) NOT NULL,
	[RecordNo] [int] NULL,
	[Date] [datetime] NULL,
	[ProductId] [int] NULL,
	[ProductType] [nvarchar](50) NULL,
	[Unit] [nvarchar](20) NULL,
	[Quantity] [decimal](18, 2) NULL,
	[IsDeleted] [bit] NULL,
 CONSTRAINT [PK_tbl_MortalitywastageDT] PRIMARY KEY CLUSTERED 
(
	[PkId] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_FarmerInwardDT]    Script Date: 07/22/2019 17:36:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_FarmerInwardDT](
	[PkId] [int] IDENTITY(1,1) NOT NULL,
	[RecordNo] [int] NOT NULL,
	[Date] [datetime] NOT NULL,
	[ProductId] [int] NOT NULL,
	[Unit] [nvarchar](20) NOT NULL,
	[Quantity] [decimal](18, 2) NOT NULL,
	[IsDeleted] [bit] NULL,
 CONSTRAINT [PK_tbl_FarmerInwardDT_1] PRIMARY KEY CLUSTERED 
(
	[PkId] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  ForeignKey [FK_tbl_StockDetails_tbl_Product]    Script Date: 07/22/2019 17:36:12 ******/
ALTER TABLE [dbo].[tbl_StockDetails]  WITH CHECK ADD  CONSTRAINT [FK_tbl_StockDetails_tbl_Product] FOREIGN KEY([ProductId], [ProductType])
REFERENCES [dbo].[tbl_ProductTypeMaster] ([ProductId], [ProductType])
GO
ALTER TABLE [dbo].[tbl_StockDetails] CHECK CONSTRAINT [FK_tbl_StockDetails_tbl_Product]
GO
/****** Object:  ForeignKey [FK_tbl_FeedSheduleMasterDT_tbl_ProductType]    Script Date: 07/22/2019 17:36:12 ******/
ALTER TABLE [dbo].[tbl_FeedSheduleMasterDT]  WITH CHECK ADD  CONSTRAINT [FK_tbl_FeedSheduleMasterDT_tbl_ProductType] FOREIGN KEY([ProductId], [ProductType])
REFERENCES [dbo].[tbl_ProductTypeMaster] ([ProductId], [ProductType])
GO
ALTER TABLE [dbo].[tbl_FeedSheduleMasterDT] CHECK CONSTRAINT [FK_tbl_FeedSheduleMasterDT_tbl_ProductType]
GO
/****** Object:  ForeignKey [FK_tbl_PurchaseBillReturnMT_tbl_LocationId]    Script Date: 07/22/2019 17:36:12 ******/
ALTER TABLE [dbo].[tbl_PurchaseBillReturnMT]  WITH CHECK ADD  CONSTRAINT [FK_tbl_PurchaseBillReturnMT_tbl_LocationId] FOREIGN KEY([LocationId])
REFERENCES [dbo].[tbl_LocationMaster] ([LocationId])
GO
ALTER TABLE [dbo].[tbl_PurchaseBillReturnMT] CHECK CONSTRAINT [FK_tbl_PurchaseBillReturnMT_tbl_LocationId]
GO
/****** Object:  ForeignKey [FK_tbl_PurchaseBillReturnMT_tbl_SupplierId]    Script Date: 07/22/2019 17:36:12 ******/
ALTER TABLE [dbo].[tbl_PurchaseBillReturnMT]  WITH CHECK ADD  CONSTRAINT [FK_tbl_PurchaseBillReturnMT_tbl_SupplierId] FOREIGN KEY([SupplierId])
REFERENCES [dbo].[tbl_SupplierMaster] ([SupplierId])
GO
ALTER TABLE [dbo].[tbl_PurchaseBillReturnMT] CHECK CONSTRAINT [FK_tbl_PurchaseBillReturnMT_tbl_SupplierId]
GO
/****** Object:  ForeignKey [FK_tbl_IncomeDeatils_tbl_Location]    Script Date: 07/22/2019 17:36:12 ******/
ALTER TABLE [dbo].[tbl_IncomeDeatils]  WITH CHECK ADD  CONSTRAINT [FK_tbl_IncomeDeatils_tbl_Location] FOREIGN KEY([LocationId])
REFERENCES [dbo].[tbl_LocationMaster] ([LocationId])
GO
ALTER TABLE [dbo].[tbl_IncomeDeatils] CHECK CONSTRAINT [FK_tbl_IncomeDeatils_tbl_Location]
GO
/****** Object:  ForeignKey [FK_tbl_CustomerMaster_tbl_Location]    Script Date: 07/22/2019 17:36:12 ******/
ALTER TABLE [dbo].[tbl_CustomerMaster]  WITH CHECK ADD  CONSTRAINT [FK_tbl_CustomerMaster_tbl_Location] FOREIGN KEY([LocationId])
REFERENCES [dbo].[tbl_LocationMaster] ([LocationId])
GO
ALTER TABLE [dbo].[tbl_CustomerMaster] CHECK CONSTRAINT [FK_tbl_CustomerMaster_tbl_Location]
GO
/****** Object:  ForeignKey [FK_tbl_EnquiryDetails_tbl_Location]    Script Date: 07/22/2019 17:36:12 ******/
ALTER TABLE [dbo].[tbl_EnquiryDetails]  WITH CHECK ADD  CONSTRAINT [FK_tbl_EnquiryDetails_tbl_Location] FOREIGN KEY([LocationId])
REFERENCES [dbo].[tbl_LocationMaster] ([LocationId])
GO
ALTER TABLE [dbo].[tbl_EnquiryDetails] CHECK CONSTRAINT [FK_tbl_EnquiryDetails_tbl_Location]
GO
/****** Object:  ForeignKey [FK_tbl_EmployeeMaster_tbl_Location]    Script Date: 07/22/2019 17:36:12 ******/
ALTER TABLE [dbo].[tbl_EmployeeMaster]  WITH CHECK ADD  CONSTRAINT [FK_tbl_EmployeeMaster_tbl_Location] FOREIGN KEY([LocationId])
REFERENCES [dbo].[tbl_LocationMaster] ([LocationId])
GO
ALTER TABLE [dbo].[tbl_EmployeeMaster] CHECK CONSTRAINT [FK_tbl_EmployeeMaster_tbl_Location]
GO
/****** Object:  ForeignKey [FK_tbl_EmployeeAdvance_tbl_Location]    Script Date: 07/22/2019 17:36:12 ******/
ALTER TABLE [dbo].[tbl_EmployeeAdvance]  WITH CHECK ADD  CONSTRAINT [FK_tbl_EmployeeAdvance_tbl_Location] FOREIGN KEY([LocationId])
REFERENCES [dbo].[tbl_LocationMaster] ([LocationId])
GO
ALTER TABLE [dbo].[tbl_EmployeeAdvance] CHECK CONSTRAINT [FK_tbl_EmployeeAdvance_tbl_Location]
GO
/****** Object:  ForeignKey [FK_tbl_PurchaseReturnReceipt_tbl_Location]    Script Date: 07/22/2019 17:36:12 ******/
ALTER TABLE [dbo].[tbl_PurchaseReturnReceipt]  WITH CHECK ADD  CONSTRAINT [FK_tbl_PurchaseReturnReceipt_tbl_Location] FOREIGN KEY([LocationId])
REFERENCES [dbo].[tbl_LocationMaster] ([LocationId])
GO
ALTER TABLE [dbo].[tbl_PurchaseReturnReceipt] CHECK CONSTRAINT [FK_tbl_PurchaseReturnReceipt_tbl_Location]
GO
/****** Object:  ForeignKey [FK_tbl_PurchaseReturnReceipt_tbl_Supplier]    Script Date: 07/22/2019 17:36:12 ******/
ALTER TABLE [dbo].[tbl_PurchaseReturnReceipt]  WITH CHECK ADD  CONSTRAINT [FK_tbl_PurchaseReturnReceipt_tbl_Supplier] FOREIGN KEY([SupplierId])
REFERENCES [dbo].[tbl_SupplierMaster] ([SupplierId])
GO
ALTER TABLE [dbo].[tbl_PurchaseReturnReceipt] CHECK CONSTRAINT [FK_tbl_PurchaseReturnReceipt_tbl_Supplier]
GO
/****** Object:  ForeignKey [FK_tbl_PurchaseBillMT_tbl_Location]    Script Date: 07/22/2019 17:36:12 ******/
ALTER TABLE [dbo].[tbl_PurchaseBillMT]  WITH CHECK ADD  CONSTRAINT [FK_tbl_PurchaseBillMT_tbl_Location] FOREIGN KEY([LocationId])
REFERENCES [dbo].[tbl_LocationMaster] ([LocationId])
GO
ALTER TABLE [dbo].[tbl_PurchaseBillMT] CHECK CONSTRAINT [FK_tbl_PurchaseBillMT_tbl_Location]
GO
/****** Object:  ForeignKey [FK_tbl_PurchaseBillMT_tbl_Supplier]    Script Date: 07/22/2019 17:36:12 ******/
ALTER TABLE [dbo].[tbl_PurchaseBillMT]  WITH CHECK ADD  CONSTRAINT [FK_tbl_PurchaseBillMT_tbl_Supplier] FOREIGN KEY([SupplierId])
REFERENCES [dbo].[tbl_SupplierMaster] ([SupplierId])
GO
ALTER TABLE [dbo].[tbl_PurchaseBillMT] CHECK CONSTRAINT [FK_tbl_PurchaseBillMT_tbl_Supplier]
GO
/****** Object:  ForeignKey [FK_tbl_PurchaseBillDT_tbl_BillId]    Script Date: 07/22/2019 17:36:12 ******/
ALTER TABLE [dbo].[tbl_PurchaseBillDT]  WITH CHECK ADD  CONSTRAINT [FK_tbl_PurchaseBillDT_tbl_BillId] FOREIGN KEY([BillId])
REFERENCES [dbo].[tbl_PurchaseBillMT] ([BillId])
GO
ALTER TABLE [dbo].[tbl_PurchaseBillDT] CHECK CONSTRAINT [FK_tbl_PurchaseBillDT_tbl_BillId]
GO
/****** Object:  ForeignKey [FK_tbl_PurchaseBillDT_tbl_ProductId]    Script Date: 07/22/2019 17:36:12 ******/
ALTER TABLE [dbo].[tbl_PurchaseBillDT]  WITH CHECK ADD  CONSTRAINT [FK_tbl_PurchaseBillDT_tbl_ProductId] FOREIGN KEY([ProductId], [ProductType])
REFERENCES [dbo].[tbl_ProductTypeMaster] ([ProductId], [ProductType])
GO
ALTER TABLE [dbo].[tbl_PurchaseBillDT] CHECK CONSTRAINT [FK_tbl_PurchaseBillDT_tbl_ProductId]
GO
/****** Object:  ForeignKey [FK_tbl_BookingMaster_tbl_Customer]    Script Date: 07/22/2019 17:36:12 ******/
ALTER TABLE [dbo].[tbl_BookingMaster]  WITH CHECK ADD  CONSTRAINT [FK_tbl_BookingMaster_tbl_Customer] FOREIGN KEY([CustomerId])
REFERENCES [dbo].[tbl_CustomerMaster] ([CustomerId])
GO
ALTER TABLE [dbo].[tbl_BookingMaster] CHECK CONSTRAINT [FK_tbl_BookingMaster_tbl_Customer]
GO
/****** Object:  ForeignKey [FK_tbl_BookingMaster_tbl_Location]    Script Date: 07/22/2019 17:36:12 ******/
ALTER TABLE [dbo].[tbl_BookingMaster]  WITH CHECK ADD  CONSTRAINT [FK_tbl_BookingMaster_tbl_Location] FOREIGN KEY([LocationId])
REFERENCES [dbo].[tbl_LocationMaster] ([LocationId])
GO
ALTER TABLE [dbo].[tbl_BookingMaster] CHECK CONSTRAINT [FK_tbl_BookingMaster_tbl_Location]
GO
/****** Object:  ForeignKey [FK_tbl_BookingMaster_tbl_Plan]    Script Date: 07/22/2019 17:36:12 ******/
ALTER TABLE [dbo].[tbl_BookingMaster]  WITH CHECK ADD  CONSTRAINT [FK_tbl_BookingMaster_tbl_Plan] FOREIGN KEY([PlanId])
REFERENCES [dbo].[tbl_PlanMaster] ([PlanId])
GO
ALTER TABLE [dbo].[tbl_BookingMaster] CHECK CONSTRAINT [FK_tbl_BookingMaster_tbl_Plan]
GO
/****** Object:  ForeignKey [FK_tbl_BookingCancelMaster_tbl_Customer]    Script Date: 07/22/2019 17:36:12 ******/
ALTER TABLE [dbo].[tbl_BookingCancelMaster]  WITH CHECK ADD  CONSTRAINT [FK_tbl_BookingCancelMaster_tbl_Customer] FOREIGN KEY([CustomerId])
REFERENCES [dbo].[tbl_CustomerMaster] ([CustomerId])
GO
ALTER TABLE [dbo].[tbl_BookingCancelMaster] CHECK CONSTRAINT [FK_tbl_BookingCancelMaster_tbl_Customer]
GO
/****** Object:  ForeignKey [FK_tbl_BookingCancelMaster_tbl_Location]    Script Date: 07/22/2019 17:36:12 ******/
ALTER TABLE [dbo].[tbl_BookingCancelMaster]  WITH CHECK ADD  CONSTRAINT [FK_tbl_BookingCancelMaster_tbl_Location] FOREIGN KEY([LocationId])
REFERENCES [dbo].[tbl_LocationMaster] ([LocationId])
GO
ALTER TABLE [dbo].[tbl_BookingCancelMaster] CHECK CONSTRAINT [FK_tbl_BookingCancelMaster_tbl_Location]
GO
/****** Object:  ForeignKey [FK_tbl_BookingCancelMaster_tbl_Plan]    Script Date: 07/22/2019 17:36:12 ******/
ALTER TABLE [dbo].[tbl_BookingCancelMaster]  WITH CHECK ADD  CONSTRAINT [FK_tbl_BookingCancelMaster_tbl_Plan] FOREIGN KEY([PlanId])
REFERENCES [dbo].[tbl_PlanMaster] ([PlanId])
GO
ALTER TABLE [dbo].[tbl_BookingCancelMaster] CHECK CONSTRAINT [FK_tbl_BookingCancelMaster_tbl_Plan]
GO
/****** Object:  ForeignKey [FK_tbl_FarmerInwardMT_tbl_CustomerId]    Script Date: 07/22/2019 17:36:12 ******/
ALTER TABLE [dbo].[tbl_FarmerInwardMT]  WITH CHECK ADD  CONSTRAINT [FK_tbl_FarmerInwardMT_tbl_CustomerId] FOREIGN KEY([CustomerId])
REFERENCES [dbo].[tbl_CustomerMaster] ([CustomerId])
GO
ALTER TABLE [dbo].[tbl_FarmerInwardMT] CHECK CONSTRAINT [FK_tbl_FarmerInwardMT_tbl_CustomerId]
GO
/****** Object:  ForeignKey [FK_tbl_FarmerInwardMT_tbl_Location_LocationId]    Script Date: 07/22/2019 17:36:12 ******/
ALTER TABLE [dbo].[tbl_FarmerInwardMT]  WITH CHECK ADD  CONSTRAINT [FK_tbl_FarmerInwardMT_tbl_Location_LocationId] FOREIGN KEY([LocationId])
REFERENCES [dbo].[tbl_LocationMaster] ([LocationId])
GO
ALTER TABLE [dbo].[tbl_FarmerInwardMT] CHECK CONSTRAINT [FK_tbl_FarmerInwardMT_tbl_Location_LocationId]
GO
/****** Object:  ForeignKey [FK_tbl_FarmerInwardMT_tbl_PlanMaster_PlanID]    Script Date: 07/22/2019 17:36:12 ******/
ALTER TABLE [dbo].[tbl_FarmerInwardMT]  WITH CHECK ADD  CONSTRAINT [FK_tbl_FarmerInwardMT_tbl_PlanMaster_PlanID] FOREIGN KEY([PlanID])
REFERENCES [dbo].[tbl_PlanMaster] ([PlanId])
GO
ALTER TABLE [dbo].[tbl_FarmerInwardMT] CHECK CONSTRAINT [FK_tbl_FarmerInwardMT_tbl_PlanMaster_PlanID]
GO
/****** Object:  ForeignKey [FK_tbl_OfficeExpencesDetails_tbl_Employee]    Script Date: 07/22/2019 17:36:12 ******/
ALTER TABLE [dbo].[tbl_OfficeExpencesDetails]  WITH CHECK ADD  CONSTRAINT [FK_tbl_OfficeExpencesDetails_tbl_Employee] FOREIGN KEY([EmployeeId])
REFERENCES [dbo].[tbl_EmployeeMaster] ([EmployeeId])
GO
ALTER TABLE [dbo].[tbl_OfficeExpencesDetails] CHECK CONSTRAINT [FK_tbl_OfficeExpencesDetails_tbl_Employee]
GO
/****** Object:  ForeignKey [FK_tbl_OfficeExpencesDetails_tbl_ExpenseType]    Script Date: 07/22/2019 17:36:12 ******/
ALTER TABLE [dbo].[tbl_OfficeExpencesDetails]  WITH CHECK ADD  CONSTRAINT [FK_tbl_OfficeExpencesDetails_tbl_ExpenseType] FOREIGN KEY([ExpenceId])
REFERENCES [dbo].[tbl_ExpenceTypeMaster] ([ExpenceId])
GO
ALTER TABLE [dbo].[tbl_OfficeExpencesDetails] CHECK CONSTRAINT [FK_tbl_OfficeExpencesDetails_tbl_ExpenseType]
GO
/****** Object:  ForeignKey [FK_tbl_OfficeExpencesDetails_tbl_Location]    Script Date: 07/22/2019 17:36:12 ******/
ALTER TABLE [dbo].[tbl_OfficeExpencesDetails]  WITH CHECK ADD  CONSTRAINT [FK_tbl_OfficeExpencesDetails_tbl_Location] FOREIGN KEY([LocationId])
REFERENCES [dbo].[tbl_LocationMaster] ([LocationId])
GO
ALTER TABLE [dbo].[tbl_OfficeExpencesDetails] CHECK CONSTRAINT [FK_tbl_OfficeExpencesDetails_tbl_Location]
GO
/****** Object:  ForeignKey [FK_tbl_MortalitywastageMT_tbl_Customer]    Script Date: 07/22/2019 17:36:12 ******/
ALTER TABLE [dbo].[tbl_MortalitywastageMT]  WITH CHECK ADD  CONSTRAINT [FK_tbl_MortalitywastageMT_tbl_Customer] FOREIGN KEY([CustomerId])
REFERENCES [dbo].[tbl_CustomerMaster] ([CustomerId])
GO
ALTER TABLE [dbo].[tbl_MortalitywastageMT] CHECK CONSTRAINT [FK_tbl_MortalitywastageMT_tbl_Customer]
GO
/****** Object:  ForeignKey [FK_tbl_MortalitywastageMT_tbl_Location]    Script Date: 07/22/2019 17:36:12 ******/
ALTER TABLE [dbo].[tbl_MortalitywastageMT]  WITH CHECK ADD  CONSTRAINT [FK_tbl_MortalitywastageMT_tbl_Location] FOREIGN KEY([LocationId])
REFERENCES [dbo].[tbl_LocationMaster] ([LocationId])
GO
ALTER TABLE [dbo].[tbl_MortalitywastageMT] CHECK CONSTRAINT [FK_tbl_MortalitywastageMT_tbl_Location]
GO
/****** Object:  ForeignKey [FK_tbl_MortalitywastageMT_tbl_Plan]    Script Date: 07/22/2019 17:36:12 ******/
ALTER TABLE [dbo].[tbl_MortalitywastageMT]  WITH CHECK ADD  CONSTRAINT [FK_tbl_MortalitywastageMT_tbl_Plan] FOREIGN KEY([PlanId])
REFERENCES [dbo].[tbl_PlanMaster] ([PlanId])
GO
ALTER TABLE [dbo].[tbl_MortalitywastageMT] CHECK CONSTRAINT [FK_tbl_MortalitywastageMT_tbl_Plan]
GO
/****** Object:  ForeignKey [FK_tbl_PurchaseBillReturnDT_tbl_BilId]    Script Date: 07/22/2019 17:36:12 ******/
ALTER TABLE [dbo].[tbl_PurchaseBillReturnDT]  WITH CHECK ADD  CONSTRAINT [FK_tbl_PurchaseBillReturnDT_tbl_BilId] FOREIGN KEY([BillId])
REFERENCES [dbo].[tbl_PurchaseBillReturnMT] ([BillId])
GO
ALTER TABLE [dbo].[tbl_PurchaseBillReturnDT] CHECK CONSTRAINT [FK_tbl_PurchaseBillReturnDT_tbl_BilId]
GO
/****** Object:  ForeignKey [FK_tbl_PurchaseBillReturnDT_tbl_Producttype]    Script Date: 07/22/2019 17:36:12 ******/
ALTER TABLE [dbo].[tbl_PurchaseBillReturnDT]  WITH CHECK ADD  CONSTRAINT [FK_tbl_PurchaseBillReturnDT_tbl_Producttype] FOREIGN KEY([ProductId], [ProductType])
REFERENCES [dbo].[tbl_ProductTypeMaster] ([ProductId], [ProductType])
GO
ALTER TABLE [dbo].[tbl_PurchaseBillReturnDT] CHECK CONSTRAINT [FK_tbl_PurchaseBillReturnDT_tbl_Producttype]
GO
/****** Object:  ForeignKey [FK_tbl_FarmerOutwardMT_tbl_CustomerMaster_CustomerId]    Script Date: 07/22/2019 17:36:12 ******/
ALTER TABLE [dbo].[tbl_FarmerOutwardMT]  WITH CHECK ADD  CONSTRAINT [FK_tbl_FarmerOutwardMT_tbl_CustomerMaster_CustomerId] FOREIGN KEY([CustomerId])
REFERENCES [dbo].[tbl_CustomerMaster] ([CustomerId])
GO
ALTER TABLE [dbo].[tbl_FarmerOutwardMT] CHECK CONSTRAINT [FK_tbl_FarmerOutwardMT_tbl_CustomerMaster_CustomerId]
GO
/****** Object:  ForeignKey [FK_tbl_FarmerOutwardMT_tbl_LocationMaster_LocationId]    Script Date: 07/22/2019 17:36:12 ******/
ALTER TABLE [dbo].[tbl_FarmerOutwardMT]  WITH CHECK ADD  CONSTRAINT [FK_tbl_FarmerOutwardMT_tbl_LocationMaster_LocationId] FOREIGN KEY([LocationId])
REFERENCES [dbo].[tbl_LocationMaster] ([LocationId])
GO
ALTER TABLE [dbo].[tbl_FarmerOutwardMT] CHECK CONSTRAINT [FK_tbl_FarmerOutwardMT_tbl_LocationMaster_LocationId]
GO
/****** Object:  ForeignKey [FK_tbl_FarmerOutwardMT_tbl_PlanId]    Script Date: 07/22/2019 17:36:12 ******/
ALTER TABLE [dbo].[tbl_FarmerOutwardMT]  WITH CHECK ADD  CONSTRAINT [FK_tbl_FarmerOutwardMT_tbl_PlanId] FOREIGN KEY([PlanID])
REFERENCES [dbo].[tbl_PlanMaster] ([PlanId])
GO
ALTER TABLE [dbo].[tbl_FarmerOutwardMT] CHECK CONSTRAINT [FK_tbl_FarmerOutwardMT_tbl_PlanId]
GO
/****** Object:  ForeignKey [FK_tbl_SalesReceipt_tbl_Customer]    Script Date: 07/22/2019 17:36:12 ******/
ALTER TABLE [dbo].[tbl_SalesReceipt]  WITH CHECK ADD  CONSTRAINT [FK_tbl_SalesReceipt_tbl_Customer] FOREIGN KEY([CustomerId])
REFERENCES [dbo].[tbl_CustomerMaster] ([CustomerId])
GO
ALTER TABLE [dbo].[tbl_SalesReceipt] CHECK CONSTRAINT [FK_tbl_SalesReceipt_tbl_Customer]
GO
/****** Object:  ForeignKey [FK_tbl_SalesReceipt_tbl_Location]    Script Date: 07/22/2019 17:36:12 ******/
ALTER TABLE [dbo].[tbl_SalesReceipt]  WITH CHECK ADD  CONSTRAINT [FK_tbl_SalesReceipt_tbl_Location] FOREIGN KEY([LocationId])
REFERENCES [dbo].[tbl_LocationMaster] ([LocationId])
GO
ALTER TABLE [dbo].[tbl_SalesReceipt] CHECK CONSTRAINT [FK_tbl_SalesReceipt_tbl_Location]
GO
/****** Object:  ForeignKey [FK_tbl_SalesBillMT_tbl_Customer]    Script Date: 07/22/2019 17:36:12 ******/
ALTER TABLE [dbo].[tbl_SalesBillMT]  WITH CHECK ADD  CONSTRAINT [FK_tbl_SalesBillMT_tbl_Customer] FOREIGN KEY([CustomerId])
REFERENCES [dbo].[tbl_CustomerMaster] ([CustomerId])
GO
ALTER TABLE [dbo].[tbl_SalesBillMT] CHECK CONSTRAINT [FK_tbl_SalesBillMT_tbl_Customer]
GO
/****** Object:  ForeignKey [FK_tbl_SalesBillMT_tbl_Location]    Script Date: 07/22/2019 17:36:12 ******/
ALTER TABLE [dbo].[tbl_SalesBillMT]  WITH CHECK ADD  CONSTRAINT [FK_tbl_SalesBillMT_tbl_Location] FOREIGN KEY([LocationId])
REFERENCES [dbo].[tbl_LocationMaster] ([LocationId])
GO
ALTER TABLE [dbo].[tbl_SalesBillMT] CHECK CONSTRAINT [FK_tbl_SalesBillMT_tbl_Location]
GO
/****** Object:  ForeignKey [FK_tbl_SalesBillDT_tbl_BillId]    Script Date: 07/22/2019 17:36:12 ******/
ALTER TABLE [dbo].[tbl_SalesBillDT]  WITH CHECK ADD  CONSTRAINT [FK_tbl_SalesBillDT_tbl_BillId] FOREIGN KEY([BillId])
REFERENCES [dbo].[tbl_SalesBillMT] ([BillId])
GO
ALTER TABLE [dbo].[tbl_SalesBillDT] CHECK CONSTRAINT [FK_tbl_SalesBillDT_tbl_BillId]
GO
/****** Object:  ForeignKey [FK_tbl_SalesBillDT_tblProductId]    Script Date: 07/22/2019 17:36:12 ******/
ALTER TABLE [dbo].[tbl_SalesBillDT]  WITH CHECK ADD  CONSTRAINT [FK_tbl_SalesBillDT_tblProductId] FOREIGN KEY([ProductId], [ProductType])
REFERENCES [dbo].[tbl_ProductTypeMaster] ([ProductId], [ProductType])
GO
ALTER TABLE [dbo].[tbl_SalesBillDT] CHECK CONSTRAINT [FK_tbl_SalesBillDT_tblProductId]
GO
/****** Object:  ForeignKey [FK_tbl_FarmerOutwardDT_tbl_RecordNo]    Script Date: 07/22/2019 17:36:12 ******/
ALTER TABLE [dbo].[tbl_FarmerOutwardDT]  WITH CHECK ADD  CONSTRAINT [FK_tbl_FarmerOutwardDT_tbl_RecordNo] FOREIGN KEY([RecordNo])
REFERENCES [dbo].[tbl_FarmerOutwardMT] ([RecordNo])
GO
ALTER TABLE [dbo].[tbl_FarmerOutwardDT] CHECK CONSTRAINT [FK_tbl_FarmerOutwardDT_tbl_RecordNo]
GO
/****** Object:  ForeignKey [FK_tbl_MortalitywastageDT_tbl_Product]    Script Date: 07/22/2019 17:36:12 ******/
ALTER TABLE [dbo].[tbl_MortalitywastageDT]  WITH CHECK ADD  CONSTRAINT [FK_tbl_MortalitywastageDT_tbl_Product] FOREIGN KEY([ProductId], [ProductType])
REFERENCES [dbo].[tbl_ProductTypeMaster] ([ProductId], [ProductType])
GO
ALTER TABLE [dbo].[tbl_MortalitywastageDT] CHECK CONSTRAINT [FK_tbl_MortalitywastageDT_tbl_Product]
GO
/****** Object:  ForeignKey [FK_tbl_MortalitywastageDT_tbl_RecordNo]    Script Date: 07/22/2019 17:36:12 ******/
ALTER TABLE [dbo].[tbl_MortalitywastageDT]  WITH CHECK ADD  CONSTRAINT [FK_tbl_MortalitywastageDT_tbl_RecordNo] FOREIGN KEY([RecordNo])
REFERENCES [dbo].[tbl_MortalitywastageMT] ([RecordNo])
GO
ALTER TABLE [dbo].[tbl_MortalitywastageDT] CHECK CONSTRAINT [FK_tbl_MortalitywastageDT_tbl_RecordNo]
GO
/****** Object:  ForeignKey [FK_tbl_FarmerInwardDT_tbl_FarmerInwardMT_RecordNo]    Script Date: 07/22/2019 17:36:12 ******/
ALTER TABLE [dbo].[tbl_FarmerInwardDT]  WITH CHECK ADD  CONSTRAINT [FK_tbl_FarmerInwardDT_tbl_FarmerInwardMT_RecordNo] FOREIGN KEY([RecordNo])
REFERENCES [dbo].[tbl_FarmerInwardMT] ([RecordNo])
GO
ALTER TABLE [dbo].[tbl_FarmerInwardDT] CHECK CONSTRAINT [FK_tbl_FarmerInwardDT_tbl_FarmerInwardMT_RecordNo]
GO
