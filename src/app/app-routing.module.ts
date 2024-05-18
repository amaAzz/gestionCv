import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { JobListComponent } from './job-list/job-list.component';
import { ProfileComponent } from './profile/profile.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { CompanyComponent } from './company/company.component';
import {CompleteProfileComponent} from "./complete-profile/complete-profile.component";

const routes: Routes = [
  {path:'home',component:HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'jobs', component: JobListComponent },
  { path: 'jobs/:id', component: JobDetailComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'complete-profile/:id', component: CompleteProfileComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
