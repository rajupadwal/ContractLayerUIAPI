
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
providedIn :'root'
})
export class ProfileService {
  profileData
  constructor() { }

  setData(profileData) {
    this.profileData = profileData;
  }
  getData() {
    return this.profileData;
  }

}


