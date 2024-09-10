import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTaskComponent } from './tache/list-task/list-task.component';
import { AddTaskComponent } from './tache/add-task/add-task.component';

const routes: Routes = [
  {path : 'listtache', component : ListTaskComponent},
  {path : 'addtache',component : AddTaskComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
