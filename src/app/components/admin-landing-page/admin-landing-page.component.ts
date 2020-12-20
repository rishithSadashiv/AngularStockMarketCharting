import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtTokenService } from 'src/app/services/jwt-token.service';

@Component({
  selector: 'app-admin-landing-page',
  templateUrl: './admin-landing-page.component.html',
  styleUrls: ['./admin-landing-page.component.css']
})
export class AdminLandingPageComponent implements OnInit {

  user:string = '';
  constructor(public token: JwtTokenService, private router: Router) { }

  ngOnInit(): void {
    this.user = this.token.getUsername();
  }






  logout(){
    this.token.resetToken();
    this.router.navigateByUrl('/login');
  }

}
