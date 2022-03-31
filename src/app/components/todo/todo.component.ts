import { Component, Input, Output, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';
import { TodoService } from 'src/app/services/todo.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo!: Todo;
  @Output() onDeleteTask: EventEmitter<number> = new EventEmitter;

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }

  onDelete():void {
    this.onDeleteTask.emit();
  }
}
