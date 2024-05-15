import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componete01Component } from './componete01.component';

describe('Componete01Component', () => {
  let component: Componete01Component;
  let fixture: ComponentFixture<Componete01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componete01Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Componete01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
