import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Projet} from "../model/projet";


@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  private baseUrl = 'http://localhost:8081/projets';

  constructor(private http: HttpClient) { }

  getProjets(): Observable<Projet[]> {
    return this.http.get<Projet[]>(`${this.baseUrl}`);
  }

  getProjetById(id: number): Observable<Projet> {
    return this.http.get<Projet>(`${this.baseUrl}/${id}`);
  }

  createProjet(projet: Projet): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, projet);
  }

  updateProjet(id: number, projet: Projet): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, projet);
  }

  deleteProjet(id: number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
