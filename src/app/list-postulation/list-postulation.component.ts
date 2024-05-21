import { Component, OnInit } from '@angular/core';
import { Application, Candidate, Company, Job } from '../model/models';
import { ApiService } from '../services/api.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-list-postulation',
  templateUrl: './list-postulation.component.html',
  styleUrls: ['./list-postulation.component.css']
})
export class ListPostulationComponent implements OnInit {
  companyId?: string;
  company?: Company;
  listJobs: Job[] = [];
  listApplications: Application[] = [];
  candidatesMap = new Map<number, Candidate>();
  objetctAffiche: { job: Job, candidates: Candidate[] }[] = [];

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router:Router,
  ) {}

  ngOnInit(): void {
    this.companyId = localStorage.getItem('idCompany') ?? '';
    if (this.companyId) {
      this.apiService.getCompany(this.companyId).subscribe(company => {
        this.company = company;
        this.listJobs = this.company?.jobs || [];

        this.apiService.getApplications().subscribe(applications => {
          this.listApplications = applications;

          this.listJobs.forEach(job => {
            let jobCandidates: Candidate[] = [];
            let obJ = { job, candidates: jobCandidates };

            this.listApplications.forEach(application => {
              if (job.id === application.jobId) {
                this.apiService.getCandidate('' + application.candidateId).subscribe(candidate => {
                  if (!this.candidatesMap.has(candidate.id)) {
                    this.candidatesMap.set(candidate.id, candidate);
                    jobCandidates.push(candidate);
                  }
                });
              }
            });

            this.objetctAffiche.push(obJ);
          });
        });

      console.log(this.objetctAffiche)});
    }
  }

  goToCandidateProfile(id: number) {
    this.router.navigate(['profile/'+id])

  }
}
