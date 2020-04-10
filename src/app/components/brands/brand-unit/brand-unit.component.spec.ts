import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandUnitComponent } from './brand-unit.component';

describe('BrandUnitComponent', () => {
  let component: BrandUnitComponent;
  let fixture: ComponentFixture<BrandUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
