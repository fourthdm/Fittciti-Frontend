import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartsssComponent } from './cartsss.component';

describe('CartsssComponent', () => {
  let component: CartsssComponent;
  let fixture: ComponentFixture<CartsssComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartsssComponent]
    });
    fixture = TestBed.createComponent(CartsssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
