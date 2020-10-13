import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTrapComponent } from './search-trap.component';

describe('SearchTrapComponent', () => {
  let component: SearchTrapComponent;
  let fixture: ComponentFixture<SearchTrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
