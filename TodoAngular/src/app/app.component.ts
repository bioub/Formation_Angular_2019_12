import { Component } from "@angular/core";
import { Todo } from './todo.model';
import { TodoService } from './todo.service';

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

  constructor(private todoService: TodoService) {

  }

  addTodo(todo) {
    // Ajout muable au tableau
    // this.todos.push(todo);

    // Ajout immuable au tableau
    this.todos = [...this.todos, todo];
  }

  ngOnInit() {
    // Exercice :
    // - Générer un service TodoService
    // - Dépendre de HttpClient (pensez à HttpClientModule)
    // - Au chargement du composant AppComponent
    // - Envoyer une requete via TodoService pour récupérer la liste
    // des todos depuis https://jsonplaceholder.typicode.com/todos

    this.todoService.getAll().subscribe((todos) => {
      this.todos = [...this.todos, ...todos];
    })
  }
}
