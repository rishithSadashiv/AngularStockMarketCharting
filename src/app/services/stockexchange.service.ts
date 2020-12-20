import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GatewayUrls } from './gatewayurls';
import { StockExchange } from 'src/app/Entities/stock-exchange';
import { ECompany } from 'src/app/Entities/ecompany';

@Injectable({
  providedIn: 'root'
})
export class StockexchangeService {

  private urls = new GatewayUrls();
  constructor(private http:HttpClient) { }

  AddStockExchange(s:StockExchange){
    return this.http.post(this.urls.StockExchange_SE_Endpoint, s);
  }

  GetStockExchanges(){
    return this.http.get(this.urls.StockExchange_SE_Endpoint);
  }

  AddCompany(c:ECompany){
    return this.http.post(this.urls.StockExchange_C_Endpoing, c);
  }

  GetAllCompanies(){
    return this.http.get(this.urls.StockExchange_C_Endpoing);
  }


}
