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

  
  //searchCustomer(searchString) {
  //  return this.http.post(APP_CONSTANT.CUSOTMER_API.SEARCH_CUSTOMER, JSON.stringify(searchString));
  //}
  //searchPlan(searchString) {
  //  return this.http.post(APP_CONSTANT.PLAN_API.SEARCH_PLAN, JSON.stringify(searchString));
  //}


  //saveBookingDetails(formValues: any, isEditable:boolean) {
  //  return this.http.post(isEditable ? APP_CONSTANT.BOOKING_API.EDIT : APP_CONSTANT.BOOKING_API.ADD, formValues);
  //}


}


