import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router,
    ) { }

  ngOnInit() {
  }

  createUser(user) {
    this.userService.create(user).subscribe((user) => {
      this.router.navigate(['users']);
    });
    /* Exercice :
    Ajouter une methode create dans UserService qui envoit
    une requete post et retourne le resultat (voir la doc de HttpClient)

    Dans UserService ajouter un EventEmitter et emettre un event add (du User créé)
    qui sera emit au moment du navigate

    Dans UsersComponent écouter l'event add et ajouter le user au tableau
    (soit au niveau de l'observable, soit en revenant au subscribe plutot que | async)

    (optionnel) Ajouter un composant UserUpdateComponent,
    le router sur l'url /users/:id/update
    Implémenter l'update qui est un mix entre UserDetail et UserAdd
    */
  }
}
