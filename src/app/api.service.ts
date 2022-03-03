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

  getStaffProblems(user: any) {
    console.log(user)
    return this.api.get(
      `https://prijava-kvarova-v2.azurewebsites.net/api/problems/staff?staffId=${user.id}`
    );
  }

  getWorkerProblems(user: any) {
    return this.api.get(
      `https://prijava-kvarova-v2.azurewebsites.net/api/problems/worker?workerId=8`
    );
  }

  addProblem(addProblemObject: any) {
    return this.api.post(
      `https://prijava-kvarova-v2.azurewebsites.net/api/problems`,
      addProblemObject
    );
  }

  getSupplierProblems() {
    return this.api.get(
      'https://prijava-kvarova-v2.azurewebsites.net/api/problems/worker'
    );
  }

  getSingleProblem(id: any) {
    return this.api.get(
      `https://prijava-kvarova-v2.azurewebsites.net/api/problems/${id}`
    );
  }

  deleteSingleProblem(id: any) {
    return this.api.delete(
      `https://prijava-kvarova-v2.azurewebsites.net/api/problems/${id}`
    );
  }
}
