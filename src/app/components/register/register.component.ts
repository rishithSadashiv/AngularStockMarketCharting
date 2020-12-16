import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Entities/User';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:User;
  constructor(private auth:AuthenticationService, private router:Router) { }

  ngOnInit(): void {
    this.user={
      id :0,
      username:"",
      password:"",
      email:"",
      userType:"",
      phone:"",
      confirmed:true
    };
  }

  doRegister(){
    console.log(this.user);
    this.auth.register(this.user).subscribe(
      res=>{
        console.log(res);
        console.log(typeof(res));
        this.router.navigateByUrl("/login");
        alert("Registered");
      },
      err=>{
        console.log(err);
        if(err.status === 400)
        {
          alert("Wrong arguments");
        }
        else{
          alert("Error logging in");
        }
      }
    );
      

  }

}
