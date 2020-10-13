import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaisPokemonsComponent } from './detais-pokemons.component';

describe('DetaisPokemonsComponent', () => {
  let component: DetaisPokemonsComponent;
  let fixture: ComponentFixture<DetaisPokemonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaisPokemonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaisPokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
