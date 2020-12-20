import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ipo } from 'src/app/Entities/ipo';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-manage-ipos',
  templateUrl: './manage-ipos.component.html',
  styleUrls: ['./manage-ipos.component.css']
})
export class ManageIposComponent implements OnInit {

  filteredOptions:any = [];
  ipos:any = [];
  ipos_copy:any = [];
  inputFromUser:string = "";
  loaded:boolean = false;
  selectedCompanyId:number = 0;
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

  editIpo(ipo:Ipo){
    this.companyService.UpdateIpo(ipo).subscribe(data=>
      {
        console.log(data);
        this.router.navigateByUrl("/manage-ipos");
      },
      err =>{
        console.log(err);
        if(err.status === 400)
        {
          alert("Wrong arguments");
        }
        else{
          alert("Error updating ipo");
        }
      }
      );
  }
  deleteIpo(event, id:number){
    console.log(this.selectedCompanyId);
    console.log(id);
    this.companyService.DeleteIpo(id).subscribe(data=>
      {
        console.log(data);
        this.router.navigateByUrl("/manage-ipos");
      },
      err =>{
        console.log(err);
        if(err.status === 400)
        {
          alert("Wrong arguments");
        }
        else if(err.status === 200){
          alert("ipo deleted");
        }
        else{
          alert("Error deleting ipo");
        }
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
