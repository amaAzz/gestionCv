import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../services/api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Job} from "../model/models";

@Component({
  selector: 'app-complete-company',
  templateUrl: './complete-company.component.html',
  styleUrl: './complete-company.component.css'
})
export class CompleteCompanyComponent {
  completeCompany:FormGroup;
  companyId ?: string | undefined;
  error:string | null=null;

  constructor(
    private fb:FormBuilder,
    private apiService:ApiService,
    private route:ActivatedRoute,
    private router:Router
  ) {
    this.completeCompany=this.fb.group({
      name:['',Validators.required],
      description: ['',Validators.required],
      location: ['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      phone:['',Validators.required],
      linkedin:['',Validators.required],
         })

  }

  ngOnInit(){
    this.companyId= this.route.snapshot.paramMap.get('id')?.toString();
    console.log(this.companyId)
  }

  onSubmit() {
    if(this.completeCompany.valid){
      const company={
        ...this.completeCompany.value,
        id:this.companyId
      };
      console.log(company)
      this.apiService.completeCompany(company,this.companyId).subscribe(()=>
        this.router.navigate(['/company',this.companyId]),
        ()=>this.error="failed to complete company profile please try again"
      );

    }

  }
}
