import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url="//localhost:8080"
  constructor(private http:HttpClient) { }


  getPokemons(){
    return this.http.get(`${this.url}/getPokemons`)
  }
}
