import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CardMonsterService {

  private url="//localhost:8080"

  constructor(private http:HttpClient) { }

  getTypeCard(u){
    return this.http.get(`${this.url}/getCardMonsterNormal/${u}`)
  }
  getTypeRace(u){
    return this.http.get(`${this.url}/getCardRace/${u}`)
  }
  getCardTT(t, r){
    return this.http.get(`${this.url}/getCardMonster/${t}/${r}`)
  }
}
