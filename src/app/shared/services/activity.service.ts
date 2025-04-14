import { Injectable, signal } from '@angular/core';
import { Activity } from '../models/activity.model';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  private activities = signal<Activity[]>([
    {
      id: '1',
      title: 'Played with feather toy',
      duration: 30, // in minutes,
      notes: ''
    },
    {
      id: '2',
      title: 'Chased laser pointer',
      duration: 15, // in minutes,
      notes: ''
    }
  ]);

  getactivities() {
    return this.activities.asReadonly()
  }

  addActivity(title: string, duration: number) {
    this.activities.update((currentActivities: Activity[]) => [
      ...currentActivities,
      { id: crypto.randomUUID(), title, duration, notes: '' }
    ]); //Add random ID
  }

  removeActivity(titleToRemove: string) {
    this.activities.update((activityList: Activity[]) =>
      activityList.filter((activity: Activity) => activity.title !== titleToRemove)
    );
  }
}

