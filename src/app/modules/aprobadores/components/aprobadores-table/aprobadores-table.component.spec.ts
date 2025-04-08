import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagosStateService } from '@aprobadores/services/pagos-state.service';
import { CheckboxOptions } from '@shared/interfaces/checkbox';
import { DialogService } from 'primeng/dynamicdialog';
import { DetalleFacturaComponent } from '../detalle-factura/detalle-factura.component';
import { AprobadoresTableComponent } from './aprobadores-table.component';
import { ConfirmationService } from 'primeng/api';

describe('AprobadoresTableComponent', () => {
  let component: AprobadoresTableComponent;
  let fixture: ComponentFixture<AprobadoresTableComponent>;

  const mockPagosState = {
    guardarCambio: jest.fn(),
    quitarCambio: jest.fn(),
  };

  const mockDialogService = {
    open: jest.fn().mockReturnValue({ onClose: { subscribe: jest.fn() } }),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AprobadoresTableComponent],
      providers: [
        { provide: DialogService, useValue: mockDialogService },
        { provide: PagosStateService, useValue: mockPagosState },
        ConfirmationService,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AprobadoresTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crearse', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar columnas en la tabla', () => {
    component.columns = [
      { field: 'nombre', header: 'Nombre' },
      { field: 'estado', header: 'Estado' },
    ];
    component.value = [
      { nombre: 'Ana', estado: 'Pendiente' },
      { nombre: 'Luis', estado: 'Rechazado' },
    ];
    fixture.detectChanges();

    const th = fixture.nativeElement.querySelectorAll('th');
    expect(th.length).toBe(2);
    expect(th[0].textContent).toContain('Nombre');
    expect(th[1].textContent).toContain('Estado');
  });

  it('debería llamar guardarCambio y desmarcar el otro checkbox si se marca uno', () => {
    const pago = { id: 1, aprobar: false, rechazar: false };
    const event = { tipo: CheckboxOptions.APROBRAR, checked: true };

    component.onCheckboxChange(event, pago);

    expect(pago.aprobar).toBe(true);
    expect(pago.rechazar).toBe(false);
    expect(mockPagosState.guardarCambio).toHaveBeenCalledWith(pago);
  });

  it('debería llamar quitarCambio si se desmarcan ambos checkboxes', () => {
    const pago = { id: 1, aprobar: false, rechazar: false };
    const event = { tipo: CheckboxOptions.APROBRAR, checked: false };

    component.onCheckboxChange(event, pago);

    expect(mockPagosState.quitarCambio).toHaveBeenCalledWith(1);
  });

  it('debería abrir el diálogo de detalle al ejecutar abrirDetalle()', () => {
    component.abrirDetalle();

    expect(mockDialogService.open).toHaveBeenCalledWith(
      DetalleFacturaComponent,
      expect.objectContaining({
        data: expect.objectContaining({
          factura: expect.any(Object),
        }),
      })
    );
  });

  it('debería renderizar app-empty-message si no hay datos en la tabla', () => {
    component.columns = [{ field: 'estado', header: 'Estado' }];
    component.value = [];
    fixture.detectChanges();

    const emptyMessage =
      fixture.nativeElement.querySelector('app-empty-message');
    expect(emptyMessage).toBeTruthy();
  });
});
