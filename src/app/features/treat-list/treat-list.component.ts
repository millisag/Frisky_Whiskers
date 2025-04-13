import { Component, inject } from '@angular/core';
import { TreatItemComponent } from "../treat-item/treat-item.component";
import { TreatFormComponent } from "../treat-form/treat-form.component";
import { TreatService } from '../../shared/services/treat.service';

@Component({
  standalone: true,
  selector: 'app-treat-list',
  imports: [TreatItemComponent, TreatFormComponent],
  templateUrl: './treat-list.component.html',
  styleUrl: './treat-list.component.css'
})
export class TreatListComponent {
  treatService = inject(TreatService)
  treats = this.treatService.getTreats()
}
