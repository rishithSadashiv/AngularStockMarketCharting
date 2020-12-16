import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/Entities/User';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  
  loginUrl:string = "http://localhost:53595/api/userservice/auth/login";
  registerUrl:string = "http://localhost:53595/api/userservice/auth/register"; 
  constructor(private http: HttpClient) { }

  authenticate(username:string, password:string){
    var obj = {
      username:username,
      password:password
    }
    return this.http.post(this.loginUrl, obj);
  }

  register(user:User){
    return this.http.post(this.registerUrl, user)
  }

}
