
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { APP_CONSTANT } from '../../../config';

@Injectable({
providedIn :'root'
})
export class SupplierbilloutstandingService {
  constructor(private http: HttpClient) { }

  loadBillOutstanding() {
    return this.http.get(APP_CONSTANT.PRODUCT_FARMER_OUTWARDS_API.GETSUPPBILLOUTSTANDING);
  }
}


