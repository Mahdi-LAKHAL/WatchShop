import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchDashboardComponent } from './watch-dashboard.component';

describe('WatchDashboardComponent', () => {
  let component: WatchDashboardComponent;
  let fixture: ComponentFixture<WatchDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
