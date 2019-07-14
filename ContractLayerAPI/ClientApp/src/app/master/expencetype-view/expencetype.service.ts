
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
providedIn :'root'
})
export class ExpencetypeService {
  expencetypeData
  constructor() { }

  setData(expencetypeData) {
    this.expencetypeData = expencetypeData;
  }
  getData() {
    return this.expencetypeData;
  }

}


