import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../services/api.service";
import {Router} from "@angular/router";
import {User} from "../model/models";

@Component({
  selector: 'app-registre-company',
  templateUrl: './registre-company.component.html',
  styleUrl: './registre-company.component.css'
})
export class RegistreCompanyComponent {
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
    console.log(this.registerForm.valid)
    if(this.registerForm.valid){
      const user:User = this.registerForm.value;
      let company={}
      this.apiService.addCompany(company).subscribe(
        value =>  {
          user.companyId=value.id
          user.role='company';
          this.apiService.register(user).subscribe(
            () => this.router.navigate(['/complete-company', user.companyId]),
            error => this.error = 'Failed to create candidate profile. Please try again.'
          )
        });
    }

  }

}
