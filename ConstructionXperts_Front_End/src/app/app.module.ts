import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTaskComponent } from './tache/add-task/add-task.component';
import { ListTaskComponent } from './tache/list-task/list-task.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { SidbarComponent } from './layout/sidbar/sidbar.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { AddresourcesComponent } from './Resources/addresources/addresources.component';
import { ShowresourcesComponent } from './Resources/showresources/showresources.component';
import { ProjetListComponent } from './projet/projet-list/projet-list.component';
import { CreateProjetComponent } from './projet/create-projet/create-projet.component';
import { UpdateProjetComponent } from './projet/update-projet/update-projet.component'; // Add this import



@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    ListTaskComponent,
    LoginComponent,
    SignupComponent,

    SidbarComponent,
    NavbarComponent,
    AddresourcesComponent,
    ShowresourcesComponent,
    ProjetListComponent,
    CreateProjetComponent,
    UpdateProjetComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
