import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalPersonsComponent } from './rental-persons.component';

describe('RentalPersonsComponent', () => {
  let component: RentalPersonsComponent;
  let fixture: ComponentFixture<RentalPersonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalPersonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalPersonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
