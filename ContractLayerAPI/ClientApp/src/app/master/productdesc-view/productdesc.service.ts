
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { APP_CONSTANT } from '../../../config';


@Injectable({
providedIn :'root'
})
export class ProductdescService {
  productdescData
  constructor(private http: HttpClient) { }

  setData(productdescData) {
    this.productdescData = productdescData;
  }
  getData() {
    return this.productdescData;
  }

  loadProducts = () => {
    return this.http.get(APP_CONSTANT.PRODUCTDESC_API.GETALL);
  }
  searchProduct(searchString) {
    return this.http.post(APP_CONSTANT.PRODUCTDESC_API.SEARCH_PRODUCTDES, JSON.stringify(searchString));
  }

  getProductByID(id) {
    return this.http.post(APP_CONSTANT.PRODUCTDESC_API.GETByID, id);
  }


  
}


