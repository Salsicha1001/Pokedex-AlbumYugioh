import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellCardQuickComponent } from './spell-card-quick.component';

describe('SpellCardQuickComponent', () => {
  let component: SpellCardQuickComponent;
  let fixture: ComponentFixture<SpellCardQuickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellCardQuickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellCardQuickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
