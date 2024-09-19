import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
import { ProjetService } from '../../service/projet.service';
import { Projet } from '../../model/projet';
=======
import {Projet} from "../../model/projet";
import {ProjetService} from "../../service/projet.service";
>>>>>>> 8e5ed50fc036e2d7c50d57f07c3ff1456ee8b3f0


@Component({
  selector: 'app-projet-list',
  templateUrl: './projet-list.component.html',
  styleUrls: ['./projet-list.component.css']
})
export class ProjetListComponent implements OnInit {

  projets: Projet[] = [];

<<<<<<< HEAD
  constructor(private projetService: ProjetService, private router: Router) { }
=======
  constructor(private projetService: ProjetService) { }
>>>>>>> 8e5ed50fc036e2d7c50d57f07c3ff1456ee8b3f0

  ngOnInit(): void {
    this.getProjets();
  }

<<<<<<< HEAD
  private getProjets() {
=======
  getProjets() {
>>>>>>> 8e5ed50fc036e2d7c50d57f07c3ff1456ee8b3f0
    this.projetService.getProjets().subscribe(data => {
      this.projets = data;
    });
  }

<<<<<<< HEAD
  deleteProjet(id: number) {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce projet ?')) {
      this.projetService.deleteProjet(id).subscribe(data => {
        this.getProjets();
        window.alert('Le projet a été supprimé avec succès.');
      }, error => console.error(error));
    }
  }


  goToCreateProjet() {
    this.router.navigate(['/create-projet']);
  }

  goToUpdateProjet(id: number) {
    this.router.navigate(['/update-projet', id]);
  }

  manageTasks(id: number) {
    // Implémentation de la gestion des tâches ici
    console.log("Gérer les tâches pour le projet ID:", id);
=======
  manageTasks(id: number) {
    // Logique pour la gestion des tâches du projet avec l'ID donné
  }

  deleteProjet(id: number) {
    this.projetService.deleteProjet(id).subscribe(() => {
      this.getProjets();  // Mise à jour de la liste après suppression
    });
>>>>>>> 8e5ed50fc036e2d7c50d57f07c3ff1456ee8b3f0
  }
}
