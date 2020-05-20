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

  moveTask(index: number, direction: boolean): void {
    if (direction && (index !== 0
    )) {
      // move up
      const tmp: Task = this.tasks[index];
      this.tasks[index] = this.tasks[index - 1];
      this.tasks[index - 1] = tmp;
    } else if (!direction && (index !== this.tasks.length - 1
    )) {
      // move down
      const tmp: Task = this.tasks[index];
      this.tasks[index] = this.tasks[index + 1];
      this.tasks[index + 1] = tmp;
    }
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
