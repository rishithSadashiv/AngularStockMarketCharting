import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/Entities/company';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-manage-companies',
  templateUrl: './manage-companies.component.html',
  styleUrls: ['./manage-companies.component.css']
})
export class ManageCompaniesComponent implements OnInit {

  filteredOptions:any = [];
  companies:any = [];
  companies_copy:any = []
  inputFromUser:string = "";
  selectedCompanyId:number; 
  loaded:boolean = false;
  constructor(private companyService:CompanyService, private router:Router) { }

  ngOnInit(): void {
    this.companyService.GetAllCompanies().subscribe(data => {
      console.log(data);
      this.companies = data;
      this.loaded = true;
      this.companies_copy = this.companies;
    },
    err => {
      console.log(err);
    });
  }


  editCompany(company:Company){
    this.companyService.UpdateCompany(company).subscribe(data=>
      {
        console.log(data);
        this.router.navigateByUrl("/manage-companies");
      },
      err =>{
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
  }
  deleteCompany(event, id:number){
    console.log(this.selectedCompanyId);
    console.log(id);
    this.companyService.DeleteCompany(id).subscribe(data=>
      {
        console.log(data);
        this.router.navigateByUrl("/manage-companies");
      },
      err =>{
        console.log(err);
        if(err.status === 400)
        {
          alert("Wrong arguments");
        }
        else if(err.status === 200){
          alert("Company deleted");
        }
        else{
          alert("Error deleting company");
        }
      });
  }

  deactivateCompany(event,id:number){
    console.log(id);
    this.companyService.DeactivateCompany(id).subscribe(res=>{
      console.log(res);
      alert("Company activated/deactivated");
      location.reload();
    },
    err=>{
      console.log(err);
      if(err.status === 400)
        {
          alert("Wrong arguments");
        }
        else if(err.status === 200){
          alert("Company activated/deactivated");
        }
        else{
          alert("Error activating/deactivating company");
        }
    })
  }

  filterThroughList(){
    console.log(this.inputFromUser);
    this.filteredOptions = this.companies_copy.filter(
      item=> item.companyName.toLowerCase().includes(this.inputFromUser.toLowerCase())
    );
      if(this.inputFromUser.length > 0){
        this.companies = this.filteredOptions;
      }else{
        this.companies = this.companies_copy;
      }
  }


}
