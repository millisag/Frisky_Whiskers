import { Component, inject } from '@angular/core';
import { ActivityItemComponent } from "../activity-item/activity-item.component";
import { ActivityFormComponent } from "../activity-form/activity-form.component";
import { ActivityService } from '../../shared/services/activity.service';

@Component({
  standalone: true,
  selector: 'app-activity-list',
  imports: [ActivityItemComponent, ActivityFormComponent],
  templateUrl: './activity-list.component.html',
  styleUrl: './activity-list.component.css'
})
export class ActivityListComponent {
  activityService = inject(ActivityService)

  activities = this.activityService.getactivities()

}
