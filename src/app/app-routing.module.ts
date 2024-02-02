import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { EditTaskComponent } from './component/edit-task/edit-task.component';
import { AddTaskComponent } from './component/add-task/add-task.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'add-task',
    component: AddTaskComponent
  },
  {
    path: 'edit-task',
    component: EditTaskComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
