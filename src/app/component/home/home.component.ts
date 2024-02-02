import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dataSource: any;
  data = [
    { id: 1, taskName: 'Clean', description: 'clean the living room', taskStatus: 'open', dueDate: new Date() },
    { id: 1, taskName: 'Cook', description: 'prepare oats for breakfast', taskStatus: 'open', dueDate: new Date() },
    { id: 1, taskName: 'Gym', description: 'go to the gym by noon', taskStatus: 'open', dueDate: new Date() },
    { id: 1, taskName: 'Study', description: 'study he book i left on the shelf', taskStatus: 'open', dueDate: new Date() },
    { id: 1, taskName: 'Music', description: 'listen to some music to relax', taskStatus: 'open', dueDate: new Date() },
    { id: 1, taskName: 'Gym', description: 'go to the gym by noon', taskStatus: 'open', dueDate: new Date() },
    { id: 1, taskName: 'Clean', description: 'clean the living room', taskStatus: 'open', dueDate: new Date() },

  ];
  displayedColumns: string[] = [
    "Open",
    "Pending",
    "In Progress",
    "Completed"
  ];

  newTasks: any[] = [
    {
      id: 0,
      name: 'Open',
      title: 'Cook',
      description: 'prepare oat for breakfast',
      dueDate: new Date()
    },

    {
      id: 1,
      name: 'Pendng',
      title: 'Study',
      description: 'read the book on the shelf',
      dueDate: new Date()
    },

    {
      id: 2,
      name: 'In progress',
      title: 'Gym',
      description: 'Be at the gym by 12 noon',
      dueDate: new Date()
    },
    {
      id: 3,
      name: 'Completed',
      title: 'Cook',
      description: 'prepare oat for breakfast',
      dueDate: new Date()
    },

  ];

  tasks: any = [];
  pendingTasks: any = [];
  inProgressTasks: any = [];
  completedTasks: any = [];
  constructor(private router: Router, private taskService: TaskService, private snackBar: MatSnackBar) {

  }



  ngOnInit(): void {
    this.taskService.getOpenTasks().subscribe((data) => {
      console.log(data);
      this.tasks = data
    })

    this.taskService.getInProgressTasks().subscribe((data) => {
      console.log(data);
      this.inProgressTasks = data
    })

    this.taskService.getPendingTasks().subscribe((data) => {
      console.log(data);
      this.pendingTasks = data
    })

    this.taskService.getCompletedTasks().subscribe((data) => {
      console.log(data);
      this.completedTasks = data
    })

  };

  OnContinue(id: any) {
    console.log(id)
  }

  deleteTask(id:any){
    console.log(id)
    this.taskService.deleteTask(id).subscribe((data)=>{
      console.log(data);
      this.tasks = this.tasks.filter((task:any) => task.id !== id);
      // this.snackBar.open(
      //   'User updated',
      //   'Succes',
      //   {
      //     duration: 3000,
      //     verticalPosition: 'top',
      //     panelClass: 'success-snackBar',
      //   }
      // );
    })

  }

}
