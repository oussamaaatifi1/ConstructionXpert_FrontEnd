import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import {ProjetListComponent} from "./projet/projet-list/projet-list.component";
import {CreateProjetComponent} from "./projet/create-projet/create-projet.component";
import {UpdateProjetComponent} from "./projet/update-projet/update-projet.component";

const routes: Routes = [
  { path: 'projets', component: ProjetListComponent },
  { path: 'create-projet', component: CreateProjetComponent },
  { path: 'update-projet/:id', component: UpdateProjetComponent },
  { path: '', redirectTo: 'projets', pathMatch: 'full' }
=======
import { ListTaskComponent } from './tache/list-task/list-task.component';
import { AddTaskComponent } from './tache/add-task/add-task.component';
import {AddresourcesComponent} from "./Resources/addresources/addresources.component";
import {ShowresourcesComponent} from "./Resources/showresources/showresources.component";

const routes: Routes = [
  {path : 'listtache', component : ListTaskComponent},
  {path : 'addtache',component : AddTaskComponent},
  {path : 'AddResources',component : AddresourcesComponent},
  {path : 'ShowResources',component : ShowresourcesComponent},

>>>>>>> 8e5ed50fc036e2d7c50d57f07c3ff1456ee8b3f0
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
