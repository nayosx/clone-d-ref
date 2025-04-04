import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TagComponent } from './tag.component';

describe('TagComponent', () => {
  let component: TagComponent;
  let fixture: ComponentFixture<TagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TagComponent);
    component = fixture.componentInstance;
  });

  it('debería crearse', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar el label', () => {
    component.label = '¡Advertencia!';
    component.type = 'warning';
    fixture.detectChanges();

    const span = fixture.nativeElement.querySelector('span');
    expect(span.textContent).toContain('¡Advertencia!');
  });

  it('debería aplicar clase "danger" cuando type es danger', () => {
    component.label = '¡Error!';
    component.type = 'danger';
    fixture.detectChanges();

    const span = fixture.nativeElement.querySelector('span');
    expect(span.className).toBe('danger');
  });

  it('debería aplicar clase "warning" cuando type es warning', () => {
    component.label = 'Cuidado';
    component.type = 'warning';
    fixture.detectChanges();

    const span = fixture.nativeElement.querySelector('span');
    expect(span.className).toBe('warning');
  });
});
