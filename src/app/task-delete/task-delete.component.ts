import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-task-delete',
  templateUrl: './task-delete.component.html',
  styleUrls: ['./task-delete.component.css']
})
export class TaskDeleteComponent implements OnInit {

  deleteTodo(): void {
    this.deleteButtonPressed.emit();
    console.log('Deletetodo');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
