import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GatewayUrls } from './gatewayurls';

@Injectable({
  providedIn: 'root'
})
export class SectorService {

  private urls = new GatewayUrls();
  constructor(private http:HttpClient) { }

  AddCompany(company){
    return this.http.post(this.urls.SectorEndpoint_C_Endpoint, company);
  }

  GetSectors(){
    return this.http.get(this.urls.SectorEndpoint_S_Endpoint);
  }

}
