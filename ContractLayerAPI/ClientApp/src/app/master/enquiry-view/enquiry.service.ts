
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { APP_CONSTANT } from '../../../config';

@Injectable({
providedIn :'root'
})
export class EnquiryService {
  enquiryData
  constructor(private http: HttpClient) { }

  setData(enquiryData) {
    this.enquiryData = enquiryData;
  }
  getData() {
    return this.enquiryData;
  }

  getEnquiryNo() {
    return this.http.get(APP_CONSTANT.ENQUIRY_API.GETENQUIRYNO);
  }

  saveEnquiry(formValues: any, isEditable: boolean) {
    return this.http.post(isEditable ? APP_CONSTANT.ENQUIRY_API.EDIT : APP_CONSTANT.ENQUIRY_API.ADD, formValues);
  }
}


