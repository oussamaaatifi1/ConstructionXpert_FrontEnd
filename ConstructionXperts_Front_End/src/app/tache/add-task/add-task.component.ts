import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tache } from 'src/app/model/tache';
import { TaskServiceService } from 'src/app/service/task-service.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent  implements OnInit {
  taskForm!: FormGroup;

  constructor(private fb: FormBuilder, private taskService: TaskServiceService) { }

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      description: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      status: ['', Validators.required],
      resources: ['', Validators.required],
      projetId: ['', Validators.required]
    });
  }

  createNewTask(): void {
    if (this.taskForm.valid) {
      const newTask: tache = this.taskForm.value;

      this.taskService.createTache(newTask).subscribe(
        response => {
          console.log('Task created successfully:', response);
        },
        error => {
          console.error('Error creating task:', error);
        }
      );
    } else {
      console.error('Form is invalid');
    }
  }
}
