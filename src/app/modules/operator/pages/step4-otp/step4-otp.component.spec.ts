import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step4OtpComponent } from './step4-otp.component';

describe('Step4OtpComponent', () => {
  let component: Step4OtpComponent;
  let fixture: ComponentFixture<Step4OtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step4OtpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step4OtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
