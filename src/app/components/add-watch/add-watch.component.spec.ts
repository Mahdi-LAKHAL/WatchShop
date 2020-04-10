import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWatchComponent } from './add-watch.component';

describe('AddWatchComponent', () => {
  let component: AddWatchComponent;
  let fixture: ComponentFixture<AddWatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
