
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { APP_CONSTANT } from '../../../config';

@Injectable({
providedIn :'root'
})
export class FarmerinwardService {
  constructor(private http: HttpClient) { }

  loadFarmerInwardMaster() {
    return this.http.get(APP_CONSTANT.PRODUCT_FARMER_INWARDS_API.GETALLFARMERINWARDMASTERS);
  }

  getCustomerByID(id) {
//    return this.http.post(APP_CONSTANT.GETALLFARMERINWARDMASTERS.GETByID,id);
  }

  getFarmerInwardNo() {
    return this.http.get(APP_CONSTANT.PRODUCT_FARMER_INWARDS_API.GETFARMERINWARDNO);
  }
}


