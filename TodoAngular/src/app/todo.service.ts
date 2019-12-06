import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Todo } from './todo.model';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<Todo[]>(environment.backendUrl + '/todos');
    // REQUETE HTTP :
    // GET /todos HTTP/1.1
    // Host: jsonplaceholder.typicode.com
    // Accept: application/json
    // User-agent: Chrome 78

    // REPONSE HTTP :
    // HTTP/1.1 200 OK
    // Content-type: application/json
    // X-powered-by: json-server
    // [{"id": 1, "title": "ABC", "completed": false}]
  }
}
