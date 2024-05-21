import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // Users
  getUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users`);
  }

  getUser(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/users/${id}`);
  }

  addUser(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/users`, user);
  }

  // Jobs
  getJobs(): Observable<any> {
    return this.http.get(`${this.baseUrl}/jobs`);
  }

  getJob(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/jobs/${id}`);
  }

  addJob(job: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/jobs`, job);
  }

  // Applications
  getApplications(): Observable<any> {
    return this.http.get(`${this.baseUrl}/applications`);
  }

  getApplication(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/applications/${id}`);
  }

  addApplication(application: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/applications`, application);
  }

  register(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/users`, user);
  }

  addCandidateProfile(candidateProfile: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/candidates`, candidateProfile);
  }

  completeCandidateProfile(candidateProfile: any,id:string): Observable<any> {
    return this.http.put(`${this.baseUrl}/candidates/`+id, candidateProfile);
  }

  getCandidate(candidateId: string | undefined) : Observable<any> {
    return this.http.get(`${this.baseUrl}/candidates/`+candidateId);

  }

  addCompany(company: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/companies`,company);

  }

  completeCompany(company: any, companyId: string | undefined):Observable<any> {
    return this.http.put(`${this.baseUrl}/companies/`+companyId, company);

  }

  getCompany(companyId: string | undefined):Observable<any> {
    return this.http.get(`${this.baseUrl}/companies/`+companyId);


  }

  deleteJob(jobId: number) {
    return this.http.delete<void>(`${this.baseUrl}/jobs/${jobId}`);

  }

  deleteApplication(id: number) {
    return this.http.delete<void>(`${this.baseUrl}/applications/${id}`);

  }
}
