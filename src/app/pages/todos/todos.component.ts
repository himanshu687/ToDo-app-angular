import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

import { Todo } from './todo.model';
import { TodosService } from './todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  gridCol: number = 5;
  isLoading: boolean = false;
  paginatorTodos: Todo[];
  showFirstLastBtn: boolean;

  constructor(private todosService: TodosService) {}

  ngOnInit() {
    this.setGridCols(window.innerWidth);

    this.isLoading = true;

    this.todosService.getTodos().subscribe({
      next: (todos: Todo[]) => {
        this.todos = todos;
        this.paginatorTodos = todos.slice(0, 10);
      },
      error: (error) => {
        this.isLoading = false;
        throw error;
      },
      complete: () => {
        this.isLoading = false;
      },
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

    if (width > 500) {
      this.showFirstLastBtn = true;
    } else {
      this.showFirstLastBtn = false;
    }
  }

  onPageChange(e: PageEvent) {
    const startIndex = e.pageIndex * e.pageSize;
    let endIndex = startIndex + e.pageSize;

    if (endIndex > this.todos.length) {
      endIndex = this.todos.length;
    }

    this.paginatorTodos = this.todos.slice(startIndex, endIndex);

    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }
}
