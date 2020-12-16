import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtTokenService {
  isAuthenticated:boolean = false;
  constructor() { }

  saveToken(token:any){
    this.isAuthenticated = true;
    window.localStorage.setItem("isAuthenticated", "yes");
    window.localStorage.setItem("id", token.id);
    window.localStorage.setItem("username", token.username);
    window.localStorage.setItem("userType", token.userType);
    window.localStorage.setItem("token", token.jwt);
  }
  getIsAuthenticated() {
   
    return window.localStorage.getItem('isAuthenticated') === 'yes';
  }

  getId(){
    return window.localStorage.getItem("id");
  }

  getUsername(){
    return window.localStorage.getItem("username");
  }

  getUserType(){
    return window.localStorage.getItem("userType");
  }

  getToken(){
    return window.localStorage.getItem("token");
  }

  resetToken() {
    window.localStorage.removeItem('isAuthenticated');
    window.localStorage.removeItem('username');
    window.localStorage.removeItem('userType');
    window.localStorage.removeItem('token');
  }
}
