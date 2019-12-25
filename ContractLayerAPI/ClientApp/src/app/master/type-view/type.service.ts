
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { APP_CONSTANT } from '../../../config';


@Injectable({
providedIn :'root'
})
export class TypeService {
  //statemasterData
  constructor(private http: HttpClient) { }

  //getStateSrNo() {
  //  return this.http.get(APP_CONSTANT.STATEMASTER_API.GETSTATESRNO);
  //}
  getTypedetailsByID(id) {
    return this.http.post(APP_CONSTANT.TYPEMASTER_API.GETByID, id);
  }

  searchTypeName(searchString) {
    return this.http.post(APP_CONSTANT.TYPEMASTER_API.SEARCH_TYPENAME, JSON.stringify(searchString));
  }

 
}


