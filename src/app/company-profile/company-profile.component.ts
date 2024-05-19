import { Component } from '@angular/core';
import {Company} from "../model/models";
import {ApiService} from "../services/api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrl: './company-profile.component.css'
})
export class CompanyProfileComponent {
  companyId ?: string | undefined;
  company?:Company
  constructor(
    private apiService:ApiService,
    private route: ActivatedRoute,
  ){}
  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('id'))
    this.companyId = this.route.snapshot.paramMap.get('id')?.toString();
    this.apiService.getCompany(this.companyId).subscribe(value =>
      this.company=value)
  }
}
