import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDuiNitComponent } from './input-dui-nit.component';

describe('InputDuiNitComponent', () => {
  let component: InputDuiNitComponent;
  let fixture: ComponentFixture<InputDuiNitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputDuiNitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputDuiNitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
