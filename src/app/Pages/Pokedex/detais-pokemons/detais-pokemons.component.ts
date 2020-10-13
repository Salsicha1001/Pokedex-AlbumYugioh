import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Pokemon} from "../Model/Pokemon.model";

@Component({
  selector: 'app-detais-pokemons',
  templateUrl: './detais-pokemons.component.html',
  styleUrls: ['./detais-pokemons.component.css']
})
export class DetaisPokemonsComponent implements OnInit {
  pokemon:any
  name1:any
  type1:any
  name2:any
  type2:any

  fraqueza=[]
  constructor(
    public dialogRef: MatDialogRef<DetaisPokemonsComponent>,
    @Inject(MAT_DIALOG_DATA) public p:[]) {
    this.pokemon = p;
  }


  ngOnInit(): void {
    this.Tipo1()
    for(let key in this.pokemon)
 this.pokemon=this.pokemon[key]
    this.Fraqueza()
    console.log(this.fraqueza)

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  Tipo1(){
    for(let key in this.pokemon){
        if (this.pokemon[key].type[0] == "Grass") {
          this.type1 = "https://www.pikpng.com/pngl/m/341-3413280_pokemon-type-element-design-symbol-sign-icon-pokemon.png"
          this.name1 = "Grama"
        } else if (this.pokemon[key].type[0] =="Poison"){
          this.type1 ="https://vignette.wikia.nocookie.net/pokemongo/images/0/05/Poison.png/revision/latest/top-crop/width/220/height/220?cb=20161013133014"
          this.name1 = "Venenoso"
        }else if(this.pokemon[key].type[0]=="Psychic"){
          this.type1="https://vignette.wikia.nocookie.net/pokemongo/images/2/21/Psychic.png/revision/latest/top-crop/width/220/height/220?cb=20161013133006"
          this.name1= "Psíquico"
        }else if(this.pokemon[key].type[0]=="Bug"){
          this.name1="Inseto"
          this.type1= "https://vignette.wikia.nocookie.net/pokemongo/images/7/7d/Bug.png/revision/latest/top-crop/width/300/height/300?cb=20161013132753";
        }else if(this.pokemon[key].type[0]=="Flying"){
           this.name1="Voador"
            this.type1 = "https://img.rankedboost.com/wp-content/uploads/2019/11/Flying-Type-Pokemon-Sword-and-Shield.png"
        }else if(this.pokemon[key].type[0]=="Fire"){
          this.type1="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Pok%C3%A9mon_Fire_Type_Icon.svg/1024px-Pok%C3%A9mon_Fire_Type_Icon.svg.png"
        this.name1= "Fogo"
        }else if(this.pokemon[key].type[0]=="Ice") {
          this.type1 = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Pok%C3%A9mon_Ice_Type_Icon.svg/1024px-Pok%C3%A9mon_Ice_Type_Icon.svg.png";
          this.name1="Gelo"
        }else if(this.pokemon[key].type[0]=="Rock"){
          this.type1="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Pok%C3%A9mon_Rock_Type_Icon.svg/1024px-Pok%C3%A9mon_Rock_Type_Icon.svg.png"
          this.name1 = "Pedra"
        }else if(this.pokemon[key].type[0]=="Electric") {
          this.type1 = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Pok%C3%A9mon_Electric_Type_Icon.svg/1024px-Pok%C3%A9mon_Electric_Type_Icon.svg.png";
          this.name1="Eletrico"
        }else if(this.pokemon[key].type[0]=="Water"){
          this.type1="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Pok%C3%A9mon_Water_Type_Icon.svg/1024px-Pok%C3%A9mon_Water_Type_Icon.svg.png"
          this.name1="Água"
        }else if(this.pokemon[key].type[0]=="Normal") {
          this.type1 = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Pok%C3%A9mon_Normal_Type_Icon.svg/1024px-Pok%C3%A9mon_Normal_Type_Icon.svg.png";
         this.name1="Normal"
        }
        else if(this.pokemon[key].type[0]=="Fighting"){
          this.type1="https://vignette.wikia.nocookie.net/pokemongo/images/3/30/Fighting.png/revision/latest/top-crop/width/300/height/300?cb=20161013132827"
          this.name1="Lutador"
        }else if(this.pokemon[key].type[0]=="Ground") {
          this.type1 = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Pok%C3%A9mon_Ground_Type_Icon.svg/480px-Pok%C3%A9mon_Ground_Type_Icon.svg.png";
        this.name1="Terra"
        }else if(this.pokemon[key].type[0]=="Ghost"){
          this.type1="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pok%C3%A9mon_Ghost_Type_Icon.svg/1024px-Pok%C3%A9mon_Ghost_Type_Icon.svg.png"
          this.name1="Fantasma"
        }else if(this.pokemon[key].type[0]=="Dark") {
          this.type1 = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Pok%C3%A9mon_Dark_Type_Icon.svg/1024px-Pok%C3%A9mon_Dark_Type_Icon.svg.png";
          this.name1="Sombrio"
        }else if(this.pokemon[key].type[0]=="Fairy"){
          this.type1="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Pok%C3%A9mon_Fairy_Type_Icon.svg/1024px-Pok%C3%A9mon_Fairy_Type_Icon.svg.png"
          this.name1="Fada"
        }else if(this.pokemon[key].type[0]=="Dragon") {
          this.type1 = "https://img.rankedboost.com/wp-content/uploads/2019/11/Dragon-Type-Pokemon-Sword-and-Shield.png";
          this.name1="Dragão"

        }else if(this.pokemon[key].type[0]=="Steel") {
          this.type1 = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Pok%C3%A9mon_Steel_Type_Icon.svg/1024px-Pok%C3%A9mon_Steel_Type_Icon.svg.png";
          this.name1="Metal"
        }
        this.Tipo2()

    }
  }
  Tipo2(){
    for(let key in this.pokemon){
      if (this.pokemon[key].type[1] == "Grass") {
        this.type2 = "https://www.pikpng.com/pngl/m/341-3413280_pokemon-type-element-design-symbol-sign-icon-pokemon.png"
        this.name2 = "Grama"
      } else if (this.pokemon[key].type[1] =="Poison"){
        this.type2 ="https://vignette.wikia.nocookie.net/pokemongo/images/0/05/Poison.png/revision/latest/top-crop/width/220/height/220?cb=20161013133014"
        this.name2 = "Venenoso"
      }else if(this.pokemon[key].type[1]=="Psychic"){
        this.type2="https://vignette.wikia.nocookie.net/pokemongo/images/2/21/Psychic.png/revision/latest/top-crop/width/220/height/220?cb=20161013133006"
        this.name2= "Psíquico"
      }else if(this.pokemon[key].type[1]=="Bug"){
        this.name2="Inseto"
        this.type2= "https://vignette.wikia.nocookie.net/pokemongo/images/7/7d/Bug.png/revision/latest/top-crop/width/300/height/300?cb=20161013132753";
      }else if(this.pokemon[key].type[1]=="Flying"){
        this.name2="Voador"
        this.type2 = "https://img.rankedboost.com/wp-content/uploads/2019/11/Flying-Type-Pokemon-Sword-and-Shield.png"
      }else if(this.pokemon[key].type[1]=="Fire"){
        this.type2="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Pok%C3%A9mon_Fire_Type_Icon.svg/1024px-Pok%C3%A9mon_Fire_Type_Icon.svg.png"
        this.name2= "Fogo"
      }else if(this.pokemon[key].type[1]=="Ice") {
        this.type2 = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Pok%C3%A9mon_Ice_Type_Icon.svg/1024px-Pok%C3%A9mon_Ice_Type_Icon.svg.png";
        this.name2="Gelo"
      }else if(this.pokemon[key].type[1]=="Rock"){
        this.type2="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Pok%C3%A9mon_Rock_Type_Icon.svg/1024px-Pok%C3%A9mon_Rock_Type_Icon.svg.png"
        this.name2 = "Pedra"
      }else if(this.pokemon[key].type[1]=="Electric") {
        this.type2 = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Pok%C3%A9mon_Electric_Type_Icon.svg/1024px-Pok%C3%A9mon_Electric_Type_Icon.svg.png";
        this.name2="Eletrico"
      }else if(this.pokemon[key].type[1]=="Water"){
        this.type2="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Pok%C3%A9mon_Water_Type_Icon.svg/1024px-Pok%C3%A9mon_Water_Type_Icon.svg.png"
        this.name2="Água"
      }else if(this.pokemon[key].type[1]=="Normal") {
        this.type2 = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Pok%C3%A9mon_Normal_Type_Icon.svg/1024px-Pok%C3%A9mon_Normal_Type_Icon.svg.png";
        this.name2="Normal"
      }
      else if(this.pokemon[key].type[1]=="Fighting"){
        this.type2="https://vignette.wikia.nocookie.net/pokemongo/images/3/30/Fighting.png/revision/latest/top-crop/width/300/height/300?cb=20161013132827"
        this.name2="Lutador"
      }else if(this.pokemon[key].type[1]=="Ground") {
        this.type2 = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Pok%C3%A9mon_Ground_Type_Icon.svg/480px-Pok%C3%A9mon_Ground_Type_Icon.svg.png";
        this.name2="Terra"
      }else if(this.pokemon[key].type[1]=="Ghost"){
        this.type2="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pok%C3%A9mon_Ghost_Type_Icon.svg/1024px-Pok%C3%A9mon_Ghost_Type_Icon.svg.png"
        this.name2="Fantasma"
      }else if(this.pokemon[key].type[1]=="Dark") {
        this.type2 = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Pok%C3%A9mon_Dark_Type_Icon.svg/1024px-Pok%C3%A9mon_Dark_Type_Icon.svg.png";
        this.name2="Sombrio"
      }else if(this.pokemon[key].type[1]=="Fairy"){
        this.type2="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Pok%C3%A9mon_Fairy_Type_Icon.svg/1024px-Pok%C3%A9mon_Fairy_Type_Icon.svg.png"
        this.name2="Fada"
      }else if(this.pokemon[key].type[1]=="Dragon") {
        this.type2 = "https://img.rankedboost.com/wp-content/uploads/2019/11/Dragon-Type-Pokemon-Sword-and-Shield.png";
        this.name2="Dragão"

      }else if(this.pokemon[key].type[1]=="Steel") {
        this.type2 = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Pok%C3%A9mon_Steel_Type_Icon.svg/1024px-Pok%C3%A9mon_Steel_Type_Icon.svg.png";
        this.name2="Metal"
      }



    }
  }

  Fraqueza(){
    let f = this.pokemon.weaknesses
    const azar=[{img:"", name:""}]
    for(let key = 0; key<f.length; key++){

      if (f[key] == "Grass") {
        azar[key]={img:"https://www.pikpng.com/pngl/m/341-3413280_pokemon-type-element-design-symbol-sign-icon-pokemon.png",
        name:"Grama"}

      }else  if (f[key]=="Poison"){
        azar[key]={
          img:"https://vignette.wikia.nocookie.net/pokemongo/images/0/05/Poison.png/revision/latest/top-crop/width/220/height/220?cb=20161013133014",
          name:"Venenoso"
        }
      }else if(f[key]=="Psychic"){
        azar[key]={
          img:"https://vignette.wikia.nocookie.net/pokemongo/images/2/21/Psychic.png/revision/latest/top-crop/width/220/height/220?cb=20161013133006",
          name:"Psíquico"
        }

      } else if(f[key]=="Bug"){
        azar[key]={
          name:"Inseto",
          img: "https://vignette.wikia.nocookie.net/pokemongo/images/7/7d/Bug.png/revision/latest/top-crop/width/300/height/300?cb=20161013132753"

        }

      }else if(f[key]=="Flying"){
        azar[key]={
          name: "Voador",
          img:"https://img.rankedboost.com/wp-content/uploads/2019/11/Flying-Type-Pokemon-Sword-and-Shield.png"
        }
         }else if(f[key]=="Fire"){
        azar[key]={name:"Fogo", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Pok%C3%A9mon_Fire_Type_Icon.svg/1024px-Pok%C3%A9mon_Fire_Type_Icon.svg.png"
          }
      }else if(f[key]=="Ice") {
       azar[key]={
         name:"Gelo",
         img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Pok%C3%A9mon_Ice_Type_Icon.svg/1024px-Pok%C3%A9mon_Ice_Type_Icon.svg.png"
       }
      }else if(f[key]=="Rock"){
        azar[key]={
          name:"Pedra",
          img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Pok%C3%A9mon_Rock_Type_Icon.svg/1024px-Pok%C3%A9mon_Rock_Type_Icon.svg.png"
        }

      }else if(f[key]=="Electric") {
        azar[key]={
          name:"Eletrico",
          img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Pok%C3%A9mon_Electric_Type_Icon.svg/1024px-Pok%C3%A9mon_Electric_Type_Icon.svg.png"

        }

      }else if(f[key]=="Water"){
        azar[key]={
          name: "Água",
          img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Pok%C3%A9mon_Water_Type_Icon.svg/1024px-Pok%C3%A9mon_Water_Type_Icon.svg.png"
        }

      }else if(f[key]=="Normal") {
        azar[key]={
          name:"Normal",
          img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Pok%C3%A9mon_Normal_Type_Icon.svg/1024px-Pok%C3%A9mon_Normal_Type_Icon.svg.png"
        }

      }else if(f[key]=="Fighting"){
        azar[key]={
          name:"Lutador",
          img:"https://vignette.wikia.nocookie.net/pokemongo/images/3/30/Fighting.png/revision/latest/top-crop/width/300/height/300?cb=20161013132827"
        }

      }else if(f[key]=="Ground") {
        azar[key]={
          name:"Terra",
          img:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Pok%C3%A9mon_Ground_Type_Icon.svg/480px-Pok%C3%A9mon_Ground_Type_Icon.svg.png"
        }

      }else if(f[key]=="Ghost"){
        azar[key]={
          name:"Fantasma",
          img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pok%C3%A9mon_Ghost_Type_Icon.svg/1024px-Pok%C3%A9mon_Ghost_Type_Icon.svg.png"
        }

      }else if(f[key]=="Dark") {
        azar[key]={
          name: "Sombrio",
          img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Pok%C3%A9mon_Dark_Type_Icon.svg/1024px-Pok%C3%A9mon_Dark_Type_Icon.svg.png"
        }

      }else if(f[key]=="Fairy"){
        azar[key]={
          name:"Fada",
          img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Pok%C3%A9mon_Fairy_Type_Icon.svg/1024px-Pok%C3%A9mon_Fairy_Type_Icon.svg.png"
        }


      }else if(f[key]=="Dragon") {
        azar[key]={
          name:"Dragão",
          img: "https://img.rankedboost.com/wp-content/uploads/2019/11/Dragon-Type-Pokemon-Sword-and-Shield.png"
        }


      }else if(f[key]=="Steel") {
        azar[key]={
          name:"Metal",
          img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Pok%C3%A9mon_Steel_Type_Icon.svg/1024px-Pok%C3%A9mon_Steel_Type_Icon.svg.png"
        }


      }

    }
this.fraqueza.push(azar)
    for(let key in this.fraqueza){
      this.fraqueza = this.fraqueza[key]
    }

  }
}
