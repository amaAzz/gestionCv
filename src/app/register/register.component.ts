// src/app/register/register.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import {User} from "../model/models";

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
    console.log("candidate")
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
    }

  }
}
