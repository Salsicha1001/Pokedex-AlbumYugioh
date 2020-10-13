import {Component, HostListener, Input, OnInit} from '@angular/core';
import {TrapService} from "../shared/trap.service";
import {TrapCard} from "../Model/trap.model";
import {Observable} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {FormControl} from "@angular/forms";
import {map, startWith} from "rxjs/operators";
import {DetaisComponent} from "../../monsters/detais/detais.component";
import {DetaisTrapComponent} from "../CardsDetais/detais-trap/detais-trap.component";

@Component({
  selector: 'app-trap-cards',
  templateUrl: './trap-cards.component.html',
  styleUrls: ['./trap-cards.component.css']
})
export class TrapCardsComponent implements OnInit {

  @Input() info:string;
  cards=[]
  currentItemsToShow = [];
  buscado: any
  achado: boolean =false
  loading = false
  filteredOptions: Observable<string[]>;
  options: string[] = []
  procure:any
  myControl = new FormControl();
  constructor(private trapCardService:TrapService,private matDialog:MatDialog) {
  }

  ngOnInit(): void {

}
  @HostListener('change') ngOnChanges() {
    this.Buscar()


  }

  Buscar() {
    if (this.info != null) {
      this.trapCardService.getTrapCards(this.info).subscribe((c) => {
        while (this.cards.length > 0) {
          this.cards.pop()
        }
        while (this.currentItemsToShow.length > 0) {
          this.currentItemsToShow.pop()
        }
        for (let key in c) {
          let p: TrapCard = {
            id: c[key].id,
            name: c[key].name,
            name_en: c[key].name_en,
            img: c[key].card_images[0].image_url,
            race: c[key].race,
            type: c[key].type,
            desc: c[key].desc
          }
          this.cards.push(p)
          this.options.push(p.name)
        }

        this.currentItemsToShow = this.cards
        this.filteredOptions = this.myControl.valueChanges.pipe(
          startWith(''),
          map(value => this._filter(value))
        );
        })

    }
  }

  openDialog(x:TrapCard){
    const dialogRef = this.matDialog.open(DetaisTrapComponent,{
      width:'800px',
      data:{x}
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
