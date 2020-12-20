import { Component, OnInit } from '@angular/core';
import { StockExchange } from 'src/app/Entities/stock-exchange';
import { CompanyService } from 'src/app/services/company.service';
import { StockexchangeService } from 'src/app/services/stockexchange.service';

@Component({
  selector: 'app-add-ipo',
  templateUrl: './add-ipo.component.html',
  styleUrls: ['./add-ipo.component.css']
})
export class AddIpoComponent implements OnInit {

  exchanges:any = [];
  ipo:any = {
    ipoId:0,
  companyName:'',
  stockExchange:'',
  pricePerShare:null,
  totalNumberOfShares:null,
  openDateTime:null,
  remarks:''
  }
  constructor(private companyService:CompanyService, private exchangeService:StockexchangeService) { }

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

  AddIpo(){
    console.log(this.ipo);
    this.companyService.AddIpo(this.ipo).subscribe(
      res=>{
        console.log(res);
        alert("Ipo Added");
      },
      err=>{
        console.log(err);
        if(err.status === 400)
        {
          alert("Wrong arguments");
        }
        else{
          alert("Error Adding ipo");
        }
      }
    );

    }

}
