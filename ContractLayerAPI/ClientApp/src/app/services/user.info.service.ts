import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { config } from 'process';
import { UserInfo } from '../models/user.info.model';
import { APP_CONSTANT } from '../../config';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<UserInfo[]>(`${APP_CONSTANT.USER_APIS.LOGIN}`);
  }
}
