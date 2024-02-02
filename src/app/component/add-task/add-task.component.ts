import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
  taskForm!: FormGroup;


  constructor(private fb: FormBuilder, private router: Router, private taskService: TaskService, private snackBar: MatSnackBar) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      dueDate: ['', Validators.required],

    });
  }

  submitBlogForm() {
    this.taskService.addTask(this.taskForm.value).subscribe(data => {
      this.snackBar.open(
        'User updated',
        'Succes',
        {
          duration: 3000,
          verticalPosition: 'top',
          panelClass: 'success-snackBar',
        }
      );
      this.router.navigate(['/home']); 
    })
  }


}
