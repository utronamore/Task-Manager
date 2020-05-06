import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from 'src/app/task';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {TaskStorageService} from '../task-storage.service';
import {FormsModule} from '@angular/forms';

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

  // These 2 functions should be deleted
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
    this.selected = true;
  }

  ngOnInit(): void {
    if (!this.task) {
      this.getTaskFromStorage();
    }
    console.log(this.task);
  }


}
