import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {TypeCard} from "./Model/TypeCardMonster.model";
import {RaceModel} from "./Model/Race.model";
import {MatSnackBar} from "@angular/material/snack-bar";
import {CardMonsterService} from "./Shared/card-monster.service";
import {cardMonsterModel} from "./Model/CardMonster.model";
import {Observable} from "rxjs";
import {map, startWith} from "rxjs/operators";
import {MatDialog} from "@angular/material/dialog";
import {DetaisComponent} from "./detais/detais.component";

@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.css']
})
export class MonstersComponent implements OnInit {
  yugiohControl = new FormControl()
  yugiohGroup: TypeCard[] = [
    {
      model: 'Deck Principal',
      type: [
        {name: "Monstro Efeito", value: "effect monster"},
        {name: "Monstro Efeito Virar", value: "flip effect monster"},
        {name: "Monstro Gêmeos", value: "gemini%20monster"},
        {name: "Monstro Nomal", value: "normal%20monster"},
        {name: "Monstro Regulador Normal", value: "normal%20tuner%20monster"},
        {name: "Monstro Pendulo Efeito", value: "pendulum%20effect%20monster"},
        {name: "Monstro Pendulo Virar", value: "pendulum%20flip%20effect%20monster"},
        {name: "Monstro Pendulo", value: "pendulum%20normal%20monster"},
        {name: "Monstro Pendulo Regulador", value: "pendulum%20tuner%20effect%20monster"},
        {name: "Monstro Ritual Efeito", value: "ritual%20effect%20monster"},
        {name: "Monstro Ritual", value: "ritual%20monster"},
        {name: "Monstro Tonn", value: "toon%20monster"},
        {name: "Monstro Regulador", value: "tuner%20monster"},
        {name: "Monstro Union", value: "union%20effect%20monster"},
      ]
    }, {
      model: "Deck Extra",
      type: [
        {name: "Monstro Fusão", value: "fusion%20monster"},
        {name: "Monstro Link", value: "link%20monster"},
        {name: "Monstro Pendulo Fusão", value: "pendulum%20effect%20fusion%20monster"},
        {name: "Monstro Sincro", value: "synchro%20monster"},
        {name: "Monstro Sincro Pendulo", value: "synchro%20pendulum%20effect%20monster"},
        {name: "Monstro XYZ", value: "xyz%20monster"},
        {name: "Monstro WYZ Pendulo", value: "xyz%20pendulum%20effect%20monster"}
      ]
    }
  ]
  raceControl = new FormControl()
  raceGroup: RaceModel[] = [
    {name: "Água", value: "aqua"},
    {name: "Besta", value: "beast"},
    {name: "Besta Guerreira", value: "beast-warrior"},
    {name: "Cyberso", value: "cyberse"},
    {name: "Dinossauro", value: "dinosaur"},
    {name: "Dragão", value: "dragon"},
    {name: "Fada", value: "fairy"},
    {name: "Dêmonio", value: "fiend"},
    {name: "Peixe", value: "fish"},
    {name: "Inseto", value: "insect"},
    {name: "Máquina", value: "machine"},
    {name: "Planta", value: "plant"},
    {name: "Psíquico", value: "psychic"},
    {name: "Piro", value: "pyro"},
    {name: "Reptil", value: "reptile"},
    {name: "Besta Divina", value: "divine-beast"},
    {name: "Pedra", value: "rock"},
    {name: "Serpente Marinha", value: "sea%20serpent"},
    {name: "Feiticeiro", value: "spellcaster"},
    {name: "Trovão", value: "thunder"},
    {name: "Guerreiro", value: "warrior"},
    {name: "Besta Alada", value: "winged%20beast"},

  ]
  loading: boolean = false
  cards = []
  currentItemsToShow = [];
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  options: string[] = []
  procure: any
  buscado: any
  achado: boolean =false

  constructor(private snackbar: MatSnackBar, private cardMonsterService: CardMonsterService,
              private matDialog:MatDialog) {
  }

  ngOnInit(): void {
  }

  search() {
    this.loading = true
    if (!this.yugiohControl.value && !this.raceControl.value) {
      this.snackbar.open("Selecione uma opção de pesquisa", "x", {
        duration: 2000,
        verticalPosition: "top"
      })
      this.loading = false
    } else if (this.raceControl.value === null) {
      this.cardMonsterService.getTypeCard(this.yugiohControl.value).subscribe((u) => {
        if (u == false) {
          this.Error404()
          this.loading = false
        } else {
          this.loading = true
          if (this.cards.length > 0) {
            while (this.cards.length) {
              this.cards.pop()
            }
            while (this.options.length) {
              this.options.pop()
            }

          }

          for (let key in u) {
            let c: cardMonsterModel = {
              atk: u[key].atk,
              attribute: u[key].attribute,
              def: u[key].def,
              id: u[key].id,
              level: u[key].level,
              name: u[key].name,
              name_en: u[key].name_en,
              race: u[key].race,
              type: u[key].type,
              desc: u[key].desc,
              img: u[key].card_images
            }
            this.cards.push(c)
            this.options.push(c.name)
          }
          this.currentItemsToShow = this.cards
          this.filteredOptions = this.myControl.valueChanges.pipe(
            startWith(''),
            map(value => this._filter(value))
          );
          this.loading = false
        }
      })


    } else if (this.yugiohControl.value === null || this.yugiohControl.value === undefined) {
      this.cardMonsterService.getTypeRace(this.raceControl.value).subscribe((u) => {
        if (u == false) {
          this.Error404()
          this.loading = false

        } else {
          if (this.cards.length > 0) {
            while (this.cards.length) {
              this.cards.pop()
            }
            while (this.options.length) {
              this.options.pop()
            }
          }
          for (let key in u) {
            let c: cardMonsterModel = {
              atk: u[key].atk,
              attribute: u[key].attribute,
              def: u[key].def,
              id: u[key].id,
              level: u[key].level,
              name: u[key].name,
              name_en: u[key].name_en,
              race: u[key].race,
              type: u[key].type,
              desc: u[key].desc,
              img: u[key].card_images
            }
            this.cards.push(c)
            this.options.push(c.name)

          }
          this.currentItemsToShow = this.cards
          this.filteredOptions = this.myControl.valueChanges.pipe(
            startWith(''),
            map(value => this._filter(value))
          );
          this.loading = false


        }
      })

    } else {
      this.cardMonsterService.getCardTT(this.yugiohControl.value, this.raceControl.value).subscribe((u) => {
        if (u == false) {
          this.Error404()
          this.loading = false


        } else {
          if (this.cards.length > 0) {
            while (this.cards.length) {
              this.cards.pop()
            }
            while (this.options.length) {
              this.options.pop()
            }
          }
          for (let key in u) {
            let c: cardMonsterModel = {
              atk: u[key].atk,
              attribute: u[key].attribute,
              def: u[key].def,
              id: u[key].id,
              level: u[key].level,
              name: u[key].name,
              name_en: u[key].name_en,
              race: u[key].race,
              type: u[key].type,
              desc: u[key].desc,
              img: u[key].card_images
            }
            this.cards.push(c)
            this.options.push(c.name)

          }
          this.currentItemsToShow = this.cards
          this.filteredOptions = this.myControl.valueChanges.pipe(
            startWith(''),
            map(value => this._filter(value))
          );
          this.loading = false

        }
      })


    }
  }

  Error404() {
    this.snackbar.open("Não existe esse tipo de carta", "X", {
      duration: 2000,
      verticalPosition: "top"
    })
    setTimeout(function () {
      this.loading = false
    }, 3000)
  }

  openDialog(c:cardMonsterModel) {
    const dialogRef = this.matDialog.open(DetaisComponent,{
      width:'800px',
      data:{c}
    })
    dialogRef.afterClosed().subscribe()
  }

  onPageChange($event) {
    this.currentItemsToShow = this.cards.slice($event.pageIndex * $event.pageSize, $event.pageIndex * $event.pageSize + $event.pageSize);
  }


  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  nameSearch() {
    for (let key in this.options) {
      if (this.procure == this.cards[key].name) {
        this.buscado = this.cards[key]
        this.achado = true

      }

    }

  }

  nulo() {
    if (this.procure == "") {
      this.achado = false
    }
  }
}
