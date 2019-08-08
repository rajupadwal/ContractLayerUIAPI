import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { APP_CONSTANT } from '../../../config';


@Injectable({
providedIn :'root'
})
export class BookingcancelService {
 bookingcancelData
    
  constructor(private http: HttpClient) { }

  setData(bookingcancelData) {
    this.bookingcancelData = bookingcancelData;
  }
  getData() {
    return this.bookingcancelData;
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
  saveBookingCancel(formValues: any, isEditable: boolean) {
    return this.http.post(isEditable ? APP_CONSTANT.BOOKINGCANCEL_API.EDIT : APP_CONSTANT.BOOKINGCANCEL_API.ADD, formValues);
  }
  getBookingCancelNo() {
    return this.http.get(APP_CONSTANT.BOOKINGCANCEL_API.GETBOOKINGCANCELNO);
  }

  
}


