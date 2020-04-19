import {Component, Input, OnInit} from '@angular/core';
import {Task} from '../task';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {
  @Input() task: Task;
  @Input()
  selected = false;

  openPopup(): void {
    this.selected = true;
  }
  closePopup(): void {
    this.selected = false;
  }

  editTask(): void {

  }

  constructor() { }

  ngOnInit(): void {
  }

}
