import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SushiDetailComponent } from './sushi-detail/sushi-detail.component'

const routes: Routes = [{ path: 'sushi-detail', component: SushiDetailComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class SuShiRoutingModule {}
