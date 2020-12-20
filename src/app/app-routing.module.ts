import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLandingPageComponent } from './components/admin-landing-page/admin-landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UploadFilesComponent } from './components/upload-files/upload-files.component';
import { UserLandingPageComponent } from './components/user-landing-page/user-landing-page.component';
import { OnlyAdminUsersGuard } from 'src/app/guards/only-admin-users.guard';
import { OnlyAuthenticatedUsersGuard } from 'src/app/guards/only-authenticated-users.guard';
import { ManageCompaniesComponent } from './components/manage-companies/manage-companies.component';
import { AddCompanyComponent } from 'src/app/components/add-company/add-company.component';
import { EditCompanyComponent } from 'src/app/components/edit-company/edit-company.component';
import { ManageExchangesComponent } from 'src/app/components/manage-exchanges/manage-exchanges.component';
import { ManageIposComponent } from 'src/app/components/manage-ipos/manage-ipos.component';
import { AddExchangeComponent } from './components/add-exchange/add-exchange.component';
import { AddCompanyToExchangeComponent } from './components/add-company-to-exchange/add-company-to-exchange.component';
import { EditIpoComponent } from 'src/app/components/edit-ipo/edit-ipo.component';
import { AddIpoComponent } from './components/add-ipo/add-ipo.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { CheckIpoComponent } from './components/check-ipo/check-ipo.component';
import { CompareComponent } from './components/compare/compare.component';
 

const routes: Routes = [
  {component: LoginComponent, path: "login"},
  {component: RegisterComponent, path: "register"},
  {component: AdminLandingPageComponent, path: "admin-page", canActivate:[OnlyAdminUsersGuard]},
  {component: UserLandingPageComponent, path: "user-page", canActivate:[OnlyAuthenticatedUsersGuard]},
  {component: UploadFilesComponent, path: "upload-files", canActivate:[OnlyAdminUsersGuard]},
  {component: ManageCompaniesComponent, path: "manage-companies", canActivate:[OnlyAdminUsersGuard]},
  {component: AddCompanyComponent, path: "add-company", canActivate:[OnlyAdminUsersGuard]},
  {component: EditCompanyComponent, path:'edit-product/:productId', canActivate:[OnlyAdminUsersGuard]},
  {component: ManageExchangesComponent, path:'manage-exchanges', canActivate:[OnlyAdminUsersGuard]},
  {component: ManageIposComponent, path:'manage-ipos', canActivate:[OnlyAdminUsersGuard]},
  {component: AddExchangeComponent, path:'add-exchange', canActivate:[OnlyAdminUsersGuard]},
  {component: AddCompanyToExchangeComponent, path:'add-company-to-exchange', canActivate:[OnlyAdminUsersGuard]},
  {component: EditIpoComponent, path:'edit-ipo/:ipoId', canActivate:[OnlyAdminUsersGuard]},
  {component: AddIpoComponent, path:'add-ipo', canActivate:[OnlyAdminUsersGuard]},
  {component: UpdateUserComponent, path:'update-user/:userId', canActivate:[OnlyAuthenticatedUsersGuard]},
  {component: CheckIpoComponent, path:'check-ipo', canActivate:[OnlyAuthenticatedUsersGuard]},
  {component: CompareComponent, path:'compare', canActivate:[OnlyAuthenticatedUsersGuard]},
  {path:"", redirectTo: "login", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
