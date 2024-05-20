import { Component } from '@angular/core';
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-company-navbar',
  templateUrl: './company-navbar.component.html',
  styleUrl: './company-navbar.component.css'
})
export class CompanyNavbarComponent {
  constructor(private router:Router) {
  }

  goToAddJobs() {
    this.router.navigate(['/company/add/Jobs'])
  }
}
