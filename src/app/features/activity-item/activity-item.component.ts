import { Component, inject, input } from '@angular/core';
import { Activity } from '../../shared/models/activity.model';
import { ActivityService } from '../../shared/services/activity.service';
import { NotesComponent } from "../../shared/notes/notes.component";

@Component({
  standalone: true,
  selector: 'app-activity-item',
  imports: [NotesComponent],
  templateUrl: './activity-item.component.html',
  styleUrl: './activity-item.component.css'
})
export class ActivityItemComponent {
  ActivityService = inject(ActivityService);
  data = input<Activity>();

  removeActivityHandler() {
    this.ActivityService.removeActivity((this.data() as Activity).title);
    }
}
