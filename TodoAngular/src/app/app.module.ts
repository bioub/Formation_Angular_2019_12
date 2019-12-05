import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { HttpClientModule } from '@angular/common/http';
// import { TodoService } from './todo.service';
// import { of } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
  // useValue fourni directement l'objet
  //   {
  //   provide: TodoService,
  //   useValue: {
  //     getAll() {
  //       return of([{id: 1245, title: 'Introduire RxJS', completed: true}])
  //     }
  //   }
  // }
  // useValue fourni une fonction qui retourne l'objet
  // {
  //   provide: TodoService,
  //   useFactory: function() {
  //     const fakeHttpClient = {}
  //     return new TodoService(fakeHttpClient);
  //   }
  // }
  // useExisting fourni un service existant
  // {
  //   provide: TodoService,
  //   useExisting: TodoProdService,
  // }
  // useClass founir la classe à instancier, à condition
  // que les arguments du constructeur soit eux même configurés
  // dans l'injecteur
  // {
  //   provide: TodoService,
  //   useClass: TodoService,
  // }
  // peut aussi s'écrire
  // TodoService
  // ou directement dans le décorateur Injectable du Service
],
  bootstrap: [AppComponent]
})
export class AppModule { }
