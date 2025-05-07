import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-todolist',
  imports: [
    NgForOf
  ],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
  @Input() todos: string[] = [];
  @Output() deleteRequested = new EventEmitter<number>();

  onDelete(index: number) {
    this.deleteRequested.emit(index);
  }
}
