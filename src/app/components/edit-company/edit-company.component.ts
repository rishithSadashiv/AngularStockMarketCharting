import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'src/app/Entities/company';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css']
})
export class EditCompanyComponent implements OnInit {

  company:any = {
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

  companyId:any;
  constructor(private route:ActivatedRoute, private companyService:CompanyService) { }

  ngOnInit(): void {
    this.companyId= this.route.snapshot.paramMap.get('productId');
    this.companyService.GetCompany(+this.companyId).subscribe(res=>{
      console.log(res)
      this.company = res;
    },
    err=>{
      console.log(err);
    }
    );
  }

  editCompany(){
    console.log(this.company);
    this.companyService.UpdateCompany(this.company).subscribe(res=>
      {
        console.log(res);
        alert("Company updated");
      },err=>{
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
