import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DisplayModule } from './display/display.module'
import { DisplayRoutingModule } from './display/display-routing.module'


@NgModule({
  declarations: [AppComponent, HomeComponent,],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    ButtonModule,
    DisplayModule,
    DisplayRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
