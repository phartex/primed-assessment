import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {
  taskForm!: FormGroup;
taskId:any= '';


  constructor(private fb: FormBuilder, private router: Router, private taskService: TaskService,private route: ActivatedRoute,private snackBar: MatSnackBar) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      dueDate: ['', Validators.required],

    });
  };

  
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.taskId = params['id'];
      this.getTaskById(this.taskId);
    });
    
  };  


  getTaskById(id: string) {
    // this.taskService.getOpenTasks(id:any)).subscribe((res) => {
    //   this.blogDetails = res;
    //   this.BlogForm.patchValue(res);
    // })
  };

  submitTaskForm(){
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
  }
}
