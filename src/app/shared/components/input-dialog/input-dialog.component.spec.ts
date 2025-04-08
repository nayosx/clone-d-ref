import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputDialogComponent } from './input-dialog.component';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { By } from '@angular/platform-browser';

describe('InputDialogComponent (rechazar scenario)', () => {
  let component: InputDialogComponent;
  let fixture: ComponentFixture<InputDialogComponent>;

  const mockRef = {
    close: jest.fn(),
  };

  const mockConfig: DynamicDialogConfig = {
    data: {
      icon: 'error',
      title: 'Advertencia',
      label: 'Escriba el motivo de su rechazo',
      valorAnterior: undefined,
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputDialogComponent],
      providers: [
        { provide: DynamicDialogRef, useValue: mockRef },
        { provide: DynamicDialogConfig, useValue: mockConfig },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(InputDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería mostrar datos correctos del escenario de rechazo', () => {
    const title = fixture.nativeElement.querySelector('h2');
    const label = fixture.nativeElement.querySelector('label');
    const textarea = fixture.nativeElement.querySelector('textarea');

    expect(title.textContent).toContain('Advertencia');
    expect(label.textContent).toContain('Escriba el motivo de su rechazo');
    expect(textarea.value).toBe('');
  });

  it('debería cerrar con inputValue cuando se hace clic en "Enviar"', () => {
    component.inputValue = 'No cumple requisitos';
    fixture.detectChanges();

    const enviarBtn = fixture.debugElement.queryAll(By.css('button'))[0];
    enviarBtn.triggerEventHandler('click', null);

    expect(mockRef.close).toHaveBeenCalledWith('No cumple requisitos');
  });

  it('debería cerrar con null cuando se hace clic en "Omitir"', () => {
    const omitirBtn = fixture.debugElement.queryAll(By.css('button'))[1];
    omitirBtn.triggerEventHandler('click', null);

    expect(mockRef.close).toHaveBeenCalledWith(null);
  });

  it('debería pasar icon="error" al componente app-icon', () => {
    const icon = fixture.debugElement.query(By.css('app-icon'));
    expect(icon.attributes['ng-reflect-type-icon']).toBe('error');
  });
});
