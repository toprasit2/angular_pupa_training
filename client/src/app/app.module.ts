import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { ManagementComponent } from './management/management.component';
import { MenuComponent } from './menu/menu.component';
import {DataViewModule} from 'primeng/dataview';
import { PlayYoutubeComponent } from './play-youtube/play-youtube.component';

@NgModule({
  declarations: [AppComponent, DisplayComponent, ManagementComponent, MenuComponent, PlayYoutubeComponent],
  imports: [BrowserModule, AppRoutingModule, ButtonModule,DataViewModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
