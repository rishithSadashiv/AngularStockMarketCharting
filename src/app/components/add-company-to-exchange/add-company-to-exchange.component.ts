import { Component, OnInit } from '@angular/core';
import { ECompany } from 'src/app/Entities/ecompany';
import { SectorService } from 'src/app/services/sector.service';
import { StockexchangeService } from 'src/app/services/stockexchange.service';

@Component({
  selector: 'app-add-company-to-exchange',
  templateUrl: './add-company-to-exchange.component.html',
  styleUrls: ['./add-company-to-exchange.component.css']
})
export class AddCompanyToExchangeComponent implements OnInit {

  company:ECompany = {
    id:0, 
  companyName:'',
  companyCode:'',
  stockExchangeName:''
  }
  exchanges:any = [];
  constructor(private exchangeService:StockexchangeService, private sectorService:SectorService) { }

  ngOnInit(): void {
    
    this.exchangeService.GetStockExchanges().subscribe(data=>{
      console.log(data);
      this.exchanges = data;
    },err=>{
      if(err.status === 400)
        {
          alert("Wrong arguments");
        }
        else{
          alert("Error getting exchanges");
        }
    });
  }

  AddCompanyToExchange(){
    console.log(this.company);
    this.exchangeService.AddCompany(this.company).subscribe(data=>{
      console.log(data);
      alert("Company Added");
    },err=>{
      if(err.status === 400)
        {
          alert("Wrong arguments");
        }
        else{
          alert("Error getting exchanges");
        }
    })

  }

  

}
