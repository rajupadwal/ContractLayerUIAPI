
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { APP_CONSTANT } from '../../../config';


@Injectable({
providedIn :'root'
})
export class IncomeService {
 incomeData
  constructor(private http: HttpClient) { }

  setData(incomeData) {
    this.incomeData = incomeData;
  }
  getData() {
    return this.incomeData;
  }

  loadIncometype = () => {
    return this.http.get(APP_CONSTANT.INCOMETYPE_API.GETALL);
  }
  getIncometypeByID(id) {
    return this.http.post(APP_CONSTANT.INCOMETYPE_API.GETByID, id);
  }
  searchIncometype(searchString) {
    return this.http.post(APP_CONSTANT.INCOMETYPE_API.SEARCH_INCOMETYPE, JSON.stringify(searchString));
  }
  getIncomeNo() {
    return this.http.get(APP_CONSTANT.INCOME_API.GETINCOMENO);
  }


}


