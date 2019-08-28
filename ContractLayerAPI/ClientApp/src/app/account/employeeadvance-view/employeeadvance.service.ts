
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { APP_CONSTANT } from '../../../config';


@Injectable({
providedIn :'root'
})
export class EmployeeadvanceService {
  employeeadvanceData
  constructor(private http: HttpClient) { }

  setData(employeeadvanceData) {
    this.employeeadvanceData = employeeadvanceData;
  }
  getData() {
    return this.employeeadvanceData;
  }

  getEmployeeAdvanceNo() {
    return this.http.get(APP_CONSTANT.EMPLOYEEADVANCE_API.GETEMPLOYEEADVANCENO);
  }
  //saveEmployeeAdvance(formValues: any, isEditable: boolean) {
  //  return this.http.post(isEditable ? APP_CONSTANT.EMPLOYEEADVANCE_API.EDIT : APP_CONSTANT.EMPLOYEEADVANCE_API.ADD, formValues);
  //}

}


