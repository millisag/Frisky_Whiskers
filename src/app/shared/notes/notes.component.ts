import { Component, Output, EventEmitter, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-notes',
  imports: [FormsModule],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css'
})
export class NotesComponent {
  readonly initialNotes = input<string>(''); //Default value for notes
  @Output() notesChanged = new EventEmitter<string>();
  @Output() notesDeleted = new EventEmitter<void>();

  isEditing = false;
  editableNotes = '';

  ngOnInit() {
    this.editableNotes = this.initialNotes(); //Initialize editable notes with the initial value
  }

  startEditing(): void {
    this.isEditing = true;
  }

  save(): void {
    this.isEditing = false;
    this.notesChanged.emit(this.editableNotes);
  }

  delete(): void {
    this.editableNotes = '';
    this.notesDeleted.emit();
    this.isEditing = false;
  }

  cancel(): void {
    this.isEditing = false;
    this.editableNotes = this.initialNotes();
  }
}

