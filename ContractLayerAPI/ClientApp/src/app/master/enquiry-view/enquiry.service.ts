
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
providedIn :'root'
})
export class EnquiryService {
  enquiryData
  constructor() { }

  setData(enquiryData) {
    this.enquiryData = enquiryData;
  }
  getData() {
    return this.enquiryData;
  }

}


