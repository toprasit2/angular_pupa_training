import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayMusicDetailComponent } from './display-music-detail/display-music-detail.component';
import { DisplayMusicListComponent } from './display-music-list/display-music-list.component';

const routes: Routes = [
  { path: 'display', component: DisplayMusicListComponent },
  { path: 'display/:id', component: DisplayMusicDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class DisplayRoutingModule {}
