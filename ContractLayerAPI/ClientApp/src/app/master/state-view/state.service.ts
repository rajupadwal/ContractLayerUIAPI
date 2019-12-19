
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { APP_CONSTANT } from '../../../config';


@Injectable({
providedIn :'root'
})
export class StateService {
  statemasterData
  constructor(private http: HttpClient) { }

  setData(statemasterData) {
    this.statemasterData = statemasterData;
  }
  getData() {
    return this.statemasterData;
  }

  getStateSrNo() {
    return this.http.get(APP_CONSTANT.STATEMASTER_API.GETSTATESRNO);
  }
  getStatedetailsByID(id) {
    return this.http.post(APP_CONSTANT.STATEMASTER_API.GETByID, id);
  }

  searchStateName(searchString) {
    return this.http.post(APP_CONSTANT.STATEMASTER_API.SEARCH_STATENAME, JSON.stringify(searchString));
  }

 
}


