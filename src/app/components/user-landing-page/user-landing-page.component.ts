import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/services/company.service';
import { JwtTokenService } from 'src/app/services/jwt-token.service';

@Component({
  selector: 'app-user-landing-page',
  templateUrl: './user-landing-page.component.html',
  styleUrls: ['./user-landing-page.component.css']
})
export class UserLandingPageComponent implements OnInit {

  user:string = '';
  userId:any = '';
  filteredOptions:any = [];
  companies:any = [];
  companies_copy:any = []
  inputFromUser:string = "";
  loaded:boolean = false;
  constructor(public token: JwtTokenService, private router: Router, private companyService:CompanyService) { }

  ngOnInit(): void {
   this.user = this.token.getUsername();
   this.userId = this.token.getId();

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



  logout(){
    this.token.resetToken();
    this.router.navigateByUrl('/login');
  }
}
