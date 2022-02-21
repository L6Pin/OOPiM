import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private api: HttpClient) {}

  login(account: any) {
    return this.api.post(
      'https://prijava-kvarova-v2.azurewebsites.net/api/users/login',
      account
    );
  }

  getAllProblems() {
    return this.api.get(
      'https://prijava-kvarova-v2.azurewebsites.net/api/problems'
    );
  }
}
