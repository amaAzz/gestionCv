import { Component, OnInit } from '@angular/core';
import { Company } from '../model/models';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css'] // Correction: styleUrl -> styleUrls
})
export class CompanyProfileComponent implements OnInit {
  companyId?: string;
  company?: Company;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.companyId = this.route.snapshot.paramMap.get('id')?.toString();
    if (this.companyId) {
      this.apiService.getCompany(this.companyId).subscribe(value => {
        this.company = value;
      });
    }
  }

  deleteJob(jobId: number): void {
    if (confirm('Are you sure you want to delete this job?')) {
      this.apiService.deleteJob(jobId).subscribe(() => {
        this.company!.jobs = this.company!.jobs.filter(job => job.id !== jobId);
        this.apiService.completeCompany(this.company,this.companyId).subscribe(()=>{
          alert('Job deleted successfully.');
      })
      });
    }
  }
}
