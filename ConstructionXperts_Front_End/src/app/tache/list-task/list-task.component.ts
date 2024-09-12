import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Status } from 'src/app/model/Enum/Status';
import { tache } from 'src/app/model/tache';
import { TaskServiceService } from 'src/app/service/task-service.service';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {

  taches : tache[]  = [];
  Status = Status;

  constructor(private router : Router , private taskservice :TaskServiceService ){}
  ngOnInit(): void {
    this.getAllTaches();
  }

  getAllTaches() : void {
    this.taskservice.getAllTaches().subscribe(data =>{
      this.taches = data;
    })
  }

  AddTache(): void {
    this.router.navigate(['/addtache']);
  }
  editTask(id: number): void {
    this.router.navigate(['/edit/tache', id]); // Navigate to the edit page
  }

  deleteTask(id: number): void {
    if (confirm('Are you sure you want to delete this task?')) {
      this.taskservice.deleteTache(id).subscribe(
        () => {
          this.getAllTaches(); // Refresh the list after deletion
        },
        error => {
          console.error('Error deleting task:', error);
        }
      );
    }
  }

  
}
