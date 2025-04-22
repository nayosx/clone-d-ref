import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusBaseComponent } from './status-base.component';

describe('StatusBaseComponent', () => {
  let component: StatusBaseComponent;
  let fixture: ComponentFixture<StatusBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusBaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
