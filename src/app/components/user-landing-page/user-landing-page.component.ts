import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtTokenService } from 'src/app/services/jwt-token.service';

@Component({
  selector: 'app-user-landing-page',
  templateUrl: './user-landing-page.component.html',
  styleUrls: ['./user-landing-page.component.css']
})
export class UserLandingPageComponent implements OnInit {

  constructor(public token: JwtTokenService, private router: Router) { }

  ngOnInit(): void {
  }


  logout(){
    this.token.resetToken();
    this.router.navigateByUrl('/login');
  }
}
