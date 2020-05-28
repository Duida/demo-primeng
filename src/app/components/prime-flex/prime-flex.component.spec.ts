import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeFlexComponent } from './prime-flex.component';

describe('PrimeFlexComponent', () => {
  let component: PrimeFlexComponent;
  let fixture: ComponentFixture<PrimeFlexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeFlexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeFlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
