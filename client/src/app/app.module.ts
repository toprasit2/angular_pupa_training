import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagementComponent } from './management/management.component';
import { DisplayListComponent } from './display-list/display-list.component';
import { MenuComponent } from './menu/menu.component';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [AppComponent, ManagementComponent, DisplayListComponent, MenuComponent],
  imports: [BrowserModule, AppRoutingModule, ButtonModule, TableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
