import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from 'src/app/task';
import {MatDialog} from '@angular/material/dialog';
import {TaskStorageService} from '../task-storage.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {TaskCreateComponent} from '../task-create/task-create.component';

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

  constructor(private taskStorageService: TaskStorageService,
              public dialog: MatDialog
  ) {
  }

  getTasks(): void {
    this.tasks = this.taskStorageService.getTasks();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }

  openDialog() {
    const dialogRef = this.dialog.open(TaskCreateComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {
    this.getTasks();
    console.log(this.tasks);
  }

}
