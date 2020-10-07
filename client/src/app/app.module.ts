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
import {TableModule} from 'primeng/table';
import { EditComponent } from './edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';


@NgModule({
  declarations: [AppComponent, DisplayComponent, ManagementComponent, MenuComponent, PlayYoutubeComponent, EditComponent, AddComponent],
  imports: [ReactiveFormsModule ,FormsModule,CommonModule, BrowserModule, AppRoutingModule, ButtonModule,DataViewModule,TableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}