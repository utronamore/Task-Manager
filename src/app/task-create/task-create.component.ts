import {Component, Input, OnInit} from '@angular/core';
import {Task} from 'src/app/task';
import {TaskStorageService} from 'src/app/task-storage.service';
import {MatInput} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})

export class TaskCreateComponent implements OnInit {

  @Input() header: string;
  @Input() description: string;
  @Input() deadline: Date;

  constructor(private taskStorageService: TaskStorageService) {
  }

  selected = false;
  currentId = 1;
  headerControl = new FormControl('', [Validators.required]);

  openPopup(): void {
    this.selected = true;
  }

  closePopup(): void {
    this.selected = false;
  }

  addTaskToStorage(): void {
    this.taskStorageService.addTask(this.header, this.description, this.currentId, this.deadline);
    console.log('addTaskPressed');
  }

  getErrorMessage() {
    if (this.headerControl.hasError('required')) {
      return 'You need enter a value';
    }
  }

  clearForm() {
    this.header = '';
    this.description = '';
    this.deadline = null;
  }

  ngOnInit(): void {
  }

}
