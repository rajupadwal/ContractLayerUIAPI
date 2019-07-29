
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { APP_CONSTANT } from '../../../config';


@Injectable({
providedIn :'root'
})
export class SupplierService {
  supplierData
  constructor(private http: HttpClient) { }

  setData(supplierData) {
    this.supplierData = supplierData;
  }
  getData() {
    return this.supplierData;
  }

  loadSuppliers() {
    return this.http.get(APP_CONSTANT.SUPPLIER_API.GETALL);

  }

  getSupplierByID(id) {
    return this.http.post(APP_CONSTANT.SUPPLIER_API.GETByID, id);
  }

  searchSupplier(searchString) {
    return this.http.post(APP_CONSTANT.SUPPLIER_API.SEARCH_SUPPLIER, JSON.stringify(searchString));
  }

}


