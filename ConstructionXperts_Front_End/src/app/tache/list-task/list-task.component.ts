import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tache } from 'src/app/model/tache';
import { TaskServiceService } from 'src/app/service/task-service.service';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {

  taches : tache[]  = [];

  constructor(private router : Router , private taskservice :TaskServiceService ){}
  ngOnInit(): void {
    this.getAllTaches();
  }

  getAllTaches() : void {
    this.taskservice.getAllTaches().subscribe(data =>{
      this.taches = data;
    })
  }
}
