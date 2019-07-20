
export const API_URL = window.location.origin + "/api/";
export const APP_CONSTANT={
  USER_APIS : {
    LOGIN: API_URL + "user/login"
  },
  DPR_APIS: {
    GETALL_ITEMGROUP_DETAILS: API_URL + "DPR/GetAllItemGroupDetails",
    SAVE_DPR_DETAILS: API_URL + "DPR/SaveDPRDetails",
    GET_ALL_DPRS: API_URL + "DPR/GetAllDPRDetails"
  },
  ENQUIRY_API: {
    ADD: API_URL + 'Enquiry/Add',
    GETALL: API_URL + 'Enquiry/GetAll',
    GETByID: API_URL + 'Enquiry/GetAll',
    EDIT: API_URL + 'Enquiry/Update',
    DELETE: API_URL + 'Enquiry/Delete'
  },
  
  CUSOTMER_API: {
    ADD: API_URL + 'Customer/Add',
    GETALL: API_URL + 'Customer/GetAll',
    GETByID: API_URL + 'Customer/GetByID',
    EDIT: API_URL + 'Customer/Update',
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
    GETByID: API_URL + 'Supplier/GetAll',
    EDIT: API_URL + 'Supplier/Update',
    DELETE: API_URL + 'Supplier/Delete'
  },
  PLAN_API: {
    ADD: API_URL + 'Plan/Add',
    GETALL: API_URL + 'Plan/GetAll',
    GETByID: API_URL + 'Plan/GetAll',
    EDIT: API_URL + 'Plan/Update',
    DELETE: API_URL + 'Plan/Delete',
    SEARCH_PLAN: API_URL + 'Plan/SearchPlan'
  },
  PRODUCTDESC_API: {
    ADD: API_URL + 'Productdesc/Add',
    GETALL: API_URL + 'Productdesc/GetAll',
    GETByID: API_URL + 'Productdesc/GetAll',
    EDIT: API_URL + 'Productdesc/Update',
    DELETE: API_URL + 'Productdesc/Delete'
  },

  PRODUCT_API: {
    ADD: API_URL + 'Product/Add',
    GETALL: API_URL + 'Product/GetAll',
    GETByID: API_URL + 'Product/GetAll',
    EDIT: API_URL + 'Product/Update',
    DELETE: API_URL + 'Product/Delete'
  },

  PROFILE_API: {
    ADD: API_URL + 'Profile/Add',
    GETALL: API_URL + 'Profile/GetAll',
    GETByID: API_URL + 'Profile/GetAll',
    EDIT: API_URL + 'Profile/Update',
    DELETE: API_URL + 'Profile/Delete'
  },
  EMPLOYEE_API: {
    ADD: API_URL + 'Employee/Add',
    GETALL: API_URL + 'Employee/GetAll',
    GETByID: API_URL + 'Employee/GetAll',
    EDIT: API_URL + 'Employee/Update',
    DELETE: API_URL + 'Employee/Delete'
  },
  EGGSRANGE_API: {
    ADD: API_URL + 'Eggsrange/Add',
    GETALL: API_URL + 'Eggsrange/GetAll',
    GETByID: API_URL + 'Eggsrange/GetAll',
    EDIT: API_URL + 'Eggsrange/Update',
    DELETE: API_URL + 'Eggsrange/Delete'
  },

  BOOKING_API: {
    ADD: API_URL + 'Booking/Add',
    GETALL: API_URL + 'Booking/GetAll',
    GETByID: API_URL + 'Booking/GetAll',
    EDIT: API_URL + 'Booking/Update',
    DELETE: API_URL + 'Booking/Delete'
  },
  BOOKINGCANCEL_API: {
    ADD: API_URL + 'Bookingcancel/Add',
    GETALL: API_URL + 'Bookingcancel/GetAll',
    GETByID: API_URL + 'Bookingcancel/GetAll',
    EDIT: API_URL + 'Bookingcancel/Update',
    DELETE: API_URL + 'Bookingcancel/Delete'
  },

  
  EMPLOYEEADVANCE_API: {
    ADD: API_URL + 'Employeeadvance/Add',
    GETALL: API_URL + 'Employeeadvance/GetAll',
    GETByID: API_URL + 'Employeeadvance/GetAll',
    EDIT: API_URL + 'Employeeadvance/Update',
    DELETE: API_URL + 'Employeeadvance/Delete'
  },
  INCOME_API: {
    ADD: API_URL + 'Income/Add',
    GETALL: API_URL + 'Income/GetAll',
    GETByID: API_URL + 'Income/GetAll',
    EDIT: API_URL + 'Income/Update',
    DELETE: API_URL + 'Income/Delete'
  },

  EXPENCETYPE_API: {
    ADD: API_URL + 'Expencetype/Add',
    GETALL: API_URL + 'Expencetype/GetAll',
    GETByID: API_URL + 'Expencetype/GetAll',
    EDIT: API_URL + 'Expencetype/Update',
    DELETE: API_URL + 'Expencetype/Delete'
  },

  EXPENCEDETAILS_API: {
    ADD: API_URL + 'Expencedetails/Add',
    GETALL: API_URL + 'Expencedetails/GetAll',
    GETByID: API_URL + 'Expencedetails/GetAll',
    EDIT: API_URL + 'Expencedetails/Update',
    DELETE: API_URL + 'Expencedetails/Delete'
  },
  SALERECEIPT_API: {
    ADD: API_URL + 'Salesreceipt/Add',
    GETALL: API_URL + 'Salesreceipt/GetAll',
    GETByID: API_URL + 'Salesreceipt/GetAll',
    EDIT: API_URL + 'Salesreceipt/Update',
    DELETE: API_URL + 'Salesreceipt/Delete'
  },


  PRODUCT_UNIT_API: {
    GETALL: API_URL + 'Product/GetAllUnits',
  },


  PRODUCT_FARMER_INWARDS_API: {
    SAVEFARMERINWARDMASTER: API_URL + 'Product/SaveFarmerInwardMaster',
    SAVEFARMERINWARDSDETAILS: API_URL + 'Product/SaveFarmerInwardsDetails',
    GETALLFARMERINWARDMASTERS: API_URL + 'Product/GetAllFarmerInwardMasters',
    GETALLFARMERINWARDMASTEDETAILS: API_URL + 'Product/GetAllFarmerInwardMasteDetails',


  },
  
  PURCHASEPAYMENT_API: {
    ADD: API_URL + 'Purchasepayment/Add',
    GETALL: API_URL + 'Purchasepayment/GetAll',
    GETByID: API_URL + 'Purchasepayment/GetByID',
    EDIT: API_URL + 'Purchasepayment/Update',
    DELETE: API_URL + 'Purchasepayment/Delete'
  },
                                                    
}
