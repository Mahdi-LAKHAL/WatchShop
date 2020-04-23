import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchWatchComponent } from './search-watch.component';

describe('SearchWatchComponent', () => {
  let component: SearchWatchComponent;
  let fixture: ComponentFixture<SearchWatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchWatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
