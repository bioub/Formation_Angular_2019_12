import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*
Exercice :
Créer et router 3 composants dans les modules User et UserRouting :
UsersComponent -> URL /users
UserDetailsComponent -> URL /users/details
UserAddComponent -> URL /users/add

Importer UserModule depuis AppModule pour activer les routes
*/
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
