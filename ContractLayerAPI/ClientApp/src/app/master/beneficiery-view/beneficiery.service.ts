
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { APP_CONSTANT } from '../../../config';


@Injectable({
providedIn :'root'
})
export class BeneficieryService {
  //bankmasterData
  constructor(private http: HttpClient) { }

  getDistrictByStateID(master) {
    return this.http.post(APP_CONSTANT.BENEFICIERYMASTER_API.GETDISTRICTBYSTATEID, master);
  }

  getTalukaByStateDistrictID(master) {
    return this.http.post(APP_CONSTANT.BENEFICIERYMASTER_API.GETTALUKABYSTATEDISTRICTID, master);
  }

  getSubCasteByCasteID(master) {
    return this.http.post(APP_CONSTANT.BENEFICIERYMASTER_API.GETSUBCASTEBYCASTEID, master);
  }

  getSubTypeByTypeID(master) {
    return this.http.post(APP_CONSTANT.BENEFICIERYMASTER_API.GETSUBTYPEBYTYPEID, master);
  }

  geBranchByBankID(master) {
    return this.http.post(APP_CONSTANT.BENEFICIERYMASTER_API.GETBRANCHBYBANKID, master);
  }
}


