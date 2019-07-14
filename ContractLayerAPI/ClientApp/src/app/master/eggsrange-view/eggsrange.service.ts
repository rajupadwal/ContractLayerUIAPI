
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
providedIn :'root'
})
export class EggsrangeService {
  eggsrangeData
  constructor() { }

  setData(eggsrangeData) {
    this.eggsrangeData = eggsrangeData;
  }
  getData() {
    return this.eggsrangeData;
  }

}


