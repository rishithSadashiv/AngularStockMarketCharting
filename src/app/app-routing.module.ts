import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLandingPageComponent } from './components/admin-landing-page/admin-landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UploadFilesComponent } from './components/upload-files/upload-files.component';
import { UserLandingPageComponent } from './components/user-landing-page/user-landing-page.component';


const routes: Routes = [
  {component: LoginComponent, path: "login"},
  {component: AdminLandingPageComponent, path: "admin-page"},
  {component: UserLandingPageComponent, path: "user-page"},
  {component: UploadFilesComponent, path: "upload-files"},
  {component: RegisterComponent, path: "register"},
  {path:"", redirectTo: "login", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
