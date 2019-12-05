import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockComponent } from './clock/clock.component';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [ClockComponent, LoaderComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ClockComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
