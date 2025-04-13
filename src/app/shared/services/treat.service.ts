import { Injectable, signal } from '@angular/core';
import { Treat } from '../models/treat.model';

@Injectable({
  providedIn: 'root',
})
export class TreatService {
  private treats = signal<Treat[]>([
    {
      id: '1',
      title: 'Chicken Treats',
      brand: 'Sheba',
      type: 'wet', // e.g., wet or dry
      calories: 110, // calories per treat
      notes: ''
    },
    {
      id: '2',
      title: 'Beef Treats',
      brand: 'Fancy Feast',
      type: 'dry', // e.g., wet or dry
      calories: 50, // calories per treat
      notes: ''
    }
  ]);

  getTreats() {
    return this.treats.asReadonly()
  }

  addTreat(t: string, b: string, ty: string, c: number) {
    this.treats.update((t: any) => [...t, {title: t, brand: b, type: ty, calories: c}])
  }

  removeTreat(t: string) {
    this.treats.update((t: any) => t.filter((t: any) => t.title !== t))
  }
}
