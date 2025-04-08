import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmptyMessageComponent } from './empty-message.component';

describe('EmptyMessageComponent', () => {
  let component: EmptyMessageComponent;
  let fixture: ComponentFixture<EmptyMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyMessageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EmptyMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crearse', () => {
    expect(component).toBeTruthy();
  });

  it('debería mostrar el título del mensaje vacío', () => {
    const title = fixture.nativeElement.querySelector('h3');
    expect(title.textContent).toContain(
      'Por el momento no hay nada que informar'
    );
  });

  it('debería mostrar la descripción del mensaje vacío', () => {
    const paragraph = fixture.nativeElement.querySelector('p');
    expect(paragraph.textContent).toContain(
      'En esta área se mostrarán las notificaciones'
    );
  });
});
