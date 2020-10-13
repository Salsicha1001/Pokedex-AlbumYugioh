import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellCardEquipamentComponent } from './spell-card-equipament.component';

describe('SpellCardEquipamentComponent', () => {
  let component: SpellCardEquipamentComponent;
  let fixture: ComponentFixture<SpellCardEquipamentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellCardEquipamentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellCardEquipamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
