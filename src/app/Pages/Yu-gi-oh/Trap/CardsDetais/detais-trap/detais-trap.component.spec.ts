import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaisTrapComponent } from './detais-trap.component';

describe('DetaisTrapComponent', () => {
  let component: DetaisTrapComponent;
  let fixture: ComponentFixture<DetaisTrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaisTrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaisTrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
