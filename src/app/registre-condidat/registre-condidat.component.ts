import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import {Company, User} from "../model/models";

@Component({
  selector: 'app-registre-condidat',
  templateUrl: './registre-condidat.component.html',
  styleUrl: './registre-condidat.component.css'
})
export class RegistreCondidatComponent {
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
      email:['',[Validators.required ,Validators.email]]
    });
  }

  onSubmit(): void {
    if(this.registerForm.valid){
        const { username, password, role, name, email } = this.registerForm.value;
        let candidat={}
        this.apiService.addCandidateProfile(candidat).subscribe(
          value =>  {
            const user = { username, password, role:'candidate', candidateId: value.id };
            this.apiService.register(user).subscribe(
              () => this.router.navigate(['/complete-profile', user.candidateId]),
              error => this.error = 'Failed to create candidate profile. Please try again.'
            )
          });
    }

  }
}

