import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'primeng/api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayModule } from './display/display.module';
import { ManagementModule } from './management/management.module';
import { SushiModule } from './sushi/sushi.module';
import { HomeModule } from './home/home.module';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ButtonModule,
    DisplayModule,
    ManagementModule,
    SharedModule,
    SushiModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
