import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tache } from '../model/tache';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  private BaseUrl = 'http://localhost:8084/taches';

  constructor(private httpclient: HttpClient) { }

  getAllTaches(): Observable<tache[]> {
    return this.httpclient.get<tache[]>(this.BaseUrl);
  }

  createTache(tacheData: tache): Observable<tache> {
    return this.httpclient.post<tache>(this.BaseUrl, tacheData);
  }

  getTaskById(id: number): Observable<tache> {
    return this.httpclient.get<tache>(`${this.BaseUrl}/${id}`);
  }

  updateTache(id: number, tacheData: tache): Observable<tache> {
    return this.httpclient.put<tache>(`${this.BaseUrl}/${id}`, tacheData);
  }

  deleteTache(id: number): Observable<void> {
    return this.httpclient.delete<void>(`${this.BaseUrl}/${id}`);
  }

  getTasksByProjectId(projectId: number): Observable<tache[]> {
    return this.httpclient.get<tache[]>(`${this.BaseUrl}/project/${projectId}`);
  }
}
