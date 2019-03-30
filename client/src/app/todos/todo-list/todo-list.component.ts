import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { FlashMessagesService } from 'angular2-flash-messages';
//import { TodoService } from './../../services/todo.service';
import { Router } from '@angular/router';

import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[];

  constructor(    // inject the services which will be called into the constructor
    private todoListService: TodoService,
    private flashMessage: FlashMessagesService,
    private router: Router
    ) { }

  ngOnInit() {
    this.todos = new Array<Todo>();   // initialize array of type Todo

    this.displayTodoList(); // display Todo list
  }

  displayTodoList(): void {
    this.todoListService.getList().subscribe(data => {
      if(data.success) {
        console.log(data);
        this.todos = data.todoList;
      } else {
        this.flashMessage.show('User must be logged-in', {cssClass: 'alert-danger', timeOut: 3000});
      }
    });
  }

}
