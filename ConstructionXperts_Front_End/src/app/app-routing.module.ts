import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjetListComponent } from './projet/projet-list/projet-list.component';
import { CreateProjetComponent } from './projet/create-projet/create-projet.component';
import { UpdateProjetComponent } from './projet/update-projet/update-projet.component';
import { ListTaskComponent } from './tache/list-task/list-task.component';
import { AddTaskComponent } from './tache/add-task/add-task.component';
import { EditTacheComponent } from './tache/edit-tache/edit-tache.component';
import { LoginComponent } from './auth/login/login.component';
import { AddresourcesComponent } from './Resources/addresources/addresources.component';
import { ShowresourcesComponent } from './Resources/showresources/showresources.component';

const routes: Routes = [
  { path: 'projets', component: ProjetListComponent },
  { path: 'create-projet', component: CreateProjetComponent },
  { path: 'update-projet/:id', component: UpdateProjetComponent },
  { path: 'listtache', component: ListTaskComponent },
  { path: 'addtache', component: AddTaskComponent },
  { path: 'edit/tache/:id', component: EditTacheComponent },
  { path: 'login', component: LoginComponent },
  { path: 'AddResources', component: AddresourcesComponent },
  { path: 'ShowResources', component: ShowresourcesComponent },
  { path: '', redirectTo: 'projets', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
