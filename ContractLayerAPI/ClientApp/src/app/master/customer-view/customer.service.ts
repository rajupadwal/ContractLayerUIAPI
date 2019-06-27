
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
providedIn :'root'
})
export class CusotmerService {
  customerData
  constructor() { }

  setData(customerData) {
    this.customerData = customerData;
  }
  getData() {
    return this.customerData;
  }

}


