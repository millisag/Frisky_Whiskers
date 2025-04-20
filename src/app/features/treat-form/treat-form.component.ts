
import { Component, inject } from '@angular/core';
import { TreatService } from '../../shared/services/treat.service';
import { SharedModule } from '../../shared/shared.module';

 @Component({
   standalone: true,
   selector: 'app-treat-form',
   imports: [SharedModule],
   templateUrl: './treat-form.component.html',
   styleUrl: './treat-form.component.css'
 })
 export class TreatFormComponent {
   treatService = inject(TreatService);
   title!: string;
   calories!: number;
   brand!: string;
   type!: string;

  addTreatHandler(){
    this.treatService.addTreat(Date.now(), this.title, this.brand, this.type, this.calories); // Use Date.now() as an ID generator
    this.resetFormHandler()
  }
  removeTreatHandler(title: string): void {
      this.treatService.removeTreat(title);
    }
  resetFormHandler() {
     this.title = ''
     this.calories = 0
     this.brand = ''
     this.type = ''
   }
 }
