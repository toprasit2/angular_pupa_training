import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SushiDetailComponent } from './sushi-detail/sushi-detail.component';
import { SuShiRoutingModule } from './sushi-routing.module';

@NgModule({
  declarations: [SushiDetailComponent],
  imports: [CommonModule, SuShiRoutingModule],
})
export class SushiModule {}
