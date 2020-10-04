import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagementComponent } from './management/management.component';
import { DisplayListComponent } from './display-list/display-list.component';
import { MenuComponent } from './menu/menu.component';
import { TableModule } from 'primeng/table';
import { OrderListModule } from 'primeng/orderlist';
import { MusicDetailComponent } from './music-detail/music-detail.component';
import { EditComponent } from './edit/edit.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [AppComponent, ManagementComponent, DisplayListComponent, MenuComponent, MusicDetailComponent, EditComponent],
  imports: [
    FormsModule,CommonModule,BrowserModule, AppRoutingModule, ButtonModule, TableModule, OrderListModule, InputTextModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
