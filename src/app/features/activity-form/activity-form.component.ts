import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivityService } from '../../shared/services/activity.service';

 @Component({
   selector: 'app-activity-form',
   imports: [FormsModule],
   templateUrl: './activity-form.component.html',
   styleUrl: './activity-form.component.css'
 })
 export class ActivityFormComponent {
   activityService = inject(ActivityService);
   title!: string;
   duration!: number;

  addActivityHandler(){
    this.activityService.addActivity(this.title, this.duration);
    this.resetFormHandler()
  }
  removeActivityHandler(title: string): void {
      this.activityService.removeActivity(title);
    }
  resetFormHandler() {
     this.title = ''
     this.duration = 0
   }
 }
