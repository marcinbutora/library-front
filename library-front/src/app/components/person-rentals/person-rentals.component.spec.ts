import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonRentalsComponent } from './person-rentals.component';

describe('PersonRentalsComponent', () => {
  let component: PersonRentalsComponent;
  let fixture: ComponentFixture<PersonRentalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonRentalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonRentalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
