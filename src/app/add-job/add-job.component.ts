import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../services/api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Company, Job} from "../model/models";

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrl: './add-job.component.css'
})
export class AddJobComponent {
  jobForm: FormGroup;
  error: string | null = null;
  job :Job| null = null;
  company :Company| null = null;


  constructor(
    private fb: FormBuilder,
    private apiService:ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {

    this.jobForm=this.fb.group({
      title:['',Validators.required],
      description:['',Validators.required],
      location:['',Validators.required],
      skills: this.fb.array([]),
    })
  }

  get skills() {
    return this.jobForm.get('skills') as FormArray;
  }

  addskills() {
    this.skills.push(this.fb.group({
      name: ['', Validators.required],
    }));
  }

  removeSkills(index: number) {
    this.skills.removeAt(index);
  }

  onSubmit() {
    if (this.jobForm.valid)
    this.apiService.addJob(this.jobForm.value).subscribe(job=>{
      this.job=job
      console.log(job)
      this.apiService.getCompany(localStorage.getItem("idCompany")?.toString()).subscribe(
        value => {
          console.log(this.job)
          console.log(value)
          this.company=value
          if (this.job) {
            this.company?.jobs.push(this.job)
          }
          this.apiService.completeCompany(this.company,localStorage.getItem("idCompany")?.toString()).subscribe(
            value1 => {
              console.log(value1)
            }
          )
        }
      )
    })
  }
}
