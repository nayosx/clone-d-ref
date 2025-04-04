import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RadioComponent } from './radio.component';

describe('RadioComponent', () => {
  let component: RadioComponent;
  let fixture: ComponentFixture<RadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RadioComponent);
    component = fixture.componentInstance;
  });

  it('debería crearse', () => {
    expect(component).toBeTruthy();
  });

  it('debería mostrar el label correctamente', () => {
    component.label = 'Opción A';
    component.group = 'grupo1';
    component.inputId = 'opcion-a';
    component.value = 'A';
    component.modelValue = '';
    fixture.detectChanges();

    const label = fixture.nativeElement.querySelector('label');
    expect(label.textContent).toContain('Opción A');
  });

  it('debería emitir el valor seleccionado al cambiar', () => {
    const emitSpy = jest.spyOn(component.modelValueChange, 'emit');
    const nuevoValor = 'valor-nuevo';

    component.onModelChange(nuevoValor);

    expect(emitSpy).toHaveBeenCalledWith(nuevoValor);
  });

  it('debería retornar clase vacía si no hay color', () => {
    component.color = undefined;
    component.modelValue = 'A';
    component.value = 'A';

    expect(component.colorClass).toBe('');
  });

  it('debería retornar clase base si el radio no está seleccionado', () => {
    component.color = 'green';
    component.value = 'A';
    component.modelValue = 'B';

    const baseClass = 'radio-green';
    expect(component.colorClass).toBe(baseClass);
  });

  it('debería retornar clase base y "-checked" si está seleccionado', () => {
    component.color = 'pink';
    component.value = 'A';
    component.modelValue = 'A';

    const baseClass = 'radio-pink';
    expect(component.colorClass).toBe(`${baseClass} ${baseClass}-checked`);
  });

  it('debería aplicar colorClass en el contenedor', () => {
    component.color = 'yellow';
    component.value = '1';
    component.modelValue = '1';
    component.label = 'Etiqueta';
    component.inputId = 'r1';
    component.group = 'grupo1';
    fixture.detectChanges();

    const container = fixture.debugElement.query(By.css('.radio-container'));
    expect(container.nativeElement.className).toContain('radio-yellow');
    expect(container.nativeElement.className).toContain('radio-yellow-checked');
  });
});
