import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTaskComponent } from './tache/list-task/list-task.component';
import {CreateProjetComponent} from "./projet/create-projet/create-projet.component";
import {ProjetListComponent} from "./projet/projet-list/projet-list.component";
import {UpdateProjetComponent} from "./projet/update-projet/update-projet.component";

const routes: Routes = [
  {path : '', component : ProjetListComponent},
  {path : 'listprojet', component : ListTaskComponent},
  {path : 'createprojet', component : CreateProjetComponent },

  {path : 'UpdateProjet', component : UpdateProjetComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
