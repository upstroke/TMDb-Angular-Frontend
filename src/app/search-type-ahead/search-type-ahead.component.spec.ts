import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTypeAheadComponent } from './search-type-ahead.component';

describe('SearchTypeAheadComponent', () => {
  let component: SearchTypeAheadComponent;
  let fixture: ComponentFixture<SearchTypeAheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchTypeAheadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTypeAheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
