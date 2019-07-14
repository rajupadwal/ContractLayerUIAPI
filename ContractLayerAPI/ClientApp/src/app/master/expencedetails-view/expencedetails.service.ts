
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
providedIn :'root'
})
export class ExpencedetailsService {
  expencedetailsData
  constructor() { }

  setData(expencedetailsData) {
    this.expencedetailsData = expencedetailsData;
  }
  getData() {
    return this.expencedetailsData;
  }

}


