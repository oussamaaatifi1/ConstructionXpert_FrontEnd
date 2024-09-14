import { Component } from '@angular/core';
import { resourcesModel} from "../../model/resourcesModel";
import {Router} from "@angular/router";
import {ResourceService} from "../../service/ResourceService/resource.service";

@Component({
  selector: 'app-showresources',
  templateUrl: './showresources.component.html',
  styleUrls: ['./showresources.component.css']
})
export class ShowresourcesComponent {
  resourcesModel : resourcesModel[]  = [];

  constructor(private router : Router , private ResourcesService :ResourceService) {
  }
  ngOnInit(): void {
    this.getAllResources();
  }

  getAllResources() : void {
    this.ResourcesService.getAllResources().subscribe(data =>{
      this.resourcesModel = data;
    })
  }

}
