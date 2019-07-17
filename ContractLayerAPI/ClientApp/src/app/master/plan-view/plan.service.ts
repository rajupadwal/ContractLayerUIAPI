
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { APP_CONSTANT } from '../../../config';

@Injectable({
providedIn :'root'
})
export class PlanService {
  
  constructor(private http: HttpClient) { }
  loadPlans = () => {
    return this.http.get(APP_CONSTANT.PLAN_API.GETALL);
  }

}


