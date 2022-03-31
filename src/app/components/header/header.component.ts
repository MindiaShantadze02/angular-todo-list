import { Component, OnInit,Output } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  todoForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required])
  });

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    
  }

  onSubmit() {
    const newTodo: Todo = {
      id: Math.floor(Math.random() * 1000000),
      ...this.todoForm.value
    };

    this.todoService.addTodo(newTodo);

    this.todoForm.setValue({
      title: '',
      description: ''
    });
  }
}
