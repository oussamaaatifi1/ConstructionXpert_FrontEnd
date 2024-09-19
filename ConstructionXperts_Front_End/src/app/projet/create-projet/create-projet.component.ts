import { Component } from '@angular/core';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { Projet } from '../../model/projet';
import { ProjetService } from '../../service/projet.service';
=======
import {Projet} from "../../model/projet";
import {ProjetService} from "../../service/projet.service";
>>>>>>> 8e5ed50fc036e2d7c50d57f07c3ff1456ee8b3f0

@Component({
  selector: 'app-create-projet',
  templateUrl: './create-projet.component.html',
  styleUrls: ['./create-projet.component.css']
})
export class CreateProjetComponent {

  projet: Projet = new Projet();

<<<<<<< HEAD
  constructor(private projetService: ProjetService, private router: Router) { }
=======
  constructor(private projetService: ProjetService, private router: Router) {}
>>>>>>> 8e5ed50fc036e2d7c50d57f07c3ff1456ee8b3f0

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
