import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayListComponent } from './display-list/display-list.component';
import { ManagementComponent } from './management/management.component';
import { MenuComponent } from './menu/menu.component';
import { MusicDetailComponent } from './music-detail/music-detail.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
const routes: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full'},
  { path: 'menu', component: MenuComponent},
  { path: 'display', component: DisplayListComponent},
  { path: 'management', component: ManagementComponent},
  { path: 'youtube/:id', component: MusicDetailComponent},
  { path: 'edit/:id', component: EditComponent},
  { path: 'create', component: CreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
