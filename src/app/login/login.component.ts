import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService:AuthService,
    private router: Router,
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.loginForm.valid)
    if (this.authService.login(this.loginForm.value.username, this.loginForm.value.password)) {
      if(localStorage.getItem("isAuthenticatedCompany")==="true"){
        this.router.navigate(['/company/'+localStorage.getItem("idCompany")]);
      }else{
        this.router.navigate(['/jobs']);
      }

    } else {
      alert('Username ou mot de passe incorrect.');
    }


  }
}
