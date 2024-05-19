import { Component } from '@angular/core';
import {ApiService} from "../services/api.service";
import {Job} from "../model/models";

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css'
})
export class JobListComponent {
  jobs:Job[]=[]
  searchTerm: string = '';
  selectedLocation: string = '';
  selectedSkill: string = '';
  constructor(private apiService:ApiService) {

  }
  ngOnInit(){
    this.apiService.getJobs().subscribe(value=>{
      this.jobs=value
    })
  }
  get uniqueLocations(): string[] {
    return [...new Set(this.jobs.map(job => job.location))];
  }

  get uniqueSkills(): string[] {
    return [...new Set(this.jobs.flatMap(job => job.skills))];
  }

  get filteredJobs(): Job[] {
    return this.jobs.filter(job =>
      (this.searchTerm ? (job.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        job.skills.some(skill => skill.toLowerCase().includes(this.searchTerm.toLowerCase())) ||
        job.location.toLowerCase().includes(this.searchTerm.toLowerCase())) : true) &&
      (this.selectedLocation ? job.location === this.selectedLocation : true) &&
      (this.selectedSkill ? job.skills.includes(this.selectedSkill) : true)
    );
  }
}
