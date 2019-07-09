
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
providedIn :'root'
})
export class PlanService {
  planData
  constructor() { }

  setData(planData) {
    this.planData = planData;
  }
  getData() {
    return this.planData;
  }

}


