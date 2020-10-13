import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-details-spell',
  templateUrl: './details-spell.component.html',
  styleUrls: ['./details-spell.component.css']
})
export class DetailsSpellComponent implements OnInit {
  spell:any
  constructor(
    public dialogRef: MatDialogRef<DetailsSpellComponent>,
    @Inject(MAT_DIALOG_DATA) public p:[] ) {
    this.spell = p
  }


  ngOnInit(): void {

    for(let key in this.spell){
      this.spell= this.spell[key]
    }
    console.log(this.spell)
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

}
