import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLandingPageComponent } from './components/admin-landing-page/admin-landing-page.component';
import { UserLandingPageComponent } from './components/user-landing-page/user-landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { CompanyService } from 'src/app/services/company.service';
import { UploadService } from 'src/app/services/upload.service';
import { SectorService } from 'src/app/services/sector.service';
import { StockexchangeService } from 'src/app/services/stockexchange.service';
import { HttpClientModule } from '@angular/common/http';
import { UploadFilesComponent } from './components/upload-files/upload-files.component';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { JwtTokenService } from 'src/app/services/jwt-token.service';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLandingPageComponent,
    UserLandingPageComponent,
    LoginComponent,
    UploadFilesComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    CompanyService,
    SectorService,
    UploadService,
    StockexchangeService,
    AuthenticationService,
    JwtTokenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
