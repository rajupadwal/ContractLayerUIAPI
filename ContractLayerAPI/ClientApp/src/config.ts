
export const API_URL = "http://localhost:53580/api/"
export const APP_CONSTANT={
  USER_APIS : {
    LOGIN: API_URL + "user/login"
  },
  DPR_APIS: {
    GETALL_ITEMGROUP_DETAILS: API_URL + "DPR/GetAllItemGroupDetails",
    SAVE_DPR_DETAILS: API_URL + "DPR/SaveDPRDetails",
    GET_ALL_DPRS: API_URL + "DPR/GetAllDPRDetails"
  }
  ,
  CUSOTMER_API: {
    ADD: API_URL + 'Customer/Add',
    GETALL: API_URL + 'Customer/GetAll',
    GETByID: API_URL + 'Customer/GetAll',
    EDIT: API_URL + 'Customer/Update',
  },
  LOCATION_API: {
    ADD: API_URL + 'Location/Add',
    GETALL: API_URL + 'Location/GetAll',
    GETByID: API_URL + 'Location/GetAll',
    EDIT: API_URL + 'Location/Update',
    DELETE: API_URL + 'Location/Delete'

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
    DELETE: API_URL + 'Plan/Delete'
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




}
