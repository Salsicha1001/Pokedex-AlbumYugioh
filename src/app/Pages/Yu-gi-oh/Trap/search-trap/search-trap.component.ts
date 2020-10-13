import {Component, OnInit, Output,EventEmitter } from '@angular/core';
import {FormControl} from "@angular/forms";
import {RaceModel} from "../../monsters/Model/Race.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-search-trap',
  templateUrl: './search-trap.component.html',
  styleUrls: ['./search-trap.component.css']
})
export class SearchTrapComponent implements OnInit {
  raceControl = new FormControl()
  raceGroup: RaceModel[] = [
    {name: "Normal", value: "normal"},
    {name: "Continuio", value: "continuous"},
    {name: "Resposta", value: "counter"},


  ]


  constructor() { }

  ngOnInit(): void {
  }



}
