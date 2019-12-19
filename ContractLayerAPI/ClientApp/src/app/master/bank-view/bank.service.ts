
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { APP_CONSTANT } from '../../../config';


@Injectable({
providedIn :'root'
})
export class BankService {
  bankmasterData
  constructor(private http: HttpClient) { }

  setData(bankmasterData) {
    this.bankmasterData = bankmasterData;
  }
  getData() {
    return this.bankmasterData;
  }

  getBankSrNo() {
    return this.http.get(APP_CONSTANT.BANKMASTER_API.GETBANKSRNO);
  }
  getBankdetailsByID(id) {
    return this.http.post(APP_CONSTANT.BANKMASTER_API.GETByID, id);
  }

  searchBankName(searchString) {
    return this.http.post(APP_CONSTANT.BANKMASTER_API.SEARCH_BANKNAME, JSON.stringify(searchString));
  }

 
}


