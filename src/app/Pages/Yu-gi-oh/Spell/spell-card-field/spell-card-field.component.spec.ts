import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellCardFieldComponent } from './spell-card-field.component';

describe('SpellCardFieldComponent', () => {
  let component: SpellCardFieldComponent;
  let fixture: ComponentFixture<SpellCardFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellCardFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellCardFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
