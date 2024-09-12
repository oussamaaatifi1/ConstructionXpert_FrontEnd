import { Component } from '@angular/core';

@Component({
  selector: 'app-showresources',
  templateUrl: './showresources.component.html',
  styleUrls: ['./showresources.component.css']
})
export class ShowresourcesComponent {
  Resource: (NgIterable<unknown> & NgIterable<any>) | undefined | null;

  AddResource() {
    
  }
}
