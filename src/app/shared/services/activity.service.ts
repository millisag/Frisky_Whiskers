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

  addActivity(t: string, d: number) {
    this.activities.update((t: any) => [...t, {title: t, duration: d}])
  }

  removeActivity(t: string) {
    this.activities.update((t: any) => t.filter((t: any) => t.title !== t))
  }
}

