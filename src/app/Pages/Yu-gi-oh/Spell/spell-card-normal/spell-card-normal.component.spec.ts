import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellCardNormalComponent } from './spell-card-normal.component';

describe('SpellCardNormalComponent', () => {
  let component: SpellCardNormalComponent;
  let fixture: ComponentFixture<SpellCardNormalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellCardNormalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellCardNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
