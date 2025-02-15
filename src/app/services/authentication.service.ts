import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/Entities/User';
import { GatewayUrls } from './gatewayurls';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private urls = new GatewayUrls();
  constructor(private http: HttpClient) { }

  authenticate(username:string, password:string){
    var obj = {
      username:username,
      password:password
    }
    return this.http.post(this.urls.LoginEndpoint, obj);
  }

  register(user:User){
    return this.http.post(this.urls.RegisterEndpoint, user)
  }

  getUser(id:number){
    return this.http.get(this.urls.User_Endpoint + '/' + id.toString());
  }

  updateUser(user:any){
    return this.http.put(this.urls.User_Endpoint, user);
  }

}
