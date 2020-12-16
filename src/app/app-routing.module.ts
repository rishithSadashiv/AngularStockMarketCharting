import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLandingPageComponent } from './components/admin-landing-page/admin-landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UploadFilesComponent } from './components/upload-files/upload-files.component';
import { UserLandingPageComponent } from './components/user-landing-page/user-landing-page.component';
import { OnlyAdminUsersGuard } from 'src/app/guards/only-admin-users.guard';
import { OnlyAuthenticatedUsersGuard } from 'src/app/guards/only-authenticated-users.guard';

const routes: Routes = [
  {component: LoginComponent, path: "login"},
  {component: AdminLandingPageComponent, path: "admin-page", canActivate:[OnlyAdminUsersGuard]},
  {component: UserLandingPageComponent, path: "user-page", canActivate:[OnlyAuthenticatedUsersGuard]},
  {component: UploadFilesComponent, path: "upload-files", canActivate:[OnlyAdminUsersGuard]},
  {component: RegisterComponent, path: "register"},
  {path:"", redirectTo: "login", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
