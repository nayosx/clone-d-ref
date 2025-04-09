import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabsTableComponent } from './tabs-table.component';
import { InputDialogComponent } from '@shared/components/input-dialog/input-dialog.component';
import { Component } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { ConfirmationService } from 'primeng/api';

//
// ✅ Mock del componente app-confirm-dialog
//
@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  template: '',
})
class MockAppConfirmDialogComponent {}

//
// ✅ Mock del componente p-confirmDialog que vive dentro de <app-confirm-dialog>
//
@Component({
  selector: 'p-confirmDialog',
  standalone: true,
  template: '',
})
class MockPrimeConfirmDialogComponent {}

describe('TabsTableComponent', () => {
  let component: TabsTableComponent;
  let fixture: ComponentFixture<TabsTableComponent>;

  const mockDialogService = {
    open: jest.fn().mockReturnValue({
      onClose: {
        subscribe: (cb: (v: any) => void) => cb('Motivo de rechazo'),
      },
    }),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TabsTableComponent,
        MockAppConfirmDialogComponent,
        MockPrimeConfirmDialogComponent,
      ],
      providers: [
        { provide: DialogService, useValue: mockDialogService },
        ConfirmationService
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TabsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crearse', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar confirm() al ejecutar aplicar()', () => {
    const confirmSpy = jest.spyOn(component['_confirmationService'], 'confirm');
    component.aplicar();
    expect(confirmSpy).toHaveBeenCalled();
  });

  it('debería llamar confirm() al ejecutar mensajePago()', () => {
    const confirmSpy = jest.spyOn(component['_confirmationService'], 'confirm');
    component.mensajePago();
    expect(confirmSpy).toHaveBeenCalled();
  });

  it('debería llamar confirm() al ejecutar mensajeConfirmacion()', () => {
    const confirmSpy = jest.spyOn(component['_confirmationService'], 'confirm');
    component.mensajeConfirmacion();
    expect(confirmSpy).toHaveBeenCalled();
  });

  it('debería llamar confirm() al ejecutar mesnsajeRechazar()', () => {
    const confirmSpy = jest.spyOn(component['_confirmationService'], 'confirm');
    component.mesnsajeRechazar();
    expect(confirmSpy).toHaveBeenCalled();
  });

  it('debería abrir el diálogo de rechazo y luego llamar mensajeConfirmacion()', () => {
    const confirmacionSpy = jest.spyOn(component as any, 'mensajeConfirmacion');
    component.reachazar();
    expect(mockDialogService.open).toHaveBeenCalledWith(
      InputDialogComponent,
      expect.objectContaining({
        data: expect.objectContaining({
          icon: 'error',
          title: 'Advertencia',
          label: 'Escriba el motivo de su rechazo',
        }),
      })
    );
    expect(confirmacionSpy).toHaveBeenCalled();
  });

  it('no debería llamar mensajeConfirmacion si el usuario cancela el diálogo', () => {
    mockDialogService.open.mockReturnValueOnce({
      onClose: {
        subscribe: (cb: (val: any) => void) => cb(null),
      },
    });

    const spy = jest.spyOn(component as any, 'mensajeConfirmacion');
    component.reachazar();
    expect(spy).not.toHaveBeenCalled();
  });
});
