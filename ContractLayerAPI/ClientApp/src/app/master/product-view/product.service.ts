
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
providedIn :'root'
})
export class ProductService {
  productData
  constructor() { }

  setData(productData) {
    this.productData = productData;
  }
  getData() {
    return this.productData;
  }

}


