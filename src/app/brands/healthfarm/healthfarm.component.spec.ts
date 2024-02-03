import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthfarmComponent } from './healthfarm.component';

describe('HealthfarmComponent', () => {
  let component: HealthfarmComponent;
  let fixture: ComponentFixture<HealthfarmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HealthfarmComponent]
    });
    fixture = TestBed.createComponent(HealthfarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
