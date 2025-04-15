import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBdComponent } from './input-bd.component';

describe('InputBdComponent', () => {
  let component: InputBdComponent;
  let fixture: ComponentFixture<InputBdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputBdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputBdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
