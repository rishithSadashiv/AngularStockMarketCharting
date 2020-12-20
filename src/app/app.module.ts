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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UploadFilesComponent } from './components/upload-files/upload-files.component';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { JwtTokenService } from 'src/app/services/jwt-token.service';
import { RegisterComponent } from './components/register/register.component';
import { AppendAuthTokenInterceptor } from 'src/app/interceptors/append-auth-token.interceptor';
import { ManageCompaniesComponent } from './components/manage-companies/manage-companies.component';
import { AddCompanyComponent } from './components/add-company/add-company.component';
import { EditCompanyComponent } from './components/edit-company/edit-company.component';
import { ManageExchangesComponent } from './components/manage-exchanges/manage-exchanges.component';
import { ManageIposComponent } from './components/manage-ipos/manage-ipos.component';
import { AddExchangeComponent } from './components/add-exchange/add-exchange.component';
import { AddCompanyToExchangeComponent } from './components/add-company-to-exchange/add-company-to-exchange.component';
import { EditIpoComponent } from './components/edit-ipo/edit-ipo.component';
import { AddIpoComponent } from './components/add-ipo/add-ipo.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { CheckIpoComponent } from './components/check-ipo/check-ipo.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    AdminLandingPageComponent,
    UserLandingPageComponent,
    LoginComponent,
    UploadFilesComponent,
    RegisterComponent,
    ManageCompaniesComponent,
    AddCompanyComponent,
    EditCompanyComponent,
    ManageExchangesComponent,
    ManageIposComponent,
    AddExchangeComponent,
    AddCompanyToExchangeComponent,
    EditIpoComponent,
    AddIpoComponent,
    UpdateUserComponent,
    CheckIpoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [
    CompanyService,
    SectorService,
    UploadService,
    StockexchangeService,
    AuthenticationService,
    JwtTokenService,
    StockexchangeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppendAuthTokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
