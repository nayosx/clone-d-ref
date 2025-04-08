import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmDialogComponent } from './confirm-dialog.component';
import { ConfirmationService } from 'primeng/api';
import { OverlayModule } from 'primeng/overlay';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmationMessage } from '@shared/interfaces/confirm-dialog.interface';

describe('ConfirmDialogComponent', () => {
  let component: ConfirmDialogComponent;
  let fixture: ComponentFixture<ConfirmDialogComponent>;
  let confirmationService: ConfirmationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmDialogComponent, NoopAnimationsModule, OverlayModule],
      providers: [ConfirmationService],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmDialogComponent);
    component = fixture.componentInstance;
    confirmationService = TestBed.inject(ConfirmationService);
    fixture.detectChanges();
  });

  it('debería crearse sin errores', () => {
    expect(component).toBeTruthy();
  });

  it('debería mostrar título y mensaje luego de confirm()', async () => {
    confirmationService.confirm({
      title: '¿Está seguro que desea pagar las facturas?',
      message:
        'Estás a punto de realizar un pago total de <b>$650.75</b> a Tigo Business.',
      type: 'warning',
      accept: () => {},
      reject: () => {},
    } as ConfirmationMessage);

    fixture.detectChanges();
    await fixture.whenStable();

    await new Promise((resolve) => setTimeout(resolve, 200));

    const title = document.querySelector('h2');
    const message = document.querySelector('p');
    const iconComponent = document.querySelector('app-icon');

    expect(title?.textContent).toContain(
      '¿Está seguro que desea pagar las facturas?'
    );
    expect(message?.innerHTML).toContain('$650.75');
    expect(iconComponent?.getAttribute('ng-reflect-type-icon')).toBe('warning');
  });
});
