import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyDealComponent } from './weekly-deal.component';

describe('WeeklyDealComponent', () => {
  let component: WeeklyDealComponent;
  let fixture: ComponentFixture<WeeklyDealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyDealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyDealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
