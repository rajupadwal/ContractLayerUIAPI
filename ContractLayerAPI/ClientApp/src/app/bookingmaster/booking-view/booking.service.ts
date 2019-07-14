import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { APP_CONSTANT } from '../../../config';

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


  saveBookingDetails(formValues: any, isEditable:boolean) {
    return this.http.post(isEditable ? APP_CONSTANT.BOOKING_API.EDIT : APP_CONSTANT.BOOKING_API.ADD, formValues);
  }


}


