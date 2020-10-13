import { NgModule } from '@angular/core';


import {RouterModule, Routes} from '@angular/router';
import {RegisterUserComponent} from "../register-user/register-user.component";
import {LoginUserComponent} from "../login-user/login-user.component";


const routes: Routes = [
  {path:"auth/register", component:RegisterUserComponent},
  {path:"auth/login", component:LoginUserComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule{}
