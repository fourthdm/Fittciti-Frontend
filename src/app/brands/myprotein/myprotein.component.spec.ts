import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyproteinComponent } from './myprotein.component';

describe('MyproteinComponent', () => {
  let component: MyproteinComponent;
  let fixture: ComponentFixture<MyproteinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyproteinComponent]
    });
    fixture = TestBed.createComponent(MyproteinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
