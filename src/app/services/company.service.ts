import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GatewayUrls } from './gatewayurls';
import { Company } from 'src/app/Entities/company';
import { Ipo } from 'src/app/Entities/ipo';
import { Stockprice } from 'src/app/Entities/stockprice';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private urls = new GatewayUrls();
  constructor(private http:HttpClient) { }

  AddCompany(company:Company){
    return this.http.post(this.urls.CompanyEndpoint1, company);
  }

  DeactivateCompany(id:number){
    return this.http.get(this.urls.CompanyEndpoint1+'/'+String(id)+'/deactivateCompany');
  }

  DeleteCompany(id:number){
    return this.http.delete(this.urls.CompanyEndpoint1 + '/' + id.toString());
  }

  GetAllCompanies(){
    return this.http.get(this.urls.CompanyEndpoint1);
  }

  GetAllCompaniesLike(str:string){
    return this.http.get(this.urls.CompanyEndpoint1 + '/' + str + '/companiesLike');
  }

  GetCompany(id:number){
    return this.http.get(this.urls.CompanyEndpoint1 + '/' + String(id));
  }

  UpdateCompany(company:Company){
    return this.http.put(this.urls.CompanyEndpoint1, company);
  }

  // ------------------------------------------------------------------------------------

  AddIpo(ipo:Ipo){
    return this.http.post(this.urls.IpoEndpoint, ipo);
  }

  DeleteIpo(id:number){
    return this.http.delete(this.urls.IpoEndpoint + '/' + String(id));
  }


  GetAllIpos(){
    return this.http.get(this.urls.IpoEndpoint);
  }

  GetIpoById(Id:number){
    return this.http.get(this.urls.IpoEndpoint + '/' + Id.toString());
  }


  GetIposOfCompany(name:string){
    return this.http.get(this.urls.IpoEndpoint + '/' + name + '/company')
  }

  UpdateIpo(ipo:Ipo){
    return this.http.put(this.urls.IpoEndpoint, ipo);

  }


  //----------------------------------------------------------------------------

  AddStockPrice(stockprice:Stockprice){
    return this.http.post(this.urls.stockpriceEndpoint, stockprice);
  }

  DeleteStockPrice(id:number){
    return this.http.delete(this.urls.stockpriceEndpoint + '/' + String(id));
  }


  GetStockPricesOfCompany(name:string){
    return this.http.get(this.urls.stockpriceEndpoint + '/' + name + '/company');
  }

  GetAllStockPricesOfCompanyBetweenDates(name:string, fromDate:Date, toDate:Date){
    console.log(this.urls.stockpriceEndpoint + '/' + 'stockPrices' +'?name='
    + name + '&fromDate='
    + fromDate 
    + '&toDate=' + toDate)
    return this.http.get(this.urls.stockpriceEndpoint + '/' + 'stockPrices' +'?name='
                                    + name + '&fromDate='
                                    + fromDate 
                                    + '&toDate=' + toDate);

  }

  GetAllStockPricesOfAllCompaniesBetweenDates(fromDate:Date, toDate:Date){
    return this.http.get(this.urls.stockpriceEndpoint+ '/' + 'allStockPrices' +'?fromDate='
                                    + fromDate 
                                    + '&toDate=' + toDate);

  }

}
