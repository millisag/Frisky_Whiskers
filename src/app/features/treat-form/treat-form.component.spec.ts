import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatFormComponent } from './treat-form.component';

describe('TreatFormComponent', () => {
  let component: TreatFormComponent;
  let fixture: ComponentFixture<TreatFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreatFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreatFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
