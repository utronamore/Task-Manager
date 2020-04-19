import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-delete',
  templateUrl: './task-delete.component.html',
  styleUrls: ['./task-delete.component.css']
})
export class TaskDeleteComponent implements OnInit {

  selected = false;

  openPopup(): void {
    this.selected = true;
  }
  closePopup(): void {
    this.selected = false;
  }

  deleteTodo(): void {
    this.deleteButtonPressed.emit();
    console.log('Deletetodo');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
