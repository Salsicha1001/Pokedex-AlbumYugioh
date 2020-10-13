import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellCardContinuosComponent } from './spell-card-continuos.component';

describe('SpellCardContinuosComponent', () => {
  let component: SpellCardContinuosComponent;
  let fixture: ComponentFixture<SpellCardContinuosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellCardContinuosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellCardContinuosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
