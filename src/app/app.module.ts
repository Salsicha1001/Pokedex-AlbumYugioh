import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {UserModuleModule} from './users/user-module/user-module.module';
import {HttpClientModule} from "@angular/common/http";
import { IndexComponent } from './index/index.component';
import { AddPokemonComponent } from './Pages/Pokedex/add-pokemon.component';
import { DetaisPokemonsComponent } from './Pages/Pokedex/detais-pokemons/detais-pokemons.component';
import { SpellCardNormalComponent } from './Pages/Yu-gi-oh/Spell/spell-card-normal/spell-card-normal.component';
import { SpellCardQuickComponent } from './Pages/Yu-gi-oh/Spell/spell-card-quick/spell-card-quick.component';
import { SpellCardContinuosComponent } from './Pages/Yu-gi-oh/Spell/spell-card-continuos/spell-card-continuos.component';
import { SpellCardEquipamentComponent } from './Pages/Yu-gi-oh/Spell/spell-card-equipament/spell-card-equipament.component';
import { SpellCardRitualComponent } from './Pages/Yu-gi-oh/Spell/spell-card-ritual/spell-card-ritual.component';
import { SpellCardFieldComponent } from './Pages/Yu-gi-oh/Spell/spell-card-field/spell-card-field.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DetailsSpellComponent } from './Pages/Yu-gi-oh/Spell/details-spell/details-spell.component';
import { MonstersComponent } from './Pages/Yu-gi-oh/monsters/monsters.component';
import { DetaisComponent } from './Pages/Yu-gi-oh/monsters/detais/detais.component';
import {MatCarouselModule} from "@ngbmodule/material-carousel";
import { TrapCardsComponent } from './Pages/Yu-gi-oh/Trap/trap-cards/trap-cards.component';
import {SearchTrapComponent} from "./Pages/Yu-gi-oh/Trap/search-trap/search-trap.component";
import { DetaisTrapComponent } from './Pages/Yu-gi-oh/Trap/CardsDetais/detais-trap/detais-trap.component';
import { YugiohSortComponent } from './Pages/Yu-gi-oh/Sorte/yugioh-sort/yugioh-sort.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    AddPokemonComponent,
    DetaisPokemonsComponent,
    SpellCardNormalComponent,
    SpellCardQuickComponent,
    SpellCardContinuosComponent,
    SpellCardEquipamentComponent,
    SpellCardRitualComponent,
    SpellCardFieldComponent,
    DetailsSpellComponent,
    MonstersComponent,
    DetaisComponent,
    SearchTrapComponent,
    TrapCardsComponent,
    DetaisTrapComponent,
    YugiohSortComponent,

  ],
  imports: [
    BrowserModule,
    UserModuleModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatCarouselModule.forRoot()


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
