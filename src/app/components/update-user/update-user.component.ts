import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/Entities/User';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { JwtTokenService } from 'src/app/services/jwt-token.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  user:any = {
    id:0,
  username:'',
  email:'',
  password:'',
  userType:'',
  phone:'',
  confirmed:false

  }
  userId:any;
  constructor(private route: ActivatedRoute, private auth:AuthenticationService) { }

  ngOnInit(): void {
    this.userId= this.route.snapshot.paramMap.get('userId');
    this.auth.getUser(+this.userId).subscribe(data=>{
      this.user = data;
    },err=>{
      console.log(err);
      if(err.status === 400)
        {
          alert("Wrong arguments");
        }
        else if(err.status == 200){
          alert("User obtained");
        }
        else{
          alert("Error getting user");
        }
    });
  }

  updateUser(){
    console.log(this.user);
    this.auth.updateUser(this.user).subscribe(data=>{
      console.log(this.user);
      alert("User updated");
    },err=>{
      console.log(err);
      if(err.status === 400)
        {
          alert("Wrong arguments");
        }
        else if(err.status == 200){
          alert("User Updated");
        }
        else{
          alert("Error updating User");
        }
    })
  }

}
