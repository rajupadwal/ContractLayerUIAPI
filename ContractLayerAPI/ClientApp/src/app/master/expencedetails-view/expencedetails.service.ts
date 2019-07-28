
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { APP_CONSTANT } from '../../../config';


@Injectable({
providedIn :'root'
})
export class ExpencedetailsService {
  expencedetailsData
  constructor(private http: HttpClient) { }


  setData(expencedetailsData) {
    this.expencedetailsData = expencedetailsData;
  }
  getData() {
    return this.expencedetailsData;
  }

  

}


