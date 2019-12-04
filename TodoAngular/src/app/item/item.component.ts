import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'todo-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() todo: Todo;

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    console.log('check item');
  }
}
