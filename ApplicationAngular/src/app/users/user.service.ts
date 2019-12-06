import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { delay, tap } from "rxjs/operators";
import { User } from "./user.model";

@Injectable({
  providedIn: "root"
})
export class UserService {
  events = {
    add: new EventEmitter<User>()
  };

  constructor(private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get<User[]>(
      "https://jsonplaceholder.typicode.com/users"
    );
  }

  getById(id) {
    const user$ = this.httpClient.get<User>(
      "https://jsonplaceholder.typicode.com/users/" + id
    );

    // (1 tiret faut 500ms)
    // -----------{Res2}------------------
    // delay(5000)
    // ---------------------{Res2}------------------
    // if (Number(id) === 2) {
    //   return user$.pipe(
    //     delay(5000),
    //   );
    // }

    return user$;
  }

  create(user) {
    const user$ = this.httpClient
      .post<User>("https://jsonplaceholder.typicode.com/users", user)
      .pipe(tap((user) => this.events.add.emit(user)));

    return user$;
  }
}
