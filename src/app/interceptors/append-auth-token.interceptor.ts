import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtTokenService } from '../services/jwt-token.service';

@Injectable()
export class AppendAuthTokenInterceptor implements HttpInterceptor {

  constructor(private token:JwtTokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    if(this.token.getIsAuthenticated()){
      console.log(this.token.getToken);
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + this.token.getToken() as string
        }
      });
    }
    
    return next.handle(request);
  }
}
