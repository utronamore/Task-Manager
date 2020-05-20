import {Component, Input, OnInit} from '@angular/core';
import {Task} from 'src/app/task';
import {TaskStorageService} from '../task-storage.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})

export class TaskEditComponent implements OnInit {

  @Input() task: Task;
  selected = false;

  ngOnInit(): void {
    if (!this.task) {
      this.getTaskFromStorage();
    }
    console.log(this.task);
  }

  getTaskFromStorage(): void {
    this.route.paramMap.subscribe(params => {
      this.taskStorageService.getTaskFromStorage(+params.get('taskId'))
        .subscribe(task => this.task = task);
    });
    this.selected = true;
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskStorageService: TaskStorageService
  ) {
  }
}
