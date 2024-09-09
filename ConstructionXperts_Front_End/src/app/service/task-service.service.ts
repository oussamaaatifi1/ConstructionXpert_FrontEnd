import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tache } from '../model/tache';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor(private httpclient : HttpClient) { }

  private BaseUrl = 'http://localhost:8084/taches';

  getAllTaches() : Observable<tache[]>{
    return this.httpclient.get<tache[]>(`${this.BaseUrl}`);
  }
}
