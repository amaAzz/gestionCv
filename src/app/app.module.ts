import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { ProfileComponent } from './profile/profile.component';
import { CompanyComponent } from './company/company.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import { CompleteProfileComponent } from './complete-profile/complete-profile.component';
import { CompleteCompanyComponent } from './complete-company/complete-company.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { RegistreCondidatComponent } from './registre-condidat/registre-condidat.component';
import { RegistreCompanyComponent } from './registre-company/registre-company.component';
import { AddJobComponent } from './add-job/add-job.component';
import {CompanyNavbarComponent} from "./company-navbar/company-navbar.component";
import { PostulationJobComponent } from './postulation-job/postulation-job.component';
import { ListPostulationComponent } from './list-postulation/list-postulation.component';
import { PostulationCandidatComponent } from './postulation-candidat/postulation-candidat.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    JobListComponent,
    JobDetailComponent,
    ProfileComponent,
    CompanyComponent,
    HeaderComponent,
    CompleteProfileComponent,
    CompleteCompanyComponent,
    CompanyProfileComponent,
    RegistreCondidatComponent,
    RegistreCompanyComponent,
    AddJobComponent,
    CompanyNavbarComponent,
    PostulationJobComponent,
    ListPostulationComponent,
    PostulationCandidatComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
