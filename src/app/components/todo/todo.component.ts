import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo = {
    id: 0,
    title: '',
    description: ''
  };

  constructor() { }

  ngOnInit(): void {
    console.log(this.todo)
  }

}
