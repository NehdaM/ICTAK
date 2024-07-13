import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url="http://localhost:1101/login";
  
  constructor(private http:HttpClient){ }

  loginUser( data: any){
    // return this.http.post('{this.url} /login' ,{email,password})
    return this.http.post(this.url, data);
  }
}
