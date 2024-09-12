import { Component } from '@angular/core';
import {resources} from "../../model/ressource";


@Component({
  selector: 'app-showresources',
  templateUrl: './showresources.component.html',
  styleUrls: ['./showresources.component.css']
})
export class ShowresourcesComponent {
  Resources : resources[]  = [];

  AddResource() {

  }
}
