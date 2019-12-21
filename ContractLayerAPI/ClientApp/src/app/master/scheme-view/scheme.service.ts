
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { APP_CONSTANT } from '../../../config';

@Injectable({
providedIn :'root'
})
export class SchemeService {
  
  constructor(private http: HttpClient) { }

  loadScheme = () => {
    return this.http.get(APP_CONSTANT.SCHEME_API.GETALL);
  }

  getSchemeByID(id) {
    return this.http.post(APP_CONSTANT.SCHEME_API.GETByID, id);
  }

  searchScheme(searchString) {
    return this.http.post(APP_CONSTANT.SCHEME_API.SEARCH_SCHEME, JSON.stringify(searchString));
  }
}


