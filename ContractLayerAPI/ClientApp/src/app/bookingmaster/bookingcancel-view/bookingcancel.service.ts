
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
providedIn :'root'
})
export class BookingcancelService {
 bookingcancelData
  constructor() { }

  setData(bookingcancelData) {
    this.bookingcancelData = bookingcancelData;
  }
  getData() {
    return this.bookingcancelData;
  }

}


