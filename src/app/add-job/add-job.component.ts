import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ApiService } from "../services/api.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Company, Job } from "../model/models";

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']  // Corrected to 'styleUrls'
})
export class AddJobComponent {
  jobForm: FormGroup;
  error: string | null = null;
  job: Job | null = null;
  company: Company | null = null;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.jobForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      location: ['', Validators.required],
      skills: this.fb.array([
        this.fb.group({ name: ['', Validators.required] })
      ]),
    });
  }

  get skills() {
    return this.jobForm.get('skills') as FormArray;
  }

  addSkill() {
    this.skills.push(this.fb.group({
      name: ['', Validators.required],
    }));
  }

  removeSkill(index: number) {
    this.skills.removeAt(index);
  }

  onSubmit() {
    if (this.jobForm.valid) {
      this.apiService.addJob(this.jobForm.value).subscribe({
        next: (job: Job) => {
          this.job = job;
          this.loadCompanyAndUpdateJobs();
        },
        error: (err) => {
          this.error = 'Error adding job: ' + err.message;
        }
      });
    }
  }

  private loadCompanyAndUpdateJobs() {
    const companyId = localStorage.getItem("idCompany")?.toString();
    if (companyId) {
      this.apiService.getCompany(companyId).subscribe({
        next: (company: Company) => {
          this.company = company;
          if (!this.company.jobs) {
            this.company.jobs = [];
          }
          if (this.job) {
            this.company.jobs.push(this.job);
          }
          this.updateCompany(companyId);
        },
        error: (err) => {
          this.error = 'Error fetching company: ' + err.message;
        }
      });
    } else {
      this.error = 'Company ID not found';
    }
  }

  private updateCompany(companyId: string) {
    if (this.company) {
      this.apiService.completeCompany(this.company, companyId).subscribe({
        next: (value) => {
          console.log('Company update successful:', value);
          this.router.navigate(['company/'+localStorage.getItem("idCompany")?.toString()]);  // Replace with your success route
        },
        error: (err) => {
          this.error = 'Error updating company: ' + err.message;
        }
      });
    }
  }
}
