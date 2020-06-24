import {Component, Input, OnInit} from '@angular/core';
import {TaskStorageService} from 'src/app/task-storage.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})

export class TaskCreateComponent implements OnInit {

  createControls: FormGroup;

  @Input() header: string;
  @Input() description: string;
  @Input() deadline: Date;

  constructor(private taskStorageService: TaskStorageService) {
  }

  startDate = new Date();
  currentId = 1;

  addTaskToStorage(): void {
    this.taskStorageService.addTask(this.header, this.description, this.currentId, this.deadline);
    console.log('addTaskPressed');
  }

  ngOnInit(): void {
    this.createControls = new FormGroup({
      header: new FormControl('', [Validators.required]),
      description: new FormControl(''),
      deadline: new FormControl('')
    });
  }
}
