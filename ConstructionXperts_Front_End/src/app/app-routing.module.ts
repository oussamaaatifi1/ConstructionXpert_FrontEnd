import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTaskComponent } from './tache/list-task/list-task.component';
import { AddTaskComponent } from './tache/add-task/add-task.component';
import {AddresourcesComponent} from "./Resources/addresources/addresources.component";
import {ShowresourcesComponent} from "./Resources/showresources/showresources.component";

const routes: Routes = [
  {path : 'listtache', component : ListTaskComponent},
  {path : 'addtache',component : AddTaskComponent},
  {path : 'AddResources',component : AddresourcesComponent},
  {path : 'ShowResources',component : ShowresourcesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
