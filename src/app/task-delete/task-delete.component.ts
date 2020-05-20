import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-task-delete',
  templateUrl: './task-delete.component.html',
  styleUrls: ['./task-delete.component.css']
})
export class TaskDeleteComponent implements OnInit {
  constructor() { }

  @Output() deleteButtonPressed = new EventEmitter<void>();

  deleteTask(): void {
    this.deleteButtonPressed.emit();
    console.log('DeleteTask');
  }

  ngOnInit(): void {}

}
