import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from './display/display.component'
import { DisplayRoutingModule } from './display-routing.module';
import {CardModule} from 'primeng/card';
import { DetaildisplayComponent } from './detaildisplay/detaildisplay.component';

@NgModule({
  declarations: [
    DisplayComponent,
    DetaildisplayComponent,
  ],
  imports: [
    CommonModule,
    DisplayRoutingModule,
    CardModule,
  ]
})
export class DisplayModule { }
