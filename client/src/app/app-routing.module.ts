import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { ManagementComponent } from './management/management.component'
import { MenuComponent } from './menu/menu.component';
import { PlayYoutubeComponent } from './play-youtube/play-youtube.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { CommonModule } from '@angular/common';
const routes: Routes = [
  { path: '',redirectTo: '/Menu', pathMatch: 'full'},
  { path: 'Menu', component: MenuComponent},
  { path: 'Display', component:  DisplayComponent},
  { path: 'Management', component: ManagementComponent},
  { path: 'Display/:id', component: PlayYoutubeComponent},
  { path: 'Management/:id', component: EditComponent},
  { path: 'ADD', component: CreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
