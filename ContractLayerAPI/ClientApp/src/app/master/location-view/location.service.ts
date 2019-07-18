
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { APP_CONSTANT } from '../../../config';

@Injectable({
providedIn :'root'
})
export class LocationService {
  
  constructor(private http: HttpClient) { }

  loadLocations = () => {
    return this.http.get(APP_CONSTANT.LOCATION_API.GETALL);
  }

  getLocationByID(id) {
    return this.http.post(APP_CONSTANT.LOCATION_API.GETByID, id);
  }

}


