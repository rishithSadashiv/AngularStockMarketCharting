import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ipo } from 'src/app/Entities/ipo';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-edit-ipo',
  templateUrl: './edit-ipo.component.html',
  styleUrls: ['./edit-ipo.component.css']
})
export class EditIpoComponent implements OnInit {

  ipo:any = {
    ipoId:0,
  companyName:'',
  stockExchange:'',
  pricePerShare:null,
  totalNumberOfShares:null,
  openDateTime:null,
  remarks:''
  }

  ipoId:any;
  constructor(private route:ActivatedRoute, private companyService:CompanyService) { }

  ngOnInit(): void {
    this.ipoId= this.route.snapshot.paramMap.get('ipoId');
    this.companyService.GetIpoById(+this.ipoId).subscribe(res=>{
      console.log(res)
      this.ipo = res;
    },
    err=>{
      console.log(err);
    }
    );
  }


  editIpo(){
    console.log(this.ipo);
    this.companyService.UpdateIpo(this.ipo).subscribe(res=>
      {
        console.log(res);
        alert("Ipo updated");
      },err=>{
        console.log(err);
        if(err.status === 400)
        {
          alert("Wrong arguments");
        }
        else{
          alert("Error Updating Ipo");
        }
      })
  }

}
