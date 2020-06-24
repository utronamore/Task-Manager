import {Injectable} from '@angular/core';
import {Task} from './task';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskStorageService {
  private tasks: Task[] = [
    {
      header: 'Ваша первая задача',
      description: 'Описание задачи',
      done: false,
      taskId: 0,
      deadline: new Date('2019-05-05')
    }
  ];

  currentId = 1;

  /* Метод для получения, надо доработать */
  getTasks(): Task [] {
    return this.tasks;
  }

  deleteTask(task): void {
    const index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
  }

  /* Метод для добавления, надо доработать */
  addTask(inHeader, inDescription, currentId, inDeadline) {
    this.tasks.push({
      header: inHeader,
      description: inDescription,
      done: false,
      taskId: this.currentId++,
      deadline: inDeadline
    });
  }

  getTaskFromStorage(id: number): Observable<Task> {
    return of(this.tasks.find(task => task.taskId === id));
  }
}
