import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ManagementRoutingModule } from './management-routing.module';
import { MusicCreateComponent } from './music-create/music-create.component';
import { MusicEditComponent } from './music-edit/music-edit.component';
import { MusicFormComponent } from './music-form/music-form.component';
import { MusicListComponent } from './music-list/music-list.component';
@NgModule({
  declarations: [
    MusicListComponent,
    MusicEditComponent,
    MusicCreateComponent,
    MusicFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ManagementRoutingModule,
    ButtonModule,
    TableModule,
    InputTextModule,
  ],
})
export class ManagementModule {}
