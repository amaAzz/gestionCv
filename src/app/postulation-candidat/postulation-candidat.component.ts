import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Application, Candidate, Job } from '../model/models';

@Component({
  selector: 'app-postulation-candidat',
  templateUrl: './postulation-candidat.component.html',
  styleUrls: ['./postulation-candidat.component.css']
})
export class PostulationCandidatComponent implements OnInit {
  candidateId?: string;
  candidate?: Candidate;
  listJobs: Job[] = [];
  listApplications: Application[] = [];

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.candidateId = localStorage.getItem('idCandidate') ?? '';
    if (this.candidateId) {
      this.apiService.getCandidate(this.candidateId).subscribe(candidate => {
        this.candidate = candidate;

        this.apiService.getApplications().subscribe(applications => {
          this.listApplications = applications.filter((application: Application) => {
            return application.candidateId !== undefined && application.candidateId.toString() === this.candidateId!;
          });

          this.listApplications.forEach(application => {
            this.apiService.getJob(application.jobId).subscribe(job => {
              this.listJobs.push(job);
            });
          });
        });
      });
    }
  }


  deleteApplicationByJobId(jobId: number): void {
    if (confirm('Are you sure you want to delete this application?')) {
      // Recherche de l'application correspondante dans la liste des applications
      const applicationToDelete = this.listApplications.find(app => app.jobId === jobId);
      if (!applicationToDelete) {
        console.error("Application not found for job ID:", jobId);
        return;
      }

      // Suppression du job de la liste des jobs
      this.listJobs = this.listJobs.filter(job => job.id !== jobId);

      // Suppression de l'application de la base de données JSON
      this.apiService.deleteApplication(applicationToDelete.id).subscribe(() => {
        // Suppression de l'application de la liste des applications après la suppression réussie dans la base de données
        this.listApplications = this.listApplications.filter(app => app.id !== applicationToDelete.id);
      });
    }
  }
}
