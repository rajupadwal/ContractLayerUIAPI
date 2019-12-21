import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { APP_CONSTANT } from '../../../config';


@Injectable({
  providedIn: 'root'
})
export class TalukaService {
  constructor(private http: HttpClient) { }

  loadDistrict = () => {
    return this.http.get(APP_CONSTANT.DISTRICTMASTER_API.GETALL);
  }

  getDistrictByID(id) {
    return this.http.post(APP_CONSTANT.DISTRICTMASTER_API.GETByID, id);
  }

  geStateNameByStateID(master) {
    return this.http.post(APP_CONSTANT.DISTRICTMASTER_API.GETSTATEBYSTATEID, master);
  }

}





