import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of, Subscriber} from "rxjs";
import {Router} from "@angular/router";



@Injectable({
  providedIn: 'root'
})
export class AuthUserService {

  url:string ="//localhost:8080";
  private loggedIn = false;
  private logger = new Observable<boolean>((observer: Subscriber<boolean>) => {
    observer.next(this.loggedIn);
  });
  constructor(private http:HttpClient, private router:Router) {
    if (localStorage.getItem('uid') == null) {
      this.loggedIn = true
    } else {
      this.loggedIn = false;
    }
  }

  registerUser(u){
     return this.http.post(`${this.url}/auth/register`, u)

  }

  loginUser(u){
    return this.http.post(`${this.url}/auth/login`, u)
    window.location.reload();

  }

    authenticated():Observable<boolean> {
      return this.logger
    }

  getUser(){

  }
    logout(){
      localStorage.clear();
      this.router.navigate(['/auth/login']);
      window.location.reload();
      this.loggedIn = false
}
    cofirmauth(){
    this.loggedIn = true;


    }
}
