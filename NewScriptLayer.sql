USE [master]
GO
/****** Object:  Database [ContractLayerDB12]    Script Date: 07/09/2019 17:27:45 ******/
CREATE DATABASE [ContractLayerDB12] ON  PRIMARY 
( NAME = N'ContractLayerDB12', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL10.SQLEXPRESS\MSSQL\DATA\ContractLayerDB12.mdf' , SIZE = 2048KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'ContractLayerDB12_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL10.SQLEXPRESS\MSSQL\DATA\ContractLayerDB12_log.ldf' , SIZE = 1024KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [ContractLayerDB12] SET COMPATIBILITY_LEVEL = 100
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [ContractLayerDB12].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [ContractLayerDB12] SET ANSI_NULL_DEFAULT OFF
GO
ALTER DATABASE [ContractLayerDB12] SET ANSI_NULLS OFF
GO
ALTER DATABASE [ContractLayerDB12] SET ANSI_PADDING OFF
GO
ALTER DATABASE [ContractLayerDB12] SET ANSI_WARNINGS OFF
GO
ALTER DATABASE [ContractLayerDB12] SET ARITHABORT OFF
GO
ALTER DATABASE [ContractLayerDB12] SET AUTO_CLOSE OFF
GO
ALTER DATABASE [ContractLayerDB12] SET AUTO_CREATE_STATISTICS ON
GO
ALTER DATABASE [ContractLayerDB12] SET AUTO_SHRINK OFF
GO
ALTER DATABASE [ContractLayerDB12] SET AUTO_UPDATE_STATISTICS ON
GO
ALTER DATABASE [ContractLayerDB12] SET CURSOR_CLOSE_ON_COMMIT OFF
GO
ALTER DATABASE [ContractLayerDB12] SET CURSOR_DEFAULT  GLOBAL
GO
ALTER DATABASE [ContractLayerDB12] SET CONCAT_NULL_YIELDS_NULL OFF
GO
ALTER DATABASE [ContractLayerDB12] SET NUMERIC_ROUNDABORT OFF
GO
ALTER DATABASE [ContractLayerDB12] SET QUOTED_IDENTIFIER OFF
GO
ALTER DATABASE [ContractLayerDB12] SET RECURSIVE_TRIGGERS OFF
GO
ALTER DATABASE [ContractLayerDB12] SET  DISABLE_BROKER
GO
ALTER DATABASE [ContractLayerDB12] SET AUTO_UPDATE_STATISTICS_ASYNC OFF
GO
ALTER DATABASE [ContractLayerDB12] SET DATE_CORRELATION_OPTIMIZATION OFF
GO
ALTER DATABASE [ContractLayerDB12] SET TRUSTWORTHY OFF
GO
ALTER DATABASE [ContractLayerDB12] SET ALLOW_SNAPSHOT_ISOLATION OFF
GO
ALTER DATABASE [ContractLayerDB12] SET PARAMETERIZATION SIMPLE
GO
ALTER DATABASE [ContractLayerDB12] SET READ_COMMITTED_SNAPSHOT OFF
GO
ALTER DATABASE [ContractLayerDB12] SET HONOR_BROKER_PRIORITY OFF
GO
ALTER DATABASE [ContractLayerDB12] SET  READ_WRITE
GO
ALTER DATABASE [ContractLayerDB12] SET RECOVERY SIMPLE
GO
ALTER DATABASE [ContractLayerDB12] SET  MULTI_USER
GO
ALTER DATABASE [ContractLayerDB12] SET PAGE_VERIFY CHECKSUM
GO
ALTER DATABASE [ContractLayerDB12] SET DB_CHAINING OFF
GO
USE [ContractLayerDB12]
GO
/****** Object:  Table [dbo].[tbl_UserInfo]    Script Date: 07/09/2019 17:27:49 ******/
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
/****** Object:  Table [dbo].[tbl_UnitMaster]    Script Date: 07/09/2019 17:27:49 ******/
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
/****** Object:  Table [dbo].[tbl_SupplierMaster]    Script Date: 07/09/2019 17:27:49 ******/
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
/****** Object:  Table [dbo].[tbl_StockDetails]    Script Date: 07/09/2019 17:27:49 ******/
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
/****** Object:  Table [dbo].[tbl_ShedMaster]    Script Date: 07/09/2019 17:27:49 ******/
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
/****** Object:  Table [dbo].[tbl_SalesReceipt]    Script Date: 07/09/2019 17:27:49 ******/
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
/****** Object:  Table [dbo].[tbl_SalesBillMT]    Script Date: 07/09/2019 17:27:49 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_SalesBillMT](
	[PkId] [int] IDENTITY(1,1) NOT NULL,
	[BillNo] [nvarchar](20) NULL,
	[BillDate] [datetime] NULL,
	[LocationId] [int] NULL,
	[CustomerId] [int] NULL,
	[OutstandingAmt] [decimal](18, 2) NULL,
	[TransportMode] [nvarchar](20) NULL,
	[VehicleNo] [nvarchar](20) NULL,
	[PlaceOfSupply] [nvarchar](20) NULL,
	[Address] [nvarchar](20) NULL,
	[FromDate] [datetime] NULL,
	[ToDate] [datetime] NULL,
	[TotalAmount] [decimal](18, 2) NULL,
	[TDSPercentage] [decimal](18, 2) NULL,
	[TDSAmount] [decimal](18, 2) NULL,
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
	[PkId] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_SalesBillDT]    Script Date: 07/09/2019 17:27:49 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_SalesBillDT](
	[PkId] [int] IDENTITY(1,1) NOT NULL,
	[BillNo] [nvarchar](20) NULL,
	[BillDate] [datetime] NULL,
	[ProductId] [int] NULL,
	[ProductTypeId] [int] NULL,
	[Quantity] [decimal](18, 2) NULL,
	[Rate] [decimal](18, 2) NULL,
	[Amonut] [decimal](18, 2) NULL,
	[IsDeleted] [bit] NULL,
 CONSTRAINT [PK_tbl_SalesBillDT] PRIMARY KEY CLUSTERED 
(
	[PkId] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_PurchaseReturnReceipt]    Script Date: 07/09/2019 17:27:49 ******/
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
/****** Object:  Table [dbo].[tbl_PurchaseBillReturnMT]    Script Date: 07/09/2019 17:27:49 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_PurchaseBillReturnMT](
	[PkId] [int] IDENTITY(1,1) NOT NULL,
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
 CONSTRAINT [PK_tbl_PurchaseBillReturnMT] PRIMARY KEY CLUSTERED 
(
	[PkId] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_PurchaseBillReturnDT]    Script Date: 07/09/2019 17:27:49 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_PurchaseBillReturnDT](
	[PkId] [int] IDENTITY(1,1) NOT NULL,
	[BatchNo] [nvarchar](20) NULL,
	[BillNo] [nvarchar](20) NULL,
	[BillDate] [datetime] NULL,
	[ProductId] [int] NULL,
	[ProductTypeId] [int] NULL,
	[HSNCode] [nvarchar](20) NULL,
	[Quantity] [decimal](18, 2) NULL,
	[RejectedQty] [decimal](18, 2) NULL,
	[Rate] [decimal](18, 2) NULL,
	[MRP] [decimal](18, 2) NULL,
	[Discount] [decimal](18, 2) NULL,
	[TaxableAmt] [decimal](18, 2) NULL,
	[CGSTPercentage] [decimal](18, 2) NULL,
	[SGSTPercentage] [decimal](18, 2) NULL,
	[IGSTPercentage] [decimal](18, 2) NULL,
	[TotalCGST] [decimal](18, 2) NULL,
	[TotalSGST] [decimal](18, 2) NULL,
	[TotalIGST] [decimal](18, 2) NULL,
	[TotalAmount] [decimal](18, 2) NULL,
	[IsDeleted] [bit] NULL,
 CONSTRAINT [PK_tbl_PurchaseBillReturnDT] PRIMARY KEY CLUSTERED 
(
	[PkId] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_PurchaseBillMT]    Script Date: 07/09/2019 17:27:49 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_PurchaseBillMT](
	[PkId] [int] IDENTITY(1,1) NOT NULL,
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
	[PkId] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_PurchaseBillDT]    Script Date: 07/09/2019 17:27:49 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_PurchaseBillDT](
	[PkId] [int] IDENTITY(1,1) NOT NULL,
	[BatchNo] [nvarchar](20) NULL,
	[BillNo] [nvarchar](20) NULL,
	[BillDate] [datetime] NULL,
	[ProductId] [int] NULL,
	[ProductTypeId] [int] NULL,
	[HSNCode] [nvarchar](20) NULL,
	[Quantity] [decimal](18, 2) NULL,
	[Rate] [decimal](18, 2) NULL,
	[MRP] [decimal](18, 2) NULL,
	[Discount] [decimal](18, 2) NULL,
	[TaxableAmt] [decimal](18, 2) NULL,
	[CGSTPercentage] [decimal](18, 2) NULL,
	[SGSTPercentage] [decimal](18, 2) NULL,
	[IGSTPercentage] [decimal](18, 2) NULL,
	[TotalCGST] [decimal](18, 2) NULL,
	[TotalSGST] [decimal](18, 2) NULL,
	[TotalIGST] [decimal](18, 2) NULL,
	[TotalAmount] [decimal](18, 2) NULL,
	[IsDeleted] [bit] NULL,
 CONSTRAINT [PK_tbl_PurchaseBillDT] PRIMARY KEY CLUSTERED 
(
	[PkId] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_ProductMaster]    Script Date: 07/09/2019 17:27:49 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_ProductMaster](
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
 CONSTRAINT [PK_ProductMaster_1] PRIMARY KEY CLUSTERED 
(
	[PkId] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_ProductDescriptionMaster]    Script Date: 07/09/2019 17:27:49 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_ProductDescriptionMaster](
	[ProductId] [int] IDENTITY(1,1) NOT NULL,
	[ProductName] [nvarchar](20) NULL,
 CONSTRAINT [PK_ProductDescriptionMaster] PRIMARY KEY CLUSTERED 
(
	[ProductId] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_PlanMaster]    Script Date: 07/09/2019 17:27:49 ******/
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
/****** Object:  Table [dbo].[tbl_OfficeExpencesDetails]    Script Date: 07/09/2019 17:27:49 ******/
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
/****** Object:  Table [dbo].[tbl_MortalitywastageMT]    Script Date: 07/09/2019 17:27:49 ******/
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
	[PMDone] [nvarchar](20) NULL,
	[EmployeeId] [int] NULL,
	[Diseases] [nvarchar](20) NULL,
	[PlanId] [int] NULL,
	[TotalQty] [decimal](18, 2) NULL,
	[IsDeleted] [bit] NULL,
 CONSTRAINT [PK_tbl_MortalitywastageDetails] PRIMARY KEY CLUSTERED 
(
	[RecordNo] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_MortalitywastageDT]    Script Date: 07/09/2019 17:27:49 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_MortalitywastageDT](
	[PkId] [int] IDENTITY(1,1) NOT NULL,
	[RecordNo] [int] NULL,
	[Date] [datetime] NULL,
	[ProductId] [int] NULL,
	[ProductTypeId] [int] NULL,
	[Unit] [nvarchar](20) NULL,
	[Quantity] [decimal](18, 2) NULL,
	[IsDeleted] [bit] NULL,
 CONSTRAINT [PK_tbl_MortalitywastageDT] PRIMARY KEY CLUSTERED 
(
	[PkId] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_LocationMaster]    Script Date: 07/09/2019 17:27:49 ******/
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
/****** Object:  Table [dbo].[tbl_IncomeDeatils]    Script Date: 07/09/2019 17:27:49 ******/
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
/****** Object:  Table [dbo].[tbl_FeedSheduleMasterMT]    Script Date: 07/09/2019 17:27:49 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_FeedSheduleMasterMT](
	[SrNo] [int] IDENTITY(1,1) NOT NULL,
	[ProductTypeId] [int] NULL,
	[IsDeleted] [bit] NULL,
 CONSTRAINT [PK_tbl_FeedSheduleMasterMT] PRIMARY KEY CLUSTERED 
(
	[SrNo] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_FeedSheduleMasterDT]    Script Date: 07/09/2019 17:27:49 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_FeedSheduleMasterDT](
	[PkId] [int] IDENTITY(1,1) NOT NULL,
	[SrNo] [int] NULL,
	[ProductTypeId] [int] NULL,
	[BirdAgeInDays] [nvarchar](20) NULL,
	[DailyFeedInGrams] [nvarchar](20) NULL,
	[IsDeleted] [bit] NULL,
 CONSTRAINT [PK_tbl_FeedSheduleMaster] PRIMARY KEY CLUSTERED 
(
	[PkId] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_FarmerOutwardMT]    Script Date: 07/09/2019 17:27:49 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_FarmerOutwardMT](
	[RecordNo] [nvarchar](20) NOT NULL,
	[Date] [datetime] NULL,
	[LocationId] [int] NULL,
	[CustomerId] [int] NULL,
	[PlanID] [int] NULL,
	[TotalQty] [decimal](18, 2) NULL,
	[IsDeleted] [bit] NULL,
 CONSTRAINT [PK_tbl_FarmerOutwardMT] PRIMARY KEY CLUSTERED 
(
	[RecordNo] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_FarmerOutwardDT]    Script Date: 07/09/2019 17:27:49 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_FarmerOutwardDT](
	[PkId] [int] IDENTITY(1,1) NOT NULL,
	[RecordNo] [nvarchar](20) NULL,
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
/****** Object:  Table [dbo].[tbl_FarmerInwardMT]    Script Date: 07/09/2019 17:27:49 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_FarmerInwardMT](
	[RecordNo] [nvarchar](20) NOT NULL,
	[Date] [datetime] NULL,
	[LocationId] [int] NULL,
	[CustomerId] [int] NULL,
	[PlanID] [int] NULL,
	[TotalQty] [decimal](18, 2) NULL,
	[IsDeleted] [bit] NULL,
 CONSTRAINT [PK_tbl_FarmerInwardMT] PRIMARY KEY CLUSTERED 
(
	[RecordNo] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_FarmerInwardDT]    Script Date: 07/09/2019 17:27:49 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_FarmerInwardDT](
	[PkId] [int] IDENTITY(1,1) NOT NULL,
	[RecordNo] [nvarchar](20) NULL,
	[Date] [datetime] NULL,
	[ProductId] [int] NULL,
	[Unit] [nvarchar](20) NULL,
	[Quantity] [decimal](18, 2) NULL,
	[IsDeleted] [bit] NULL,
 CONSTRAINT [PK_tbl_FarmerInwardDT] PRIMARY KEY CLUSTERED 
(
	[PkId] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_ExpenceTypeMaster]    Script Date: 07/09/2019 17:27:49 ******/
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
/****** Object:  Table [dbo].[tbl_EnquiryDetails]    Script Date: 07/09/2019 17:27:49 ******/
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
/****** Object:  Table [dbo].[tbl_EmployeeMaster]    Script Date: 07/09/2019 17:27:49 ******/
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
	[Location] [nvarchar](20) NULL,
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
/****** Object:  Table [dbo].[tbl_EmployeeAdvance]    Script Date: 07/09/2019 17:27:49 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_EmployeeAdvance](
	[EmpAdvanceId] [int] IDENTITY(1,1) NOT NULL,
	[RecordNo] [int] NULL,
	[RecordDate] [datetime] NULL,
	[LocationName] [nvarchar](20) NULL,
	[Advance] [decimal](18, 2) NULL,
	[Narration] [nvarchar](50) NULL,
	[EmployeeName] [nvarchar](20) NULL,
 CONSTRAINT [PK_EmployeeAdvance] PRIMARY KEY CLUSTERED 
(
	[EmpAdvanceId] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_EggsRangeMaster]    Script Date: 07/09/2019 17:27:49 ******/
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
/****** Object:  Table [dbo].[tbl_CustomerMaster]    Script Date: 07/09/2019 17:27:49 ******/
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
	[Location] [nvarchar](20) NULL,
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
/****** Object:  Table [dbo].[tbl_CompanyProfile]    Script Date: 07/09/2019 17:27:49 ******/
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
/****** Object:  Table [dbo].[tbl_BookingMaster]    Script Date: 07/09/2019 17:27:49 ******/
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
	[Amonut] [decimal](18, 2) NULL,
	[EmployeeId] [int] NULL,
	[EnquiryRef] [nvarchar](20) NULL,
	[Agreement] [nvarchar](20) NULL,
	[EggsLiability] [decimal](18, 2) NULL,
	[PaymentMethod] [nvarchar](20) NULL,
	[ChequeNo] [nvarchar](20) NULL,
	[PaidAmount] [decimal](18, 2) NULL,
	[BalanceAmonut] [decimal](18, 2) NULL,
	[Narration] [nvarchar](20) NULL,
	[DeliveryStatus] [nvarchar](20) NULL,
	[IsDeleted] [bit] NULL,
 CONSTRAINT [PK_BookingMaster_1] PRIMARY KEY CLUSTERED 
(
	[RecordNo] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_BookingCancelMaster]    Script Date: 07/09/2019 17:27:49 ******/
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
