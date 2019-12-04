import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'todo-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Output() add = new EventEmitter<Todo>();
  todo = new Todo();

  constructor() { }

  ngOnInit() {
  }

  addTodo(event: Event) {
    event.preventDefault();
    this.add.emit({...this.todo});
  }
}
