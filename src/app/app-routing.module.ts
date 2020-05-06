import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TaskComponent} from './task/task.component';
import {TaskListComponent} from './task-list/task-list.component';
import {TaskEditComponent} from './task-edit/task-edit.component';

const routes: Routes = [
  { path: 'tasks', component: TaskListComponent },
  { path: 'tasks/:taskId', component: TaskComponent },
  { path: 'tasks/:taskId/edit', component: TaskEditComponent},
  { path: '**', redirectTo: '/tasks'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
