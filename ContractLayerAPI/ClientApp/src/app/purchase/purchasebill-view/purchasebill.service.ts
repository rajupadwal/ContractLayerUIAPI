
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { APP_CONSTANT } from '../../../config';

@Injectable({
providedIn :'root'
})
export class PurchasebillService {
  constructor(private http: HttpClient) { }

  loadPurchaseBillMaster() {
    return this.http.get(APP_CONSTANT.PRODUCT_PURCHASE_BILLS_API.GETALLPURCHASEBILLMASTERS);
  }

  GetAllTopPurchase() {
    return this.http.get(APP_CONSTANT.PRODUCT_PURCHASE_BILLS_API.GETALLTOPPURCHASE);
  }

  getCustomerByID(id) {
//    return this.http.post(APP_CONSTANT.GETALLFARMERINWARDMASTERS.GETByID,id);
  }

  getGRNNo() {
    return this.http.get(APP_CONSTANT.PRODUCT_PURCHASE_BILLS_API.GETGRNNO);
  }

}


