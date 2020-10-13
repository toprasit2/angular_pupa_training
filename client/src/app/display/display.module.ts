import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from './display/display.component'
import { DisplayRoutingModule } from './display-routing.module';


@NgModule({
  declarations: [DisplayComponent],
  imports: [
    CommonModule,
    DisplayRoutingModule,
  ]
})
export class DisplayModule { }
