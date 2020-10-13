import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TrapService {
  url:string="//localhost:8080"
  constructor(private http:HttpClient) { }

  getTrapCards(t){
    return this.http.get(`${this.url}/getCardTrap/${t}`)
  }
}
