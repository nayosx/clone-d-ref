import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step1BusinessComponent } from './step1-business.component';

describe('Step1BusinessComponent', () => {
  let component: Step1BusinessComponent;
  let fixture: ComponentFixture<Step1BusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step1BusinessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step1BusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
