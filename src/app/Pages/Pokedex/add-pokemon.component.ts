import { Component, OnInit } from '@angular/core';
import {PokemonService} from "./shared/pokemon.service";
import {Pokemon} from "./Model/Pokemon.model";
import {MatDialog} from "@angular/material/dialog";
import {DetaisPokemonsComponent} from "./detais-pokemons/detais-pokemons.component";

@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrls: ['./add-pokemon.component.css']
})
export class AddPokemonComponent implements OnInit {
pokedex=[]

  constructor(private pokemonService:PokemonService, private dialog:MatDialog) { }

  ngOnInit(): void {

    this.pokemonService.getPokemons().subscribe((u)=>{
      for(let key in u) {
          let pok: Pokemon = {
            id: u[key].id,
            name: u[key].name,
            img: u[key].img,
            nextEvolution: u[key].next_evolution,
            weaknesses: u[key].weaknesses,
            type: u[key].type,
            antEvolution:u[key].prev_evolution
          };
          this.pokedex.push(pok);

      }
    //  console.log(this.pokedex);
      })


  }

  detaisPokemon(p){
    const dialogRef = this.dialog.open(DetaisPokemonsComponent, {
      width: '600px',
      data: {Pokemon:p}
    });

    dialogRef.afterClosed().subscribe(result => {
   //   console.log('The dialog was closed');
    });
  }


}
