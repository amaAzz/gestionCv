// src/app/register/register.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import {Company, User} from "../model/models";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required],
      email:['',[Validators.required ,Validators.email]]
    });
  }

  onSubmit(): void {
    if(this.registerForm.valid){
      if(this.registerForm.value.role=="candidate"){
        const { username, password, role, name, email } = this.registerForm.value;
      let candidat={}
      this.apiService.addCandidateProfile(candidat).subscribe(
        value =>  {
      const user = { username, password, role, candidateId: value.id };
      this.apiService.register(user).subscribe(
        () => this.router.navigate(['/complete-profile', user.candidateId]),
        error => this.error = 'Failed to create candidate profile. Please try again.'
      )
        });

    }
      if(this.registerForm.value.role=="company"){
        const user:User = this.registerForm.value;
        let company={}
        this.apiService.addCompany(company).subscribe(
          value =>  {
            user.companyId=value.id
            this.apiService.register(user).subscribe(
              () => this.router.navigate(['/complete-company', user.companyId]),
              error => this.error = 'Failed to create candidate profile. Please try again.'
            )
          });
      }
    }

  }
}
