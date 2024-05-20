import { Component } from '@angular/core';
import {ApiService} from "../services/api.service";
import {Job,Application} from "../model/models";

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css'
})
export class JobListComponent {
  jobs:Job[]=[]
  application!:{ jobId: number; candidatId: string | undefined; status: string }
  searchTerm: string = '';
  selectedLocation: string = '';
  selectedSkill: string = '';
  candidateId:string | undefined=''
  constructor(private apiService:ApiService) {
    this.candidateId=localStorage.getItem("idCandidate")?.toString()
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

  postuler(id: number) {
    console.log(this.candidateId)
    this.application={jobId:id,candidatId:this.candidateId,status: "Applied"}
    this.apiService.addApplication(this.application).subscribe(()=>{
      console.log("hello word")
    })
  }
}


