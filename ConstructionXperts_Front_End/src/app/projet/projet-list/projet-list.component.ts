import { Component, OnInit } from '@angular/core';
import {Projet} from "../../model/projet";
import {ProjetService} from "../../service/projet.service";


@Component({
  selector: 'app-projet-list',
  templateUrl: './projet-list.component.html',
  styleUrls: ['./projet-list.component.css']
})
export class ProjetListComponent implements OnInit {

  projets: Projet[] = [];

  constructor(private projetService: ProjetService) { }

  ngOnInit(): void {
    this.getProjets();
  }

  getProjets() {
    this.projetService.getProjets().subscribe(data => {
      this.projets = data;
    });
  }

  manageTasks(id: number) {
    // Logique pour la gestion des tâches du projet avec l'ID donné
  }

  deleteProjet(id: number) {
    this.projetService.deleteProjet(id).subscribe(() => {
      this.getProjets();  // Mise à jour de la liste après suppression
    });
  }
}
