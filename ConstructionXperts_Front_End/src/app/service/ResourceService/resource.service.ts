import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {resourcesModel} from "../../model/resourcesModel";
@Injectable({
  providedIn: 'root'
})
export class ResourceService {


  constructor(private httpclient : HttpClient) { }

  private BaseUrl = 'http://localhost:8765/api/Ressource';

  getAllResources() : Observable<resourcesModel[]>{
    return this.httpclient.get<resourcesModel[]>(`${this.BaseUrl}`);
  }

  // createResources(tacheData: tache): Observable<tache> {
  //   return this.httpclient.post<tache>(`${this.BaseUrl}`, tacheData);
  // }
}

