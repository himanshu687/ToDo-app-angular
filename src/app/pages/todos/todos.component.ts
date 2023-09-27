import { Component, HostListener, OnInit } from '@angular/core';
import { Todo } from './todo.model';
import { TodosService } from './todos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  gridCol: number = 5;
  isLoading: boolean = false;

  constructor(private todosService: TodosService) {}

  ngOnInit() {
    this.setGridCols(window.innerWidth);

    this.isLoading = true;

    this.todosService.getTodos().subscribe((todos) => {
      this.todos = todos;
      this.isLoading = false;
    });
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.setGridCols(window.innerWidth);
  }

  setGridCols(width: number) {
    if (width > 1200) this.gridCol = 5;
    else if (width > 1000) this.gridCol = 4;
    else if (width > 800) this.gridCol = 3;
    else if (width > 600) this.gridCol = 2;
    else this.gridCol = 1;
  }
}
