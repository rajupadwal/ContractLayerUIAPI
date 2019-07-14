
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
providedIn :'root'
})
export class IncomeService {
 incomeData
  constructor() { }

  setData(incomeData) {
    this.incomeData = incomeData;
  }
  getData() {
    return this.incomeData;
  }

}


