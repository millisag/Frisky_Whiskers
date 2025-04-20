import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotesComponent } from './notes/notes.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NotesComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
  ],
})
export class SharedModule {}
