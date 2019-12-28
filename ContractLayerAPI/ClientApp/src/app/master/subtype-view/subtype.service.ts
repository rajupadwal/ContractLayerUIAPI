import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { APP_CONSTANT } from '../../../config';


@Injectable({
  providedIn: 'root'
})
export class SubTypeService {
  constructor(private http: HttpClient) { }

  loadSubType = () => {
    return this.http.get(APP_CONSTANT.SUBTYPEMASTER_API.GETALL);
  }

  getSubTypeByID(id) {
    return this.http.post(APP_CONSTANT.SUBTYPEMASTER_API.GETByID, id);
  }

  //geStateNameByStateID(master) {
  //  return this.http.post(APP_CONSTANT.DISTRICTMASTER_API.GETSTATEBYSTATEID, master);
  //}

  searchSubtypeName(searchString) {
    return this.http.post(APP_CONSTANT.SUBTYPEMASTER_API.SEARCH_SUBTYPENAME, JSON.stringify(searchString));
  }
}





