import { Component, OnInit } from '@angular/core';
import {AuthService} from "../Security/auth.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  authRequest:any={
    "userName":"salsicha@salsicha.com",
    "password":"felipe"
  }
  response:any


  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  this.getAccessToken(this.authRequest)
  }

  public getAccessToken(authR){
    let resp = this.authService.generateToken(authR)
    resp.subscribe(data=>this.accessApi(data))

  }
  public accessApi(token){
    let resp= this.authService.welcome(token)
    resp.subscribe(data=>this.response = data)
  }


}
