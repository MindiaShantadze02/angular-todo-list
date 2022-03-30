import { Component } from '@angular/core';
import { Todo } from './Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
}
