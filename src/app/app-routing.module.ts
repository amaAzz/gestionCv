import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { JobListComponent } from './job-list/job-list.component';
import { ProfileComponent } from './profile/profile.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { CompanyComponent } from './company/company.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'jobs', component: JobListComponent },
  { path: 'jobs/:id', component: JobDetailComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'company', component: CompanyComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
