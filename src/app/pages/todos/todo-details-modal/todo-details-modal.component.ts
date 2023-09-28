import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-details-modal',
  templateUrl: './todo-details-modal.component.html',
  styleUrls: ['./todo-details-modal.component.css'],
})
export class TodoDetailsModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Todo) {}
}
