import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartOptions, ChartType} from 'chart.js';
import { Label } from 'ng2-charts';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {

  showLegends: true;
  chartType: ChartType = 'bar';
  options: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks:{
          min: 0
        }
      }]
    }
  };
  xAxesLabels : Label[] = [];
  dataSets: any = [];

  displayChart:boolean = false;
  selectedComparison:string = '2';
  list1:any = [];
  list2:any = [];
  list1_copy:any = [];
  name1:string = '';
  name2:string = '';
  fromDate1:any = null;
  toDate1:any = null;
  fromDate2:any = null;
  toDate2:any = null;
  constructor(private companyService:CompanyService, private route:Router) { }

  ngOnInit(): void {
    // this.stockPrices = this.companyService.GetAllStockPricesOfAllCompaniesBetweenDates()
  }

  GenerateMap(){
    if(this.selectedComparison == '1'){
      this.companyService.GetAllStockPricesOfCompanyBetweenDates(this.name1, this.fromDate1, this.toDate1).subscribe(data=>{
        this.list1 = data;
        console.log(this.list1);

  
        this.xAxesLabels = [...new Set(this.list1.map(d=>d.dateOfPrice))] as string[];
  
        const productnames1 = [...new Set(this.list1.map(d=>d.companyName))] as string[];
  
        console.log(this.xAxesLabels);
        console.log(productnames1);
  
        for(let p of productnames1){
          const ds = {label: p, data: []};
          ds.data = this.list1.filter(i=>i.companyName===p).map(j=>j.currentPrice);
          this.dataSets.push(ds);
        }
  
        this.displayChart = true;
        console.log(this.dataSets);
  
  
      },err=>{
        console.log(err);
      });
    }else if(this.selectedComparison == '2'){
      this.companyService.GetAllStockPricesOfAllCompaniesBetweenDates(this.fromDate1, this.toDate1).subscribe(data=>{
        this.list1 = data;
        console.log(this.list1);

        this.list1 = this.list1.filter(i=> i.companyName == this.name1 || i.companyName == this.name2);
  
        this.xAxesLabels = [...new Set(this.list1.map(d=>d.dateOfPrice))] as string[];
  
        const productnames2 = [ this.name1, this.name2] as string[];
  
        console.log(this.xAxesLabels);
        console.log(productnames2);
  
        for(let p of productnames2){
        
          const ds = {label: p, data: []};
          ds.data = this.list1.filter(i=>i.companyName===p).map(j=>j.currentPrice);
          this.dataSets.push(ds);
        }

        // for (let date of this.xAxesLabels){
        //   for (let p of productnames2){
        //     const ds = {label: p, data: []};
        //     ds.data = this.list1.filter(i=>i.companyName===p && i.dateOfPrice === date).map(j=>j.currentPrice);
        //     this.dataSets.push(ds);
        //   }
        // }

  
        this.displayChart = true;
        console.log(this.dataSets);
  
  
      },err=>{
        console.log(err);
      });
    }else if(this.selectedComparison == '3'){
      // for comparisons between sectors
    }else{
      // for comparison between company and sector
    }
     
  }

  Export(){

  }

  Refresh(){
    location.reload();
  }

}
