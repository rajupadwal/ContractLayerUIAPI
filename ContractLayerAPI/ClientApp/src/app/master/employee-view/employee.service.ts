
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { APP_CONSTANT } from '../../../config';


@Injectable({
providedIn :'root'
})
export class EmployeeService {
  employeeData
  constructor(private http: HttpClient) { }

  setData(employeeData) {
    this.employeeData = employeeData;
  }
  getData() {
    return this.employeeData;
  }

  getEmployeeByID(id) {
    return this.http.post(APP_CONSTANT.EMPLOYEE_API.GETByID, id);
  }

  searchEmployee(searchString) {
    return this.http.post(APP_CONSTANT.EMPLOYEE_API.SEARCH_EMPLOYEE, JSON.stringify(searchString));
  }
}


