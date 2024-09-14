import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTaskComponent } from './tache/list-task/list-task.component';
import { AddTaskComponent } from './tache/add-task/add-task.component';
import { EditTacheComponent } from './tache/edit-tache/edit-tache.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {path : 'listtache', component : ListTaskComponent},
  {path : 'addtache',component : AddTaskComponent},
  {path : 'edit/tache/:id',component : EditTacheComponent},
  {path :'login',component : LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
