import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkUpComponent } from './link-up.component';

describe('LinkUpComponent', () => {
  let component: LinkUpComponent;
  let fixture: ComponentFixture<LinkUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
