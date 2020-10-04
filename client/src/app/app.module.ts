import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagementComponent } from './management/management.component';
import { DisplayListComponent } from './display-list/display-list.component';
import { MenuComponent } from './menu/menu.component';
import { TableModule } from 'primeng/table';
import {OrderListModule} from 'primeng/orderlist';
import { MusicDetailComponent } from './music-detail/music-detail.component';

@NgModule({
  declarations: [AppComponent, ManagementComponent, DisplayListComponent, MenuComponent, MusicDetailComponent],
  imports: [BrowserModule, AppRoutingModule, ButtonModule, TableModule, OrderListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
