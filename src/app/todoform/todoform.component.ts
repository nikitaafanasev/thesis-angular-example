import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-todoform',
  imports: [
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './todoform.component.html',
  styleUrl: './todoform.component.css'
})
export class TodoformComponent {
  @Output() todoAdded = new EventEmitter<string>();

  todoControl = new FormControl('', [Validators.required, Validators.minLength(3)]);

  onSubmit() {
    if (this.todoControl.valid) {
      this.todoAdded.emit(this.todoControl.value || '');
      this.todoControl.reset();
    }
  }
}
