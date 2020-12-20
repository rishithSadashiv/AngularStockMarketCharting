import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/Entities/company';
import { CompanyService } from 'src/app/services/company.service';
import { SectorService } from 'src/app/services/sector.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

 
  company:Company = {
    companyId:0,
    companyName:'',
    turnover:null,
    companyCode:'',
    ceo:'',
    boardOfDirectors:'',
    sector:'',
    currentStockPrice:null,
    active:true
  }
  sectors:any = [];
  added:boolean=false;
  constructor(private companyService:CompanyService, private sectorService:SectorService) { }

  ngOnInit(): void {
    this.sectorService.GetSectors().subscribe(data=>{
      console.log(data);
      this.sectors = data;
    },err=>{
      console.log(err);
      if(err.status === 400)
        {
          alert("Wrong arguments");
        }
        else{
          alert("Error getting sectors");
        }
    });
  }

  addCompany(){
    console.log(this.company);
    this.companyService.AddCompany(this.company).subscribe(
      res=>{
        console.log(res);
        this.added = true;
      },
      err=>{
        console.log(err);
        if(err.status === 400)
        {
          alert("Wrong arguments");
        }
        else{
          alert("Error Adding company");
        }
      }
    );
    if(this.added){
      var Obj = {
        companyName:this.company.companyName,
        CompanyCode:this.company.companyCode,
        Sector:this.company.sector,
        turnover:this.company.turnover
      }
      this.sectorService.AddCompany(Obj).subscribe(res=>{
        this.added=false;
        console.log(res);
        alert("Company Added");
      },
      err=>{
        console.log(err);
        if(err.status === 400)
        {
          alert("Wrong arguments");
        }
        else{
          alert("Error Adding company");
        }
      })
    }
  }

}
