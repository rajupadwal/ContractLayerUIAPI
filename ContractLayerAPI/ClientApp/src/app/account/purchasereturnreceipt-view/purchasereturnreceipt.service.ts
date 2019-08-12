import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { APP_CONSTANT } from '../../../config';

@Injectable({
providedIn :'root'
})
export class PurchasereturnReceiptService {
    
       
  purchasereturnreceiptData
  constructor(private http: HttpClient) { }

  setData(purchasereturnreceiptData) {
    this.purchasereturnreceiptData = purchasereturnreceiptData;
  }
  getData() {
    return this.purchasereturnreceiptData;
  }

  savePurchasereturnReceipt(formValues: any, isEditable:boolean) {
    return this.http.post(isEditable ? APP_CONSTANT.PURCHASERETURNRECEIPT_API.EDIT : APP_CONSTANT.PURCHASERETURNRECEIPT_API.ADD, formValues);
  }

  getReturnPurchasePaymentNo() {
    return this.http.get(APP_CONSTANT.PURCHASERETURNRECEIPT_API.RETURNPURCHASEPAYMENTNO);
  }

}


