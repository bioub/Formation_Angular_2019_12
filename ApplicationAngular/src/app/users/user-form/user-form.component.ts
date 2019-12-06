import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from '../user.model';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
  exportAs: 'userForm'
})
export class UserFormComponent {

  @Input() user: Partial<User> = {
    name: '',
    email: '',
    phone: ''
  };

  @Output() save = new EventEmitter<Partial<User>>();

  onSubmit() {
    this.save.emit({...this.user});
  }
}
