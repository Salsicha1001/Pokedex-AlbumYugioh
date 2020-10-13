import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-detais-trap',
  templateUrl: './detais-trap.component.html',
  styleUrls: ['./detais-trap.component.css']
})
export class DetaisTrapComponent implements OnInit {
  card:any

  constructor(
    public dialogRef:MatDialogRef<DetaisTrapComponent>,
    @Inject(MAT_DIALOG_DATA) public p:{}) {
    this.card = p
  }
  ngOnInit(): void {
    for(let key in this.card){
      this.card = this.card[key]
    }
  }

}
