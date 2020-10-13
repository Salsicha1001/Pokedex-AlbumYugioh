import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellCardRitualComponent } from './spell-card-ritual.component';

describe('SpellCardRitualComponent', () => {
  let component: SpellCardRitualComponent;
  let fixture: ComponentFixture<SpellCardRitualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellCardRitualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellCardRitualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
