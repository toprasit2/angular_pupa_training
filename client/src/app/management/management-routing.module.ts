import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicCreateComponent } from './music-create/music-create.component';
import { MusicEditComponent } from './music-edit/music-edit.component';
import { MusicListComponent } from './music-list/music-list.component';

const routes: Routes = [
  { path: 'music-list', component: MusicListComponent },
  { path: 'music/create', component: MusicCreateComponent },
  { path: 'music/edit/:id', component: MusicEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ManagementRoutingModule {}
