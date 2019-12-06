import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockComponent } from './clock/clock.component';
import { LoaderComponent } from './loader/loader.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ClockComponent, LoaderComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ClockComponent,
    LoaderComponent,

    // en important SharedModule on importera aussi :
    CommonModule,
    FormsModule,
  ]
})
export class SharedModule { }
