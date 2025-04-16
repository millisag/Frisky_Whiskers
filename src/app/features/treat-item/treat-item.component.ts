import { Component, inject, input } from '@angular/core';
import { Treat } from '../../shared/models/treat.model';
import { TreatService } from '../../shared/services/treat.service';
import { NotesComponent } from "../../shared/notes/notes.component";

@Component({
  standalone: true,
  selector: 'app-treat-item',
  imports: [NotesComponent],
  templateUrl: './treat-item.component.html',
  styleUrl: './treat-item.component.css'
})
export class TreatItemComponent {
  treatService = inject(TreatService);
  data = input<Treat>();

removeTreatHandler() {
  this.treatService.removeTreat((this.data() as Treat).title);
  }
}
