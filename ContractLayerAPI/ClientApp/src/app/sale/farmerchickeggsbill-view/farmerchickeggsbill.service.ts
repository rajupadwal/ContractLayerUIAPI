
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { APP_CONSTANT } from '../../../config';
@Injectable({
providedIn :'root'
})
export class FarmerchikeggbillService {
  constructor(private http: HttpClient) { }

  loadFarmerchickeggbillMaster() {
   return this.http.get(APP_CONSTANT.PRODUCT_FARMER_CHICKEGGBILL_API.GETALLFARMERCHICKEGGBILLMASTERS);

  }

  getChickEggsBillNo() {
    return this.http.get(APP_CONSTANT.PRODUCT_FARMER_CHICKEGGBILL_API.GETALLFARMERCHICKEGGBILLNO);
  }

  getCustOutstanding(master) {
    return this.http.post(APP_CONSTANT.PRODUCT_FARMER_CHICKEGGBILL_API.GETCUSTOUTSTANDING, master);
  }

}


