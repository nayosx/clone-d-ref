import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step3LinkUserComponent } from './step3-link-user.component';

describe('Step3LinkUserComponent', () => {
  let component: Step3LinkUserComponent;
  let fixture: ComponentFixture<Step3LinkUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step3LinkUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step3LinkUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
