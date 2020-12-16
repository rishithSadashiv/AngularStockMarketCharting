import { Injectable } from '@angular/core';
import { GatewayUrls } from './gatewayurls';
import { JwtTokenService } from './jwt-token.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  private urls = new GatewayUrls();
  constructor(private http: HttpClient) { }

  upload(data: any){
    return this.http.post(this.urls.UploadExcelEndpoint, data);//, {headers: this.header});
  }
}
