import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserAddComponent } from './user-add/user-add.component';

/*
Exercice :
Créer et router 3 composants dans les modules User et UserRouting :
UsersComponent -> URL /users
UserDetailsComponent -> URL /users/details
UserAddComponent -> URL /users/add

Importer UserModule depuis AppModule pour activer les routes
*/
const routes: Routes = [{
  path: 'users',
  component: UsersComponent,
}, {
  path: 'users/add',
  component: UserAddComponent,
}, {
  path: 'users/:id',
  component: UserDetailsComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
