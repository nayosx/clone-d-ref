import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerCardWrapperComponent } from './container-card-wrapper.component';

describe('ContainerCardWrapperComponent', () => {
  let component: ContainerCardWrapperComponent;
  let fixture: ComponentFixture<ContainerCardWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerCardWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerCardWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
