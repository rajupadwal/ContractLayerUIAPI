
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

  },
  SUPPLIER_API: {
    ADD: API_URL + 'Supplier/Add',
    GETALL: API_URL + 'Supplier/GetAll',
    GETByID: API_URL + 'Supplier/GetAll',
    EDIT: API_URL + 'Supplier/Update',
    DELETE: API_URL + 'Supplier/Delete'

  },




}
