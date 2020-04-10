import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionBannerComponent } from './fashion-banner.component';

describe('FashionBannerComponent', () => {
  let component: FashionBannerComponent;
  let fixture: ComponentFixture<FashionBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FashionBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
