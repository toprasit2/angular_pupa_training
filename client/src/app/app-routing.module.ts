import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMusicComponent } from './add-music/add-music.component';
import { DisplayComponent } from './display/display.component';
import { HomeComponent } from './home/home.component';
import { ManagementComponent } from './management/management.component';
import { ShowdisplayComponent } from './showdisplay/showdisplay.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'display', component: DisplayComponent },
  { path: 'management', component: ManagementComponent },
  { path: 'showdisplay/:id', component: ShowdisplayComponent },
  { path: 'add_music', component: AddMusicComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
