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

  addTreat(id: number, title: string, brand: string, type: string, calories: number) {
    this.treats.update((currentTreats: Treat[]) => [
      ...currentTreats,
      { id: crypto.randomUUID(), title, brand: '', type: '', calories: 0}
    ]); //Add random ID
  }

  removeTreat(titleToRemove: string) {
    this.treats.update((treatList: Treat[]) =>
      treatList.filter((treat: Treat) => treat.title !== titleToRemove)
    );
  }
}
