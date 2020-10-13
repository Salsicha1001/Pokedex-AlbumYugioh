import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsSpellComponent } from './details-spell.component';

describe('DetailsSpellComponent', () => {
  let component: DetailsSpellComponent;
  let fixture: ComponentFixture<DetailsSpellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsSpellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsSpellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
