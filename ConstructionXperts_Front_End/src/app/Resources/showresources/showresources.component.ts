import { Component } from '@angular/core';
import {resources} from "../../model/ressource";
import {Router} from "@angular/router";
import {ResourcesService} from "../../service/ResourceService/resources.service";


@Component({
  selector: 'app-showresources',
  templateUrl: './showresources.component.html',
  styleUrls: ['./showresources.component.css']
})
export class ShowresourcesComponent {
  Resources : resources[]  = [];

  constructor(private router : Router , private ResourcesService :ResourcesService) {
  }
  ngOnInit(): void {
    this.getAllResources();
  }

  getAllResources() : void {
    this.ResourcesService.getAllResources().subscribe(data =>{
      this.Resources = data;
    })
  }
}
