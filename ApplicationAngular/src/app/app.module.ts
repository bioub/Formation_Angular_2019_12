import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { SharedModule } from './shared/shared.module';
import { UsersModule } from './users/users.module';
import { TopBarComponent } from './core/top-bar/top-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    UsersModule,
    SharedModule,
    AppRoutingModule, // toujours en dernier (car route not-found)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
