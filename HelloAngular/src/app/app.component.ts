import { Component } from '@angular/core';
import { User } from './user-form/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  prenom = 'Jean';

  user: Partial<User> = {};
}
