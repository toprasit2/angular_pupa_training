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


@NgModule({
  declarations: [AppComponent, DisplayComponent, HomeComponent, ManagementComponent, ShowdisplayComponent],
  imports: [BrowserModule, AppRoutingModule, ButtonModule, DataViewModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
