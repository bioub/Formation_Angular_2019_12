import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import { User } from "../user.model";
import { Observable, combineLatest } from "rxjs";
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"]
})
export class UsersComponent implements OnInit {
  users$: Observable<User[]>;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users$ = combineLatest(
      this.userService.getAll(),
      this.userService.events.add.pipe(startWith(null))
    ).pipe(
      map(([users, newUser]) => {
        if (newUser) {
          return [...users, newUser];
        }
        return users;
      })
    );
  }
}
