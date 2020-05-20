import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from 'src/app/task';
import {TaskStorageService} from '../task-storage.service';
import {TaskCreateComponent} from '../task-create/task-create.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent implements OnInit {
  @Input() task: Task;
  @Input() deleteButtonPressed = new EventEmitter<void>();
  @Output() addButtonPressed = new EventEmitter<void>();

  tasks: Task[];

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private taskStorageService: TaskStorageService,
              private route: ActivatedRoute
  ) {}

  getTasks(): void {
    this.tasks = this.taskStorageService.getTasks();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }

  ngOnInit() {
    this.getTasks();
    console.log(this.tasks);
  }

}
