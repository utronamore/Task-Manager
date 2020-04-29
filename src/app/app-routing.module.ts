import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TaskComponent} from './task/task.component';
import {TaskListComponent} from './task-list/task-list.component';

const routes: Routes = [
  { path: 'Tasks', component: TaskListComponent },
  { path: 'Tasks/:taskId', component: TaskComponent },
  { path: '**', redirectTo: '/Tasks'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
