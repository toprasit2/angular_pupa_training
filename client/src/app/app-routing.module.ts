import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { AddMusicComponent } from './add-music/add-music.component';
import { DisplayComponent } from './display/display.component';
import { HomeComponent } from './home/home.component';
import { ManagementComponent } from './management/management.component';
import { ShowdisplayComponent } from './showdisplay/showdisplay.component';
import { EditMusicComponent } from './edit-music/edit-music.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'display', component: DisplayComponent },
  { path: 'management', component: ManagementComponent },
  { path: 'showdisplay/:id', component: ShowdisplayComponent },
  { path: 'add_music', component: AddMusicComponent },
  { path: 'management/add-music', component: AddMusicComponent },
  { path: 'management/edit-music', component: EditMusicComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
