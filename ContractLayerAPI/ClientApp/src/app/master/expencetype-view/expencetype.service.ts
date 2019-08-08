
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { APP_CONSTANT } from '../../../config';


@Injectable({
providedIn :'root'
})
export class ExpencetypeService {
  expencetypeData
  constructor(private http: HttpClient) { }

  setData(expencetypeData) {
    this.expencetypeData = expencetypeData;
  }
  getData() {
    return this.expencetypeData;
  }

  getExpenceNo() {
    return this.http.get(APP_CONSTANT.EXPENCETYPE_API.GETEXPENCENO);
  }
  getExpencetypeByID(id) {
    return this.http.post(APP_CONSTANT.EXPENCETYPE_API.GETByID, id);
  }

  searchExpenceType(searchString) {
    return this.http.post(APP_CONSTANT.EXPENCETYPE_API.SEARCH_EXPENCETYPE, JSON.stringify(searchString));
  }
}


