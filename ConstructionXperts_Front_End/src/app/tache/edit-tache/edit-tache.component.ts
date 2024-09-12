import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tache } from 'src/app/model/tache';
import { TaskServiceService } from 'src/app/service/task-service.service';

@Component({
  selector: 'app-edit-tache',
  templateUrl: './edit-tache.component.html',
  styleUrls: ['./edit-tache.component.css']
})
export class EditTacheComponent implements OnInit {
  task: tache = {
    id: 0,
    description: '',
    startDate: '',
    endDate: '',
    status: '',
    resources: '',
    projetId: 0
  };

  constructor(
    private taskService: TaskServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getTask();
  }

  getTask(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.taskService.getTaskById(id).subscribe(
      (data: tache) => {
        this.task = data;
      },
      error => {
        console.error('Error fetching task:', error);
      }
    );
  }

  onSubmit(): void {
    const id = this.task.id;
    this.taskService.updateTache(id, this.task).subscribe(
      () => {
        console.log('Task updated successfully');
        this.router.navigate(['/listtache']);
      },
      error => {
        console.error('Error updating task:', error);
      }
    );
  }
}
