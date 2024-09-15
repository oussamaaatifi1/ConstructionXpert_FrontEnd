import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Projet} from "../../model/projet";
import {ProjetService} from "../../service/projet.service";

@Component({
  selector: 'app-create-projet',
  templateUrl: './create-projet.component.html',
  styleUrls: ['./create-projet.component.css']
})
export class CreateProjetComponent {

  projet: Projet = new Projet();

  constructor(private projetService: ProjetService, private router: Router) {}

  saveProjet() {
    this.projetService.createProjet(this.projet).subscribe(data => {
      this.goToProjetList();
    }, error => console.error(error));
  }

  goToProjetList() {
    this.router.navigate(['/projets']);
  }

  onSubmit() {
    this.saveProjet();
  }
}
