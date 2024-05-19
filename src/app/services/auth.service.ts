import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {User} from "../model/models";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isAuthenticatedCandidate = false;
  private _isAuthenticatedCompany = false;
  private listUser:User[]=[]
  constructor(
    private apiService: ApiService,
    private router: Router,

  ) {
    this.apiService.getUsers().subscribe(users =>{

      this.listUser=users

    })

  }


  login(username: string, password: string): boolean {
    console.log("hello1")

        const user = this.listUser.find((u: any) => u.username === username && u.password === password);
        if (user) {
          if (user.role === "candidate") {
            console.log("hello1")
            localStorage.setItem("idCandidate",<string>user.candidateId?.toString())
            localStorage.setItem("isAuthenticatedCandidate","true")
            localStorage.setItem("isAuthenticatedCompany","false")
            this._isAuthenticatedCandidate = true;
            return true
          } else {
            console.log("hello2")
            localStorage.setItem("idCompany",<string>user.companyId?.toString())
            localStorage.setItem("isAuthenticatedCompany","true")
            localStorage.setItem("isAuthenticatedCandidate","false")
            this._isAuthenticatedCompany = true;
            return true
          }
        } else {
          console.log("hello3")
          localStorage.setItem("idCompany",'')
          localStorage.setItem("isAuthenticatedCompany","false")
          this._isAuthenticatedCompany = false;
          localStorage.setItem("idCandidate",'')
          localStorage.setItem("isAuthenticatedCandidate","false")
          this._isAuthenticatedCandidate = true;
          return false
        }
  }

  logout() {
    localStorage.setItem("idCompany",'')
    localStorage.setItem("isAuthenticatedCompany","false")
    this._isAuthenticatedCompany = false;
    localStorage.setItem("idCandidate",'')
    localStorage.setItem("isAuthenticatedCandidate","false")
    this._isAuthenticatedCandidate = true;
  }


  get isAuthenticatedCandidate(): boolean {
    return this._isAuthenticatedCandidate;
  }

  get isAuthenticatedCompany(): boolean {
    return this._isAuthenticatedCompany;
  }


}
