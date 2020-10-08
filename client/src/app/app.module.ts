import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { HomeComponent } from './home/home.component';
import { ManagementComponent } from './management/management.component';
import { DataViewModule } from 'primeng/dataview';
import { ShowdisplayComponent } from './showdisplay/showdisplay.component';
import {TableModule} from 'primeng/table';
import { AddMusicComponent } from './add-music/add-music.component';
import { EditMusicComponent } from './edit-music/edit-music.component';


@NgModule({
  declarations: [AppComponent, DisplayComponent, HomeComponent, ManagementComponent, ShowdisplayComponent, AddMusicComponent, EditMusicComponent],
  imports: [BrowserModule, AppRoutingModule, ButtonModule, DataViewModule,TableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
