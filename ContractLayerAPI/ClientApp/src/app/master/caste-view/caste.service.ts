
import { Injectable } from '@angular/core'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { APP_CONSTANT } from '../../../config';


@Injectable({
providedIn :'root'
})
export class CasteService {
  castemasterData
  constructor(private http: HttpClient) { }

  setData(castemasterData) {
    this.castemasterData = castemasterData;
  }
  getData() {
    return this.castemasterData;
  }

  getCasteSrNo() {
    return this.http.get(APP_CONSTANT.CASTEMASTER_API.GETCASTESRNO);
  }
  getCastedetailsByID(id) {
    return this.http.post(APP_CONSTANT.CASTEMASTER_API.GETByID, id);
  }

  searchCasteName(searchString) {
    return this.http.post(APP_CONSTANT.CASTEMASTER_API.SEARCH_CASTENAME, JSON.stringify(searchString));
  }

 
}


