import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CardService {

  url:String = "//localhost:8080"

  constructor(private http:HttpClient) { }

  getSpellCardNormal(){
  return this.http.get(`${this.url}/getCardspellNormal`)
  }
  getSpellCardQuick(){
    return this.http.get(`${this.url}/getCardspellQuick`)
  }
  getSpellCardEquipament(){
    return this.http.get(`${this.url}/getCardsSpellequip`)
  }
  getSpellCardRitual(){
    return this.http.get(`${this.url}/getCardspellRitual`)
  }
  getSpellCardCampo(){
    return this.http.get(`${this.url}/getCardsCampo`)
  }
  getSpellCardContinuos(){
    return this.http.get(`${this.url}/getCardspellContinuoes`)
  }

}
