import { Component, inject, input } from '@angular/core';
import { Treat } from '../../shared/models/treat.model';
import { TreatService } from '../../shared/services/treat.service';

@Component({
  standalone: true,
  selector: 'app-treat-item',
  imports: [],
  templateUrl: './treat-item.component.html',
  styleUrl: './treat-item.component.css'
})
export class TreatItemComponent {
  private treatService = inject(TreatService);
  data = input<Treat>();

  removeTreatHandler() {
    this.treatService.removeTreat((this.data() as Treat).title);
  }
}
