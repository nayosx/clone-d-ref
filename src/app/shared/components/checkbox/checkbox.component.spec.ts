import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckboxComponent } from './checkbox.component';
import { By } from '@angular/platform-browser';
import { CheckboxOptions } from '@shared/interfaces/checkbox';

describe('CheckboxComponent', () => {
  let component: CheckboxComponent;
  let fixture: ComponentFixture<CheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CheckboxComponent);
    component = fixture.componentInstance;
    component.label = 'Aprobar';
    component.type = CheckboxOptions.APROBRAR;
    fixture.detectChanges();
  });

  it('debería crearse', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar el label', () => {
    const span = fixture.nativeElement.querySelector('.rechazar-label');
    expect(span.textContent).toContain('Aprobar');
  });

  it('debería emitir checkedChange al hacer clic', () => {
    const emitSpy = jest.spyOn(component.checkedChange, 'emit');
    component.checked = false;
    fixture.detectChanges();

    const div = fixture.debugElement.query(By.css('.button-box'));
    div.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.checked).toBe(true);
    expect(emitSpy).toHaveBeenCalledWith({
      tipo: component.type,
      checked: true,
    });
  });

  it('no debería cambiar si está deshabilitado', () => {
    component.checked = false;
    component.disabled = true;
    fixture.detectChanges();

    const emitSpy = jest.spyOn(component.checkedChange, 'emit');

    const div = fixture.debugElement.query(By.css('.button-box'));
    div.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.checked).toBe(false);
    expect(emitSpy).not.toHaveBeenCalled();
  });
});
