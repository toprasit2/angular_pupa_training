import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetaildisplayComponent } from './detaildisplay/detaildisplay.component';
import { DisplayComponent } from './display/display.component'

const routes: Routes = [
  { path: 'listdisplay', component: DisplayComponent},
  { path: 'detaildisplay', component: DetaildisplayComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DisplayRoutingModule { }
