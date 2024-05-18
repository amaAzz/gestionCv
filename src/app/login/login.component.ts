import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.apiService.getUsers().subscribe(users => {
        const user = users.find((u: any) => u.email === email && u.password === password);
        if (user) {
          // Stocker les informations de l'utilisateur dans localStorage ou une autre méthode de gestion de session
          localStorage.setItem('currentUser', JSON.stringify(user));
          // Rediriger l'utilisateur vers la page d'accueil ou une autre page
          this.router.navigate(['/']);
        } else {
          alert('Email ou mot de passe incorrect.');
        }
      });
    }
  }
}
