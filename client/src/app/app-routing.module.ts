import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { ManagementComponent } from './management/management.component'
import { MenuComponent } from './menu/menu.component';
const routes: Routes = [
  { path: '',redirectTo: '/Menu', pathMatch: 'full'},
  { path: 'Menu', component: MenuComponent},
  { path: 'Display', component:  DisplayComponent},
  { path: 'Management', component: ManagementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
