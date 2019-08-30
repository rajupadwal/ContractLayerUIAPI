import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { APP_CONSTANT } from '../../../config';

@Injectable({
providedIn :'root'
})
export class SalesReceiptService {
    
       
  salesreceiptData
  constructor(private http: HttpClient) { }

  setData(salesreceiptData) {
    this.salesreceiptData = salesreceiptData;
  }
  getData() {
    return this.salesreceiptData;
  }

  searchCustomer(searchString) {
    return this.http.post(APP_CONSTANT.CUSOTMER_API.SEARCH_CUSTOMER, JSON.stringify(searchString));
  }

  searchLocation(searchString) {
    return this.http.post(APP_CONSTANT.LOCATION_API.SEARCH_LOCATION, JSON.stringify(searchString));
  }

  saveSalereceipt(formValues: any, isEditable:boolean) {
    return this.http.post(isEditable ? APP_CONSTANT.SALERECEIPT_API.EDIT : APP_CONSTANT.SALERECEIPT_API.ADD, formValues);
  }

  getSaleReceiptNo() {
    return this.http.get(APP_CONSTANT.SALERECEIPT_API.GETSALERECEIPTNO);
  }

  getCustOutstanding(formValues: any) {
    return this.http.post(APP_CONSTANT.SALERECEIPT_API.GETCUSTOUTSTANDING, formValues);
  }

  getCustSettlementAmount(formValues: any) {
    return this.http.post(APP_CONSTANT.SALERECEIPT_API.GETCUSTSETTLEMENTAMOUNT, formValues);
  }
}


