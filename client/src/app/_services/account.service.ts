import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseurl = 'https://localhost:44370/api/';
  constructor(private Http: HttpClient) { }

  login(model: any) {
    return this.Http.post(this.baseurl + 'account/login', model)
  }
}
