import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from 'src/app/task';
import { Router, ActivatedRoute } from '@angular/router';
import {TaskStorageService} from '../task-storage.service';
import {MatDialog} from '@angular/material/dialog';
import {TaskDeleteComponent} from '../task-delete/task-delete.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private TaskStorageService: TaskStorageService,
    public dialog: MatDialog
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
    this.route.paramMap.subscribe(params => {
      this.TaskStorageService.getTaskFromStorage(+params.get('taskId'))
        .subscribe(task => this.task = task);
  });
    this.selected = true;
  }

  openDialog() {
    const dialogRef = this.dialog.open(TaskDeleteComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result) {this.deleteTask(); }
    });
  }

  deleteTask() {
    this.TaskStorageService.deleteTask(this.task);
  }

  ngOnInit(): void {
    if (!this.task) {
      this.getTaskFromStorage();
    }
    console.log(this.task);
  }
}

