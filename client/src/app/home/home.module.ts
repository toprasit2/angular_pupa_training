import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [HomepageComponent, HomeComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
