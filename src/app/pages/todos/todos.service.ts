import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable()
export class TodosService {
  private URL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getTodos() {
    return this.http.get<Todo[]>(this.URL + '/todos');
  }
}
