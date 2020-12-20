import { Component, OnInit } from '@angular/core';
import { StockExchange } from 'src/app/Entities/stock-exchange';
import { StockexchangeService } from 'src/app/services/stockexchange.service';

@Component({
  selector: 'app-add-exchange',
  templateUrl: './add-exchange.component.html',
  styleUrls: ['./add-exchange.component.css']
})
export class AddExchangeComponent implements OnInit {


  exchange:StockExchange = {
    id:0,
    stockExchangeName:'',
    brief:'',
    contactAddress:'',
    remarks:''
  }

  constructor(private exchangeService:StockexchangeService) { }

  ngOnInit(): void {
  }

  AddExchange(){
    this.exchangeService.AddStockExchange(this.exchange).subscribe(data=>{
      console.log(data);
      alert("Added Stock Exchange");
    },err=>{
      console.log(err);
        if(err.status === 400)
        {
          alert("Wrong arguments");
        }
        else{
          alert("Error Adding company");
        }
    });
  }

}
