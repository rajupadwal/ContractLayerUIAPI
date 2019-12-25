import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { APP_CONSTANT } from '../../../config';


@Injectable({
  providedIn: 'root'
})
export class SubcasteService {
  constructor(private http: HttpClient) { }

  loadSubCaste = () => {
    return this.http.get(APP_CONSTANT.SUBCASTEMASTER_API.GETALL);
  }

  getSubCasteByCasteID(id) { 
    return this.http.post(APP_CONSTANT.SUBCASTEMASTER_API.GETSUBCASTEBYCASTEID, id);
  }

  searchSubCasteName(searchString) {
    return this.http.post(APP_CONSTANT.SUBCASTEMASTER_API.SEARCH_SUBCASTENAME, JSON.stringify(searchString));
  }
}





