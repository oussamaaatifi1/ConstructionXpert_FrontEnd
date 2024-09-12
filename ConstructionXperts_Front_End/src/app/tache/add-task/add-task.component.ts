import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskServiceService } from 'src/app/service/task-service.service';
import { Status } from '../../model/Enum/Status';  // Import the enum
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  taskForm!: FormGroup;
  public Status = Status; // This allows you to access Status enum in the template

  constructor(private fb: FormBuilder, private taskService: TaskServiceService,private router: Router) { }

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      description: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      status: [Status.IN_PROGRESS, Validators.required],
      resources: ['', Validators.required],
      projetId: ['', Validators.required]
    });
  }

  createNewTask(): void {
    console.log(this.taskForm.value); // Log form values

    if (this.taskForm.valid) {
      const newTask = this.taskForm.value;

      this.taskService.createTache(newTask).subscribe(
        response => {
          console.log('Task created successfully:', response);
          this.taskForm.reset();  // Reset the form on success
          this.router.navigate(['/listtache']); // Redirect to /listtache

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
