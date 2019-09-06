
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { APP_CONSTANT } from '../../../config';

@Injectable({
providedIn :'root'
})
export class DatewiseexpencesService {
  constructor(private http: HttpClient) { }

  getExpencesDetails(formValues: any) {
    return this.http.post(APP_CONSTANT.PRODUCT_FARMER_INWARDS_API.GETDATEWISEEXPENCES, formValues);
  }

}


