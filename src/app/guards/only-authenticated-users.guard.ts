import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtTokenService } from 'src/app/services/jwt-token.service';

@Injectable({
  providedIn: 'root'
})
export class OnlyAuthenticatedUsersGuard implements CanActivate {
  
  constructor(private token:JwtTokenService, private router:Router){}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if(this.token.getIsAuthenticated() && this.token.getUserType() == 'user'){
      return true;
    }else{
      this.token.resetToken();
      alert("Only Authenticated Users Are Allowed.");
      this.router.navigateByUrl('/login');
    }   
  }
  
}
