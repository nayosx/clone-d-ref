import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconComponent } from './icon.component';
import { ErrorIconComponent } from '@shared/icons/error-icon.component';
import { SendIconComponent } from '@shared/icons/send-icon.component';
import { SuccessIconComponent } from '@shared/icons/success-icon.component';
import { WarningIconComponent } from '@shared/icons/warning-icon.component';

describe('IconComponent', () => {
  let component: IconComponent;
  let fixture: ComponentFixture<IconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IconComponent);
    component = fixture.componentInstance;
  });

  it('debería crearse', () => {
    expect(component).toBeTruthy();
  });

  it('debería devolver SuccessIconComponent por defecto si no se encuentra el tipo', () => {
    // @ts-ignore: Probamos con un valor inválido a propósito
    const result = component.getIconComponent('otro');
    expect(result).toBe(SuccessIconComponent);
  });

  it('debería devolver el componente correcto para cada tipo', () => {
    expect(component.getIconComponent('success')).toBe(SuccessIconComponent);
    expect(component.getIconComponent('error')).toBe(ErrorIconComponent);
    expect(component.getIconComponent('send')).toBe(SendIconComponent);
    expect(component.getIconComponent('warning')).toBe(WarningIconComponent);
  });

  it('debería renderizar el componente correcto usando ngComponentOutlet', () => {
    component.typeIcon = 'error';
    fixture.detectChanges();

    const outlet = fixture.nativeElement.querySelector('app-error-icon');
    expect(outlet).toBeTruthy();
  });
});
