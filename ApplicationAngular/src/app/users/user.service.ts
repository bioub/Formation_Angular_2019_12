import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { delay } from "rxjs/operators";
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient
         .get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  getById(id) {
    const user$ = this.httpClient
         .get<User>('https://jsonplaceholder.typicode.com/users/' + id);

    // (1 tiret faut 500ms)
    // -----------{Res2}------------------
    // delay(5000)
    // ---------------------{Res2}------------------
    if (Number(id) === 2) {
      return user$.pipe(
        delay(5000),
      );
    }

    return user$;
  }
}
