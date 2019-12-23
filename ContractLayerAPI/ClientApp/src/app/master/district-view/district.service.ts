import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { APP_CONSTANT } from '../../../config';


@Injectable({
  providedIn: 'root'
})
export class DistrictService {
  constructor(private http: HttpClient) { }

  loadDistrict = () => {
    return this.http.get(APP_CONSTANT.DISTRICTMASTER_API.GETALL);
  }

  getDistrictByStateID(id) { 
    return this.http.post(APP_CONSTANT.DISTRICTMASTER_API.GETDISTRICTBYSTATEID, id);
  }

  searchDistrictName(searchString) {
    return this.http.post(APP_CONSTANT.DISTRICTMASTER_API.SEARCH_DISTRICTNAME, JSON.stringify(searchString));
  }
}





