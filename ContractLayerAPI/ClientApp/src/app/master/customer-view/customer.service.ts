
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { APP_CONSTANT } from '../../../config';

@Injectable({
providedIn :'root'
})
export class CusotmerService {
  constructor(private http: HttpClient) { }

  loadCustomers() {
    return this.http.get(APP_CONSTANT.CUSOTMER_API.GETALL);
     
  }
  searchLocation(searchString) {
    return this.http.post(APP_CONSTANT.LOCATION_API.SEARCH_LOCATION, JSON.stringify(searchString));
  }

  getCustomerByID(id) {
    return this.http.post(APP_CONSTANT.CUSOTMER_API.GETByID,id);
  }

}


