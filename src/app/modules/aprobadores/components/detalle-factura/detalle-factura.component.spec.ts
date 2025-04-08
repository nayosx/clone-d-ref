import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FacturaDetalle } from '@modules/aprobadores/interfaces/detalle-factura.interface';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DetalleFacturaComponent } from './detalle-factura.component';

describe('DetalleFacturaComponent', () => {
  let component: DetalleFacturaComponent;
  let fixture: ComponentFixture<DetalleFacturaComponent>;

  const mockRef = {
    close: jest.fn(),
  };

  const mockFactura: FacturaDetalle = {
    numeroFactura: 'SS-1234',
    numeroTransaccion: '123-567890-123-4',
    colector: 'Tigo Business',
    cliente: 'Empresa S.A. de C.V.',
    nitDui: '123-567890-123-4',
    producto: 'CTA - **********3456',
    concepto: 'Pago de facturas Q1',
    fechaCreacion: '13/03/2025 08:47 AM',
    usuario: 'Oscar Rodríguez',
    monto: 650,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleFacturaComponent],
      providers: [
        { provide: DynamicDialogRef, useValue: mockRef },
        {
          provide: DynamicDialogConfig,
          useValue: { data: { factura: mockFactura } },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crearse', () => {
    expect(component).toBeTruthy();
  });

  it('debería tener la factura inyectada', () => {
    expect(component.factura).toEqual(mockFactura);
  });

  it('debería cerrar el diálogo al ejecutar cancelar()', () => {
    component.cancelar();
    expect(mockRef.close).toHaveBeenCalledWith(null);
  });
});
