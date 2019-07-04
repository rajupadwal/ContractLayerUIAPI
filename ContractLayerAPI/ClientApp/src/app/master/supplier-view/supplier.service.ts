
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
providedIn :'root'
})
export class SupplierService {
  supplierData
  constructor() { }

  setData(supplierData) {
    this.supplierData = supplierData;
  }
  getData() {
    return this.supplierData;
  }

}


