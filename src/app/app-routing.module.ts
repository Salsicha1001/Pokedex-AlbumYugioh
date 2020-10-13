import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from "./index/index.component";
import {AuthGuardService} from "./users/shared/guard/auth-guard.service";
import {AddPokemonComponent} from "./Pages/Pokedex/add-pokemon.component";
import {SpellCardNormalComponent} from "./Pages/Yu-gi-oh/Spell/spell-card-normal/spell-card-normal.component";
import {SpellCardQuickComponent} from "./Pages/Yu-gi-oh/Spell/spell-card-quick/spell-card-quick.component";
import {SpellCardContinuosComponent} from "./Pages/Yu-gi-oh/Spell/spell-card-continuos/spell-card-continuos.component";
import {SpellCardRitualComponent} from "./Pages/Yu-gi-oh/Spell/spell-card-ritual/spell-card-ritual.component";
import {SpellCardEquipamentComponent} from "./Pages/Yu-gi-oh/Spell/spell-card-equipament/spell-card-equipament.component";
import {SpellCardFieldComponent} from "./Pages/Yu-gi-oh/Spell/spell-card-field/spell-card-field.component";
import {MonstersComponent} from "./Pages/Yu-gi-oh/monsters/monsters.component";
import {SearchTrapComponent} from "./Pages/Yu-gi-oh/Trap/search-trap/search-trap.component";

const routes: Routes = [
  {path:'', component:IndexComponent,canActivate:[AuthGuardService]},
  {path:'pokedex', component:AddPokemonComponent, canActivate:[AuthGuardService]},
  {path:'spellCardNormal', component:SpellCardNormalComponent, canActivate:[AuthGuardService]},
  {path:'spellCardQuick', component:SpellCardQuickComponent, canActivate:[AuthGuardService]},
  {path:'spellCardContinuoes', component:SpellCardContinuosComponent, canActivate:[AuthGuardService]},
  {path:'spellCardRitual', component:SpellCardRitualComponent, canActivate:[AuthGuardService]},
  {path:'spellCardEquipament', component:SpellCardEquipamentComponent, canActivate:[AuthGuardService]},
  {path:'spellCardCampo', component:SpellCardFieldComponent, canActivate:[AuthGuardService]},
  {path:"monsterCard", component:MonstersComponent, canActivate:[AuthGuardService]},
  {path:"trapCard", component:SearchTrapComponent, canActivate:[AuthGuardService]}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
