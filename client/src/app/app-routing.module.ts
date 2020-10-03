import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayListComponent } from './display-list/display-list.component';
import { ManagementComponent } from './management/management.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full'},
  { path: 'menu', component: MenuComponent},
  { path: 'display', component: DisplayListComponent},
  { path: 'management', component: ManagementComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
