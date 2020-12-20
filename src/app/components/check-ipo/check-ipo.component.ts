import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-check-ipo',
  templateUrl: './check-ipo.component.html',
  styleUrls: ['./check-ipo.component.css']
})
export class CheckIpoComponent implements OnInit {

  filteredOptions:any = [];
  ipos:any = [];
  ipos_copy:any = [];
  inputFromUser:string = "";
  loaded:boolean = false;
  constructor(private companyService:CompanyService, private router:Router) { }

  ngOnInit(): void {
    this.companyService.GetAllIpos().subscribe(data => {
      console.log(data);
      this.ipos = data;
      this.loaded = true;
      this.ipos_copy = this.ipos;
    },
    err => {
      console.log(err);
    });
  }

  filterThroughList(){
    console.log(this.inputFromUser);
    this.filteredOptions = this.ipos_copy.filter(
      item=> item.companyName.toLowerCase().includes(this.inputFromUser.toLowerCase())
    );
      if(this.inputFromUser.length > 0){
        this.ipos = this.filteredOptions;
      }else{
        this.ipos = this.ipos_copy;
      }
  }

}
