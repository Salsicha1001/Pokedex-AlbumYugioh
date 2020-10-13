import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrapCardsComponent } from './trap-cards.component';

describe('TrapCardsComponent', () => {
  let component: TrapCardsComponent;
  let fixture: ComponentFixture<TrapCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrapCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrapCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
