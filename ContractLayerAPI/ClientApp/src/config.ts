
//export const API_URL = window.location.origin + "/ContractLayer/api/";
export const API_URL = window.location.origin + "/api/";
export const APP_CONSTANT={
  USER_APIS : {
    LOGIN: API_URL + "Product/login"
  },
  DPR_APIS: {
    GETALL_ITEMGROUP_DETAILS: API_URL + "DPR/GetAllItemGroupDetails",
    SAVE_DPR_DETAILS: API_URL + "DPR/SaveDPRDetails",
    GET_ALL_DPRS: API_URL + "DPR/GetAllDPRDetails"
  },
  ENQUIRY_API: {
    ADD: API_URL + 'Enquiry/Add',
    GETALL: API_URL + 'Enquiry/GetAll',
    GETByID: API_URL + 'Enquiry/GetByID',
    EDIT: API_URL + 'Enquiry/Update',
    DELETE: API_URL + 'Enquiry/Delete',
    GETENQUIRYNO: API_URL + 'Enquiry/GetEnquiryNo'
  },
  
  CUSOTMER_API: {
    ADD: API_URL + 'Customer/Add',
    GETALL: API_URL + 'Customer/GetAll',
    GETByID: API_URL + 'Customer/GetByID',
    EDIT: API_URL + 'Customer/Update',
    DELETE: API_URL + 'Customer/Delete',
    SEARCH_CUSTOMER: API_URL + 'Customer/SearchCustomer',
  },
  LOCATION_API: {
    ADD: API_URL + 'Location/Add',
    GETALL: API_URL + 'Location/GetAll',
    GETByID: API_URL + 'Location/GetByID',
    EDIT: API_URL + 'Location/Update',
    DELETE: API_URL + 'Location/Delete',
    SEARCH_LOCATION: API_URL + 'Location/SearchLocation',
  },
  SUPPLIER_API: {
    ADD: API_URL + 'Supplier/Add',
    GETALL: API_URL + 'Supplier/GetAll',
    GETByID: API_URL + 'Supplier/GetByID',
    EDIT: API_URL + 'Supplier/Update',
    DELETE: API_URL + 'Supplier/Delete',
    SEARCH_SUPPLIER: API_URL + 'Supplier/SearchSupplier',
  },


  PLAN_API: {
    ADD: API_URL + 'Plan/Add',
    GETALL: API_URL + 'Plan/GetAll',
    GETByID: API_URL + 'Plan/GetByID',
    EDIT: API_URL + 'Plan/Update',
    DELETE: API_URL + 'Plan/Delete',
    SEARCH_PLAN: API_URL + 'Plan/SearchPlan'
  },
  PRODUCTDESC_API: {
    ADD: API_URL + 'Productdesc/Add',
    GETALL: API_URL + 'Productdesc/GetAll',
    GETByID: API_URL + 'Productdesc/GetByID',
    EDIT: API_URL + 'Productdesc/Update',
    DELETE: API_URL + 'Productdesc/Delete',
    SEARCH_PRODUCTDES: API_URL + 'Productdesc/SearchProduct',
  },

  PRODUCT_API: {
    ADD: API_URL + 'Product/Add',
    GETALL: API_URL + 'Product/GetAll',
    GETByID: API_URL + 'Product/GetByIdAll',
    EDIT: API_URL + 'Product/Update',
    DELETE: API_URL + 'Product/Delete',
    GETTYPEBYPRODUCTID: API_URL + 'Product/GetTypeByProductID',
  },

  PRODUCT_UNIT_API: {
    GETALL: API_URL + 'Unit/GetAll',
    GETByID: API_URL + 'Unit/GetByIdAll',
    SEARCH_UNITS: API_URL + 'Unit/SearchUnit',
  },

  INCOMETYPE_API: {
    GETALL: API_URL + 'Incometype/GetAll',
    GETByID: API_URL + 'Incometype/GetById',
    SEARCH_INCOMETYPE: API_URL + 'Incometype/SearchIncometype',
  },

  PROFILE_API: {
    ADD: API_URL + 'Profile/Add',
    GETALL: API_URL + 'Profile/GetAll',
    GETByID: API_URL + 'Profile/GetByID',
    EDIT: API_URL + 'Profile/Update',
    DELETE: API_URL + 'Profile/Delete'
  },
  EMPLOYEE_API: {
    ADD: API_URL + 'Employee/Add',
    GETALL: API_URL + 'Employee/GetAll',
    GETByID: API_URL + 'Employee/GetByID',
    EDIT: API_URL + 'Employee/Update',
    DELETE: API_URL + 'Employee/Delete',
    SEARCH_EMPLOYEE: API_URL + 'Employee/SearchEmployee'
  },
  EGGSRANGE_API: {
    ADD: API_URL + 'Eggsrange/Add',
    GETALL: API_URL + 'Eggsrange/GetAll',
    GETByID: API_URL + 'Eggsrange/GetByID',
    EDIT: API_URL + 'Eggsrange/Update',
    DELETE: API_URL + 'Eggsrange/Delete'
  },

  BOOKING_API: {
    ADD: API_URL + 'Booking/Add',
    GETALL: API_URL + 'Booking/GetAll',
    GETByID: API_URL + 'Booking/GetByID',
    EDIT: API_URL + 'Booking/Update',
    DELETE: API_URL + 'Booking/Delete',
    GETBOOKINGNO: API_URL + 'Booking/GetBookingNo',
    GETPLANBYCUSTID: API_URL + 'Booking/GetPlanByCustID',

    GETALLTOPBOOKING: API_URL + 'Booking/GetAllTopBooking',
  },
  BOOKINGCANCEL_API: {
    ADD: API_URL + 'Bookingcancel/Add',
    GETALL: API_URL + 'Bookingcancel/GetAll',
    GETByID: API_URL + 'Bookingcancel/GetByID',
    EDIT: API_URL + 'Bookingcancel/Update',
    DELETE: API_URL + 'Bookingcancel/Delete',
    GETBOOKINGCANCELNO: API_URL + 'Bookingcancel/GetBookingCancelNo'
  },

  
    EMPLOYEEADVANCE_API: {
    ADD: API_URL + 'Employeeadvance/Add',
    GETALL: API_URL + 'Employeeadvance/GetAll',
    GETByID: API_URL + 'Employeeadvance/GetByID',
    EDIT: API_URL + 'Employeeadvance/Update',
      DELETE: API_URL + 'Employeeadvance/Delete',
    GETEMPLOYEEADVANCENO: API_URL + 'Employeeadvance/GetEmployeeAdvanceNo'
  },
  INCOME_API: {
    ADD: API_URL + 'Income/Add',
    GETALL: API_URL + 'Income/GetAll',
    GETByID: API_URL + 'Income/GetByID',
    EDIT: API_URL + 'Income/Update',
    DELETE: API_URL + 'Income/Delete',
    GETINCOMENO: API_URL + 'Income/GetIncomeNo'
  },

  EXPENCETYPE_API: {
    ADD: API_URL + 'Expencetype/Add',
    GETALL: API_URL + 'Expencetype/GetAll',
    GETByID: API_URL + 'Expencetype/GetByID',
    EDIT: API_URL + 'Expencetype/Update',
    DELETE: API_URL + 'Expencetype/Delete',
    SEARCH_EXPENCETYPE: API_URL + 'Expencetype/SearchExpenceType',
    GETEXPENCENO: API_URL + 'Expencetype/GetExpenceNo'
  },

  EXPENCEDETAILS_API: {
    ADD: API_URL + 'Expencedetails/Add',
    GETALL: API_URL + 'Expencedetails/GetAll',
    GETByID: API_URL + 'Expencedetails/GetByID',
    EDIT: API_URL + 'Expencedetails/Update',
    DELETE: API_URL + 'Expencedetails/Delete',
    GETEXPENCENO: API_URL + 'Expencedetails/GetExpenceNo',

    GETALLTOPEXPENSES: API_URL + 'Expencedetails/GetAllTopExpenses',
  },
  SALERECEIPT_API: {
    ADD: API_URL + 'Salesreceipt/Add',
    GETALL: API_URL + 'Salesreceipt/GetAll',
    GETByID: API_URL + 'Salesreceipt/GetByID',
    EDIT: API_URL + 'Salesreceipt/Update',
    DELETE: API_URL + 'Salesreceipt/Delete',
    GETSALERECEIPTNO: API_URL + 'Salesreceipt/GetSaleReceiptNo',
    GETCUSTOUTSTANDING: API_URL + 'Salesreceipt/GetCustomerOutstandingAmt',

    GETCUSTSETTLEMENTAMOUNT: API_URL + 'Product/GetCustomerSettlementAmt',
  },
  FARMERCHIKEGGBILL_API: {
    ADD: API_URL + 'Salesreceipt/Add',
    GETALL: API_URL + 'Salesreceipt/GetAll',
    GETByID: API_URL + 'Salesreceipt/GetByID',
    EDIT: API_URL + 'Salesreceipt/Update',
    DELETE: API_URL + 'Salesreceipt/Delete'
  },

  PRODUCT_FARMER_INWARDS_API: {
    SAVEFARMERINWARDMASTER: API_URL + 'Product/SaveFarmerInwardMaster',
    SAVEFARMERINWARDSDETAILS: API_URL + 'Product/SaveFarmerInwardsDetails',
    GETALLFARMERINWARDMASTERS: API_URL + 'Product/GetAllFarmerInwardMasters',
    GETALLFARMERINWARDMASTEDETAILS: API_URL + 'Product/GetAllFarmerInwardMasteDetails',
    GETFARMERINWARDNO: API_URL + 'Product/GetFarmerInwardNo',
    DELETE: API_URL + 'Product/DeleteFarmerInward',

    GETDATEWISEFARMERINWARD: API_URL + 'Product/GetDatewiseFarmerInwardDetails',
    GETDATEWISEEXPENCES: API_URL + 'Product/GetDatewiseExpencesDetails',
  },

  PRODUCT_FARMER_OUTWARDS_API: {
    SAVEFARMEROUTWARDMASTER: API_URL + 'Product/SaveFarmerOutwardMaster',
    SAVEFARMEROUTWARDSDETAILS: API_URL + 'Product/SaveFarmerOutwardsDetails',
    GETALLFARMEROUTWARDMASTERS: API_URL + 'Product/GetAllFarmerOutwardMasters',
    GETALLFARMEROUTWARDMASTEDETAILS: API_URL + 'Product/GetAllFarmerOutwardMasteDetails',
    GETFARMEROUTWARDNO: API_URL + 'Product/GetFarmerOutwardNo',
    GETPRODUCTAVAILABLESTOCK: API_URL + 'Product/GetProductAvailableStock',
    DELETE: API_URL + 'Product/DeleteFarmerOutward',

    GETPRODUCTWISEAVAILABLESTOCK: API_URL + 'Product/GetProductwiseAvailableStock',
    GETCUSTBOOKINGOUTSTANDING: API_URL + 'Product/GetCustomerBookingOutstanding',
    GETCUSTBILLOUTSTANDING: API_URL + 'Product/GetCustomerBillOutstanding',

    GETSUPPBILLOUTSTANDING: API_URL + 'Product/GetSupplierBillOutstanding',
    GETSUPPBILLLEDGER: API_URL + 'Product/GetSupplierLedger',
    GETCUSTBILLLEDGER: API_URL + 'Product/GetCustomerLedger',

    GETDATEWISEFARMEROUTWARD: API_URL + 'Product/GetDatewiseFarmerOutwardDetails',
  },

  PRODUCT_FARMER_CHICKEGGBILL_API: {
    SAVEFARMERCHICKEGGBILLMASTER: API_URL + 'Product/SaveFarmerChickEggBillMaster',
    SAVEFARMERCHICKEGGBILLDETAILS: API_URL + 'Product/SaveFarmerChickEggBillDetails',
    GETALLFARMERCHICKEGGBILLMASTERS: API_URL + 'Product/GetAllFarmerChickEggBillMasters',
    GETALLFARMERCHICKEGGBILLDETAILS: API_URL + 'Product/GetAllFarmerChickEggBillDetails',
    GETALLFARMERCHICKEGGBILLNO: API_URL + 'Product/GetChickEggsBillNo',
    DELETE: API_URL + 'Product/DeleteChickEggsBill',
    GETCUSTOUTSTANDING: API_URL + 'Product/GetCustomerOutstandingAmt',

    GETALLTOPSALE: API_URL + 'Product/GetAllTopSale',
  },


  PRODUCT_PURCHASE_BILLS_API: {
    SAVEPURCHASEBILLMASTER: API_URL + 'Product/SavePurchaseBillMaster',
    SAVEPURCHASEBILLSDETAILS: API_URL + 'Product/SavePurchaseBillsDetails',
    GETALLPURCHASEBILLMASTERS: API_URL + 'Product/GetAllPurchaseBillMasters',
    GETALLPURCHASEBILLMASTEDETAILS: API_URL + 'Product/GetAllPurchaseBillMasteDetails',
    GETGRNNO: API_URL + 'Product/GetPurchaseBillGRNNo',
    DELETE: API_URL + 'Product/DeletePurchaseBill',

    GETALLTOPPURCHASE: API_URL + 'Product/GetAllTopPurchase',
  },

  PRODUCT_PURCHASE_BILLRETURNS_API: {
    SAVEPURCHASEBILLRETURNMASTER: API_URL + 'Product/SavePurchaseBillReturnMaster',
    SAVEPURCHASEBILLRETURNSDETAILS: API_URL + 'Product/SavePurchaseBillReturnsDetails',
    GETALLPURCHASEBILLRETURNMASTERS: API_URL + 'Product/GetAllPurchaseBillReturnMasters',
    GETALLPURCHASEBILLRETURNMASTEDETAILS: API_URL + 'Product/GetAllPurchaseBillReturnMasteDetails',
    GETGRNNO: API_URL + 'Product/GetPurchaseBillReturnGRNNo',
    DELETE: API_URL + 'Product/DeletePurchaseBillReturn',

    GETDATEWISEPURCHASERETURN: API_URL + 'Product/GetDatewisePurchaseReturnDetails',
  },
  
  PURCHASEPAYMENT_API: {
    ADD: API_URL + 'Purchasepayment/Add',
    GETALL: API_URL + 'Purchasepayment/GetAll',
    GETByID: API_URL + 'Purchasepayment/GetByID',
    EDIT: API_URL + 'Purchasepayment/Update',
    DELETE: API_URL + 'Purchasepayment/Delete',
    PURCHASEPAYMENTNO: API_URL + 'Purchasepayment/GetPurchasePaymentNo',
     GETSUPPOUTSTANDING: API_URL + 'Purchasepayment/GetSupplierOutstandingAmt',
  },

  PURCHASERETURNRECEIPT_API: {
    ADD: API_URL + 'Purchasereturnreceipt/Add',
    GETALL: API_URL + 'Purchasereturnreceipt/GetAll',
    GETByID: API_URL + 'Purchasereturnreceipt/GetByID',
    EDIT: API_URL + 'Purchasereturnreceipt/Update',
    DELETE: API_URL + 'Purchasereturnreceipt/Delete',
    RETURNPURCHASEPAYMENTNO: API_URL + 'Purchasereturnreceipt/GetReturnPurchasePaymentNo',
  },
                                                    
}
