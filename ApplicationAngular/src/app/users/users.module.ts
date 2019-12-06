import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserAddComponent } from './user-add/user-add.component';
import { SharedModule } from '../shared/shared.module';
import { UserFormComponent } from './user-form/user-form.component';


@NgModule({
  declarations: [
    UsersComponent,
    UserDetailsComponent,
    UserAddComponent,
    UserFormComponent,
  ],
  imports: [
    SharedModule,
    // CommonModule,
    // FormsModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
