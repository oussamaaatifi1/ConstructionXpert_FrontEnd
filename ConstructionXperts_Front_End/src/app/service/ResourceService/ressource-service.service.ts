import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {tache} from "../../model/tache";

@Injectable({
  providedIn: 'root'
})
export class RessourceServiceService {


  constructor(private httpclient : HttpClient) { }

  private BaseUrl = 'http://localhost:8765/api/Ressource';

  getAllResources() : Observable<tache[]>{
    return this.httpclient.get<tache[]>(`${this.BaseUrl}`);
  }

  createResources(tacheData: tache): Observable<tache> {
    return this.httpclient.post<tache>(`${this.BaseUrl}`, tacheData);
  }
}

