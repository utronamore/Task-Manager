import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from 'src/app/task';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {TaskStorageService} from '../task-storage.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: TaskStorageService
  ) {}

  @Input() task: Task;
  selected = false;

  openPopup(): void {
    this.selected = true;
  }
  closePopup(): void {
    this.selected = false;
  }

  getTaskFromStorage(): void {
    const id = + this.route.snapshot.paramMap.get('taskId');
    this.service.getTaskFromStorage(id)
      .subscribe(task => this.task = task);
  }

  ngOnInit(): void {
    this.getTaskFromStorage()
    console.log(this.task);
  }
}
