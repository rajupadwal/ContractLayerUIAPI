import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { APP_CONSTANT } from '../../../config';

@Injectable({
providedIn :'root'
})
export class PurchasePayemntService {
    
       
  purchasepaymentData
  constructor(private http: HttpClient) { }

  setData(purchasepaymentData) {
    this.purchasepaymentData = purchasepaymentData;
  }
  getData() {
    return this.purchasepaymentData;
  }

  
  //searchCustomer(searchString) {
  //  return this.http.post(APP_CONSTANT.CUSOTMER_API.SEARCH_CUSTOMER, JSON.stringify(searchString));
  //}
  //searchPlan(searchString) {
  //  return this.http.post(APP_CONSTANT.PLAN_API.SEARCH_PLAN, JSON.stringify(searchString));
  //}
  //searchCustomer(searchString) {
  //  return this.http.post(APP_CONSTANT.CUSOTMER_API.SEARCH_CUSTOMER, JSON.stringify(searchString));
  //}

  //searchLocation(searchString) {
  //  return this.http.post(APP_CONSTANT.LOCATION_API.SEARCH_LOCATION, JSON.stringify(searchString));
  //}


  savePurchasepayment(formValues: any, isEditable:boolean) {
    return this.http.post(isEditable ? APP_CONSTANT.PURCHASEPAYMENT_API.EDIT : APP_CONSTANT.PURCHASEPAYMENT_API.ADD, formValues);
  }


}


