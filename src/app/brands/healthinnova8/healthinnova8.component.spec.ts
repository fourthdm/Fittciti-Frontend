import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Healthinnova8Component } from './healthinnova8.component';

describe('Healthinnova8Component', () => {
  let component: Healthinnova8Component;
  let fixture: ComponentFixture<Healthinnova8Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Healthinnova8Component]
    });
    fixture = TestBed.createComponent(Healthinnova8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
