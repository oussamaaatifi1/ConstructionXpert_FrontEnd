import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Projet} from "../../model/projet";
import {ProjetService} from "../../service/projet.service";


@Component({
  selector: 'app-update-projet',
  templateUrl: './update-projet.component.html',
  styleUrls: ['./update-projet.component.css']
})
export class UpdateProjetComponent implements OnInit {

  id!: number;
  projet: Projet = new Projet();

  constructor(
    private projetService: ProjetService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.projetService.getProjetById(this.id).subscribe(data => {
      this.projet = data;
    }, error => console.error(error));
  }

  onSubmit() {
    this.projetService.updateProjet(this.id, this.projet).subscribe(data => {
      this.goToProjetList();
    }, error => console.error(error));
  }

  goToProjetList() {
    this.router.navigate(['/projets']);
  }
}
