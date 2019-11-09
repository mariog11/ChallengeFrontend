import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NameRetrievalService {
  expressBaseUrl:string = 'https://challenge-db.herokuapp.com';

  constructor(private http:HttpClient) { }

  private sendRequestToExpress(endpoint:string):Promise<any> {
    return this.http.get(this.expressBaseUrl + endpoint).toPromise();
  }

  getFirstName():Promise<string>{
    return this.sendRequestToExpress('/firstName').then((data) => {
      return data
    });
  }

  getMiddleName():Promise<string>{
    return this.sendRequestToExpress('/middleName').then((data) => {
      return data
    });
  }

  getLastName():Promise<string>{
    return this.sendRequestToExpress('/lastName').then((data) => {
      return data
    });
  }

}
