import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { SharedModule } from '../shared/shared.module';
import { DisplayMusicDetailComponent } from './display-music-detail/display-music-detail.component';
import { DisplayMusicListComponent } from './display-music-list/display-music-list.component';
import { DisplayRoutingModule } from './display-routing.module';

@NgModule({
  declarations: [DisplayMusicListComponent, DisplayMusicDetailComponent],
  imports: [
    CommonModule,
    DisplayRoutingModule,
    CardModule,
    ButtonModule,
    SharedModule,
  ],
})
export class DisplayModule {}
