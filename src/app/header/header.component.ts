import { Component, OnInit } from '@angular/core';
import {AuthUserService} from "../users/shared/auth-user.service";
import {Observable} from "rxjs";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  Authenticated$:Observable<boolean>;
  showFiller = false;
  constructor(private authService :AuthUserService, private router:Router) {


  }

  ngOnInit(): void {
    this.Authenticated$ = this.authService.authenticated()
  }
  logout(){
this.authService.logout()
  }



}
