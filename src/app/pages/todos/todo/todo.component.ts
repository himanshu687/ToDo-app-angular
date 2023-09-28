import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../todo.model';
import { MatDialog } from '@angular/material/dialog';
import { TodoDetailsModalComponent } from '../todo-details-modal/todo-details-modal.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    // this.handleModalClick(1);
  }

  handleModalClick(todoId: number) {
    console.log(todoId);
    this.dialog.open(TodoDetailsModalComponent, {
      data: this.todo,
    });
  }
}
