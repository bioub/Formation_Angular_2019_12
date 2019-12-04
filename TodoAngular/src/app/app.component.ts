import { Component } from "@angular/core";
import { Todo } from './todo.model';

@Component({
  selector: "todo-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "TodoAngular";

  todos: Todo[] = [
    {
      id: Math.random(),
      title: "Acheter du pain",
      completed: true
    },
    {
      id: Math.random(),
      title: "Démarrer une app avec le router",
      completed: false
    }
  ];

  addTodo(todo) {
    // Ajout muable au tableau
    // this.todos.push(todo);

    // Ajout immuable au tableau
    this.todos = [...this.todos, todo];
  }
}
