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
import { DeleteTacheComponent } from './tache/delete-tache/delete-tache.component';
import { EditTacheComponent } from './tache/edit-tache/edit-tache.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Added for Angular Material
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    ListTaskComponent,
    LoginComponent,
    SignupComponent,
    SidbarComponent,
    NavbarComponent,
    DeleteTacheComponent,
    EditTacheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
