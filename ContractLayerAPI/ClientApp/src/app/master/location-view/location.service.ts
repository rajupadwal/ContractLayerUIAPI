
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
providedIn :'root'
})
export class LocationService {
  locationData
  constructor() { }

  setData(locationData) {
    this.locationData = locationData;
  }
  getData() {
    return this.locationData;
  }

}


