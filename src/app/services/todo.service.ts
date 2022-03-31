import { Injectable } from '@angular/core';
import { Todo } from '../Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = [
    {
      id: 1,
      title: 'Take dog to walk',
      description: 'Some random description'
    },
    {
      id: 2,
      title: 'Second Task',
      description: 'Some random description'
    },
    {
      id: 3,
      title: 'Third Task',
      description: 'Some random description'
    }
  ];

  // function for getting all todos
  getTodos(): Todo[] {
    return this.todos;
  }

  // function for adding a todo
  addTodo(todo: Todo):void {
    this.todos.push(todo);
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  constructor() { }
}
