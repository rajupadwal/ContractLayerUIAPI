
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { APP_CONSTANT } from '../../../config';

@Injectable({
providedIn :'root'
})
export class DatewisepurchasereturnService {
  constructor(private http: HttpClient) { }

  getPurchaseReturnDetails(formValues: any) {
    return this.http.post(APP_CONSTANT.PRODUCT_PURCHASE_BILLRETURNS_API.GETDATEWISEPURCHASERETURN, formValues);
  }

}


