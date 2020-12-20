import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockExchange } from 'src/app/Entities/stock-exchange';
import { StockexchangeService } from 'src/app/services/stockexchange.service';

@Component({
  selector: 'app-manage-exchanges',
  templateUrl: './manage-exchanges.component.html',
  styleUrls: ['./manage-exchanges.component.css']
})
export class ManageExchangesComponent implements OnInit {

  exchanges:any = [];
  exchanges_copy:any = [];
  loaded:boolean = false;
  inputFromUser:string = "";
  filteredOptions:any = []
  constructor(private exchangeService:StockexchangeService, private router:Router) { }

  ngOnInit(): void {
    this.exchangeService.GetStockExchanges().subscribe(data=>{
      console.log(data);
      this.exchanges = data;
      this.loaded = true;
      this.exchanges_copy = this.exchanges;
    },
    err=>{
      console.log(err);
    });
  }

  filterThroughList(){
    console.log(this.inputFromUser);
    this.filteredOptions = this.exchanges_copy.filter(
      item=> item.stockExchangeName.toLowerCase().includes(this.inputFromUser.toLowerCase())
    );
      if(this.inputFromUser.length > 0){
        this.exchanges = this.filteredOptions;
      }else{
        this.exchanges = this.exchanges_copy;
      }
  }

}
