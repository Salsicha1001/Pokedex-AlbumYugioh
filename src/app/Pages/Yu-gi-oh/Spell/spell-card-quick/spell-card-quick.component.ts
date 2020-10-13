import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";
import {CardService} from "../shared/card.service";
import {MatDialog} from "@angular/material/dialog";
import {Card} from "../Model/Card.model";
import {map, startWith} from "rxjs/operators";
import {DetailsSpellComponent} from "../details-spell/details-spell.component";

@Component({
  selector: 'app-spell-card-quick',
  templateUrl: './spell-card-quick.component.html',
  styleUrls: ['./spell-card-quick.component.css']
})
export class SpellCardQuickComponent implements OnInit {
  spellQuick=[]
  search:string
  options:string[]=[]
  buscado:any
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  procure: boolean;
  loading = true
  constructor(private cardService:CardService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.cardService.getSpellCardQuick().subscribe((c)=>{
      for(let key in c) {
        let p: Card = {
          name:c[key].name,
          archetype:c[key].archetype,
          img:c[key].card_images[0].image_url,
          id:c[key].id,
          desc:c[key].desc,
          race:c[key].race,
          type:c[key].type
        }
        this.spellQuick.push(p)
        this.options.push(p.name)
        this.procure = false
        this.loading = false
      }
    })

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

  }

  busca(){
    for(let key in this.spellQuick){
      if(this.search == this.spellQuick[key].name){
        this.buscado = this.spellQuick[key]
        this.procure = true
      }
    }
  }
  nulo(){
    if(this.search ==""){
      this.procure =false
    }

  }
  openDialog(c): void {
    const dialogRef = this.dialog.open(DetailsSpellComponent, {
      width: '700px',
      data: {Card:c}
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }


  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

}
