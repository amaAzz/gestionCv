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
import {CompleteCompanyComponent} from "./complete-company/complete-company.component";
import {CompanyProfileComponent} from "./company-profile/company-profile.component";
import {RegistreCondidatComponent} from "./registre-condidat/registre-condidat.component";
import {RegistreCompanyComponent} from "./registre-company/registre-company.component";
import {candidateAuthGuard} from "./guard/candidate-auth.guard";
import {companyAuthGuard} from "./guard/company-auth.guard";
import {CompanyNavbarComponent} from "./company-navbar/company-navbar.component";
import {AddJobComponent} from "./add-job/add-job.component";

const routes: Routes = [
  { path:'home',component:HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'register/candidate',component:RegistreCondidatComponent},
  { path: 'register/company',component:RegistreCompanyComponent},
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'jobs', component: JobListComponent },
  { path: 'jobs/:id', component: JobDetailComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'company/:id', component: CompanyProfileComponent},
  { path: 'complete-profile/:id', component: CompleteProfileComponent},
  { path: 'complete-company/:id', component: CompleteCompanyComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'company/add/Jobs',component:AddJobComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
