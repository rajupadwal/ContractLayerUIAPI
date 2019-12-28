import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { APP_CONSTANT } from '../../../config';


@Injectable({
  providedIn: 'root'
})
export class TalukaService {
  constructor(private http: HttpClient) { }

  loadTaluka = () => {
    return this.http.get(APP_CONSTANT.TALUKAMASTER_API.GETALL);
  }

  getDistrictByID(id) {
    return this.http.post(APP_CONSTANT.TALUKAMASTER_API.GETByID, id);
  }

  geStateNameByStateID(master) {
    return this.http.post(APP_CONSTANT.TALUKAMASTER_API.GETSTATEBYSTATEID, master);
  }

  getDistrictByStateID(master) {
    return this.http.post(APP_CONSTANT.TALUKAMASTER_API.GETDISTRICTBYSTATEID, master);
  }

  getTalukaByStateDistrictID(master) {
    return this.http.post(APP_CONSTANT.TALUKAMASTER_API.GETDISTRICTBYSTATEID, master);
  }

  searchTalukaName(searchString) {
    return this.http.post(APP_CONSTANT.TALUKAMASTER_API.SEARCH_TALUKANAME, JSON.stringify(searchString));
  }

}





