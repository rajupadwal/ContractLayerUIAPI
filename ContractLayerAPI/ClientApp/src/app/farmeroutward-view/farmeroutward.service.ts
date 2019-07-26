
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { APP_CONSTANT } from '../../config';

@Injectable({
providedIn :'root'
})
export class FarmeroutwardService {
  constructor(private http: HttpClient) { }

  loadFarmerOutwardMaster() {
    return this.http.get(APP_CONSTANT.PRODUCT_FARMER_OUTWARDS_API.GETALLFARMEROUTWARDMASTERS);
  }


  getCustomerByID(id) {
//    return this.http.post(APP_CONSTANT.GETALLFARMERINWARDMASTERS.GETByID,id);
  }

}


