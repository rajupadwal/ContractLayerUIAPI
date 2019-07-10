
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
providedIn :'root'
})
export class BookingService {
  bookingData
  constructor() { }

  setData(bookingData) {
    this.bookingData = bookingData;
  }
  getData() {
    return this.bookingData;
  }

}


