import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  @Input() user: Partial<User> = {
    name: '',
    email: '',
    phone: ''
  };

  @Output() save = new EventEmitter<Partial<User>>();

  onSubmit(event: Event) {
    event.preventDefault();
    // {...this.user} cloner l'objet user
    this.save.emit({...this.user});
  }
}
