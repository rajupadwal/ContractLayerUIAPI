
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
providedIn :'root'
})
export class ProductdescService {
  productdescData
  constructor() { }

  setData(productdescData) {
    this.productdescData = productdescData;
  }
  getData() {
    return this.productdescData;
  }

}


