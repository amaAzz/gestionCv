import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Job, skills } from '../model/models';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css'] // Correction: styleUrl -> styleUrls
})
export class JobListComponent implements OnInit {
  jobs: Job[] = [];
  application!: { jobId: number; candidateId: string | undefined; status: string };
  searchTerm: string = '';
  selectedLocation: string = '';
  selectedSkill: string = '';
  candidateId: string | undefined = '';
  authCandidat: boolean = false;
  isApplicationSubmitted: boolean = false;

  constructor(private apiService: ApiService) {
    this.candidateId = localStorage.getItem('idCandidate')?.toString();
    if (localStorage.getItem('isAuthenticatedCandidate') === 'true') {
      this.authCandidat = true;
    }
  }

  ngOnInit(): void {
    this.loadJobs();
  }

  private loadJobs(): void {
    this.apiService.getJobs().subscribe((value) => {
      this.jobs = value;
    });
  }

  get uniqueLocations(): string[] {
    return [...new Set(this.jobs.map((job) => job.location))];
  }

  get uniqueSkills(): string[] {
    const allSkills = this.jobs.flatMap(job => job.skills.map(skill => skill.name));
    return [...new Set(allSkills)];
  }

  get filteredJobs(): Job[] {
    return this.jobs.filter((job) =>
      (this.searchTerm
        ? job.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        job.skills.some((skill) => skill.name.toLowerCase().includes(this.searchTerm.toLowerCase())) ||
        job.location.toLowerCase().includes(this.searchTerm.toLowerCase())
        : true) &&
      (this.selectedLocation ? job.location === this.selectedLocation : true) &&
      (this.selectedSkill ? job.skills.some(skill => skill.name === this.selectedSkill) : true)
    );
  }

  postuler(id: number): void {
    if (this.candidateId && !this.isApplicationSubmitted) {
      this.application = { jobId: id, candidateId: this.candidateId, status: 'Applied' };
      this.apiService.addApplication(this.application).subscribe(() => {
        this.isApplicationSubmitted = true;
        alert('Candidature soumise avec succès.');
      });
    } else {
      alert('Vous avez déjà soumis une candidature pour ce poste.');
    }
  }

  resetFilters(): void {
    this.searchTerm = '';
    this.selectedLocation = '';
    this.selectedSkill = '';
  }
}
