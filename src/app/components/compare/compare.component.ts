import { Component, OnInit } from '@angular/core';
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
  name1:string = '';
  name2:string = '';
  fromDate1:any = null;
  toDate1:any = null;
  fromDate2:any = null;
  toDate2:any = null;
  constructor(private companyService:CompanyService) { }

  ngOnInit(): void {
    // this.stockPrices = this.companyService.GetAllStockPricesOfAllCompaniesBetweenDates()
  }

  GenerateMap(){
    this.companyService.GetAllStockPricesOfCompanyBetweenDates(this.name1, this.fromDate1, this.toDate1).subscribe(data=>{
      this.list1 = data;
      console.log(this.list1);

      this.xAxesLabels = [...new Set(this.list1.map(d=>d.dateOfPrice))] as string[];

      const productnames = [...new Set(this.list1.map(d=>d.companyName))] as string[];

      console.log(this.xAxesLabels);
      console.log(productnames);

      for(let p of productnames){
        const ds = {label: p, data: []};
        ds.data = this.list1.filter(i=>i.companyName===p).map(j=>j.currentPrice);
        this.dataSets.push(ds);
      }

      this.displayChart = true;
      console.log(this.dataSets);


    },err=>{
      console.log(err);
    });
    this.companyService.GetAllStockPricesOfCompanyBetweenDates(this.name2, this.fromDate2, this.toDate2).subscribe(data=>{
      this.list2 = data;
      console.log(this.list2);
    },err=>{
      console.log(err);
    });

    
    
  }

}
