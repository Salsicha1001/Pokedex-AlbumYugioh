import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-detais',
  templateUrl: './detais.component.html',
  styleUrls: ['./detais.component.css']
})
export class DetaisComponent implements OnInit {
  card:any

  constructor(
    public dialogRef:MatDialogRef<DetaisComponent>,
    @Inject(MAT_DIALOG_DATA) public p:{}) {
    this.card = p
  }

  ngOnInit(): void {
    for(let key in this.card){
      this.card = this.card[key]
    }
 // console.log(this.card)
  }

}
