import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { APP_CONSTANT } from '../../../config';


@Injectable({
  providedIn: 'root'
})
export class BranchService {
  constructor(private http: HttpClient) { }

  loadBranch = () => {
    return this.http.get(APP_CONSTANT.BRANCH_API.GETALL);
  }

  getBranchByID(id) {
    return this.http.post(APP_CONSTANT.BRANCH_API.GETByID, id);
  }

  geBankNameByBankID(master) {
    return this.http.post(APP_CONSTANT.BRANCH_API.GETBRANCHBYBRANCHID, master);
  }

  searchBranchName(searchString) {
    return this.http.post(APP_CONSTANT.BRANCH_API.SEARCH_BRANCHNAME, JSON.stringify(searchString));
  }
}





