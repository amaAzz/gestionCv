// src/app/complete-profile/complete-profile.component.ts
import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-complete-profile',
  templateUrl: './complete-profile.component.html',
  styleUrls: ['./complete-profile.component.css']
})
export class CompleteProfileComponent {
  completeProfileForm: FormGroup;
  candidateId ?:string;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private apiService:ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.completeProfileForm = this.fb.group({
      nom:['', Validators.required],
      prenom:['', Validators.required],
      github: ['', Validators.required],
      linkedin: ['', Validators.required],
      summary: ['', Validators.required],
      phone:['', Validators.required],
      skills: this.fb.array([]),
      certifications: this.fb.array([]),
      experience: this.fb.array([]),
      hobbies: this.fb.array([]),
      education: this.fb.array([]),
      projects: this.fb.array([]),
      publications: this.fb.array([]),
      languages:this.fb.array([]),
      country:['', Validators.required],
      city:['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.candidateId=this.route.snapshot.paramMap.get('id')?.toString()
    this.route.paramMap.subscribe(
      (params: any) => {
        console.log("in params", params.value);
      })
    console.log(this.candidateId)
  }

  onSubmit(): void {

    if (this.completeProfileForm.valid) {
      const profile = {
        ...this.completeProfileForm.value,
        id: this.candidateId
      };
      console.log(profile)
      this.apiService.completeCandidateProfile(profile,profile.id).subscribe(

        () => this.router.navigate(['/profile', this.candidateId]),
        error => this.error = 'Failed to complete profile. Please try again.'
      );
    }
  }

  get skills() {
    return this.completeProfileForm.get('skills') as FormArray;
  }

  addskills() {
    this.skills.push(this.fb.group({
      name: ['', Validators.required],
    }));
  }

  removeSkills(index: number) {
    this.skills.removeAt(index);
  }

  get certifications() {
    return this.completeProfileForm.get('certifications') as FormArray;
  }

  addCertification() {
    this.certifications.push(this.fb.group({
      name: ['', Validators.required],
      date: ['', Validators.required]
    }));
  }

  removeCertification(index: number) {
    this.certifications.removeAt(index);
  }

  get experience() {
    return this.completeProfileForm.get('experience') as FormArray;
  }

  addExperience() {
    this.experience.push(this.fb.group({
      title: ['', Validators.required],
      company: ['', Validators.required],
      dates: ['', Validators.required],
      location: [''],
      description: ['']
    }));
  }

  removeExperience(index: number) {
    this.experience.removeAt(index);
  }

  get hobbies() {
    return this.completeProfileForm.get('hobbies') as FormArray;
  }

  addHobby() {
    this.hobbies.push(this.fb.group({
      hobby: ['', Validators.required],
      description: ['']
    }));
  }

  removeHobby(index: number) {
    this.hobbies.removeAt(index);
  }

  get education() {
    return this.completeProfileForm.get('education') as FormArray;
  }

  addEducation() {
    this.education.push(this.fb.group({
      degree: ['', Validators.required],
      institution: ['', Validators.required],
      dates: ['', Validators.required],
      location: ['']
    }));
  }

  removeEducation(index: number) {
    this.education.removeAt(index);
  }

  get projects() {
    return this.completeProfileForm.get('projects') as FormArray;
  }

  addProject() {
    this.projects.push(this.fb.group({
      title: ['', Validators.required],
      description: [''],
      technologies: ['']
    }));
  }

  removeProject(index: number) {
    this.projects.removeAt(index);
  }

  get publications() {
    return this.completeProfileForm.get('publications') as FormArray;
  }

  addPublication() {
    this.publications.push(this.fb.group({
      title: ['', Validators.required],
      publication: [''],
      year: ['']
    }));
  }

  removePublication(index: number) {
    this.publications.removeAt(index);
  }

  get languages() {
    return this.completeProfileForm.get('languages') as FormArray;
  }

  addLanguage() {
    this.languages.push(this.fb.group({
      language: ['', Validators.required],
      proficiency: ['']
    }));
  }

  removeLanguage(index: number) {
    this.languages.removeAt(index);
  }




}
