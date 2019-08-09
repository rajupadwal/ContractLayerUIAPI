import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { APP_CONSTANT } from '../../../config';
import { ɵangular_packages_forms_forms_v } from '@angular/forms';

@Injectable({
providedIn :'root'
})
export class BookingService {
    
  bookingData
  constructor(private http: HttpClient) { }

  setData(bookingData) {
    this.bookingData = bookingData;
  }
  getData() {
    return this.bookingData;
  }

  
  searchCustomer(searchString) {
    return this.http.post(APP_CONSTANT.CUSOTMER_API.SEARCH_CUSTOMER, JSON.stringify(searchString));
  }

  searchLocation(searchString) {
    return this.http.post(APP_CONSTANT.LOCATION_API.SEARCH_LOCATION, JSON.stringify(searchString));
  }
  searchPlan(searchString) {
    return this.http.post(APP_CONSTANT.PLAN_API.SEARCH_PLAN, JSON.stringify(searchString));
  }


  saveBookingDetails(formValues: any, isEditable:boolean) {
    return this.http.post(isEditable ? APP_CONSTANT.BOOKING_API.EDIT : APP_CONSTANT.BOOKING_API.ADD, formValues);
  }

  getBookingNo() {
    return this.http.get(APP_CONSTANT.BOOKING_API.GETBOOKINGNO);
  }

  getPlanByCustomerID(master) {
    return this.http.post(APP_CONSTANT.BOOKING_API.GETPLANBYCUSTID, master);
  }
}


