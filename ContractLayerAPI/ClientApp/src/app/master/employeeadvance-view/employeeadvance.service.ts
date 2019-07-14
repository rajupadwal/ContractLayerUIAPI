
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
providedIn :'root'
})
export class EmployeeadvanceService {
  employeeadvanceData
  constructor() { }

  setData(employeeadvanceData) {
    this.employeeadvanceData = employeeadvanceData;
  }
  getData() {
    return this.employeeadvanceData;
  }

}


