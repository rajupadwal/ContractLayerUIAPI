
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
providedIn :'root'
})
export class EmployeeService {
  employeeData
  constructor() { }

  setData(employeeData) {
    this.employeeData = employeeData;
  }
  getData() {
    return this.employeeData;
  }

}


