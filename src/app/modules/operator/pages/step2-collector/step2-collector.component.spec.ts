import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step2CollectorComponent } from './step2-collector.component';

describe('Step2CollectorComponent', () => {
  let component: Step2CollectorComponent;
  let fixture: ComponentFixture<Step2CollectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step2CollectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step2CollectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
