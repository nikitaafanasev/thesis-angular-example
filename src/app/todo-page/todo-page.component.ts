import { Component } from '@angular/core';
import {TodoformComponent} from '../todoform/todoform.component';
import {TodolistComponent} from '../todolist/todolist.component';

@Component({
  selector: 'app-todo-page',
  imports: [
    TodoformComponent,
    TodolistComponent
  ],
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.css'
})
export class TodoPageComponent {
  todos: string[] = JSON.parse(localStorage.getItem('todos') || '[]');

  addTodo(todo: string) {
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}

