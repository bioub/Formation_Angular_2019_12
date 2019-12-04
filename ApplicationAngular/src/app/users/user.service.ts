import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
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
    return this.httpClient
         .get<User>('https://jsonplaceholder.typicode.com/users/' + id);
  }
}
