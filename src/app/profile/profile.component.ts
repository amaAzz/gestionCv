import { Component } from '@angular/core';
import {Candidate} from '../model/models'
import {FormBuilder} from "@angular/forms";
import {ApiService} from "../services/api.service";
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  candidateId ?: number;
  candidate?:Candidate
  constructor(
    private apiService:ApiService,
    private route: ActivatedRoute,
  ){}
  ngOnInit(): void {
    this.candidateId = +this.route.snapshot.paramMap.get('id')!;
    this.apiService.getCandidate(this.candidateId).subscribe(value =>
    this.candidate=value)

  }

}
