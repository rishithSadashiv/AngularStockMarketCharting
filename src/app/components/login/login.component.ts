import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { JwtTokenService } from 'src/app/services/jwt-token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string='';
  password:string='';
  constructor(private auth:AuthenticationService, private ts:JwtTokenService, private router:Router) { }

  ngOnInit(): void {
  }

  doLogin(){
    this.auth.authenticate(this.username, this.password).subscribe(
      res=>{
        console.log(res);
        console.log(typeof(res));
        this.ts.saveToken(res);
        this.ts.isAuthenticated=true;
        if(res["userType"] === "admin" ){
         this.router.navigateByUrl("/admin-page");
        }else if (res["userType"] === "user"){
          this.router.navigateByUrl("/user-page");
        }
        
      },
      err=>{
        console.log(err);
        if(err.status === 400)
        {
          alert("Invalid username/password");
        }
        else{
          alert("Error logging in");
        }
      }
    );
  }

}
