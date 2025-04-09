import { Component, EventEmitter, inject, Output } from '@angular/core';
import { ConfirmDialogComponent } from '@shared/components/confirm-dialog/confirm-dialog.component';
import { InputDialogComponent } from '@shared/components/input-dialog/input-dialog.component';
import { ConfirmationMessage } from '@shared/interfaces/confirm-dialog.interface';
import { ConfirmationService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-tabs-table',
  imports: [ButtonModule, ConfirmDialogComponent],
  templateUrl: './tabs-table.component.html',
  styleUrl: './tabs-table.component.scss',
})
export class TabsTableComponent {
  private _confirmationService = inject(ConfirmationService);
  private _dialogService = inject(DialogService);
  @Output() onAprobar = new EventEmitter();

  // aplicar() {
  //   console.log('Aplicando');
  //   this.onAprobar.emit();
  // }

  aplicar() {
    const config: ConfirmationMessage = {
      title: '¿Está seguro que desea pagar las facturas?',
      message:
        'Estás apunto de realizar un pago total de  <b>$650.75</b> a Tigo Business. Esta acción no se puede deshacer ',
      acceptLabel: 'Pagar',
      rejectVisible: true,
      rejectLabel: 'Cancelar',
      type: 'warning',
      reverse: true,
      rejectButtonStyleClass: 'p-button-secondary custom-reject',

      accept: () => {
        console.log('Aceptar');
        setTimeout(() => {
          this.mensajePago();
        }, 0);
      },
      reject: () => {},
    };

    this._confirmationService.confirm(config);
  }

  mensajePago() {
    const config: ConfirmationMessage = {
      title: 'El pago fue realizado exitosamente',
      icon: 'pi pi-check-circle',
      acceptLabel: 'Pagar',
      rejectVisible: false,
      type: 'success',

      accept: () => {
        console.log('Confirmado');
      },
      reject: () => {},
    };

    this._confirmationService.confirm(config);
  }

  mesnsajeRechazar() {
    const config: ConfirmationMessage = {
      title: '¿Está seguro que desea rechazar las facturas?',
      message: 'Recuerda que esta acción no se puede deshacer ',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Si',
      rejectVisible: true,
      rejectLabel: 'No',
      type: 'error',
      reverse: true,
      rejectButtonStyleClass: 'p-button-secondary custom-reject',

      accept: () => {
        console.log('Rechazando...');
        this.reachazar();
      },
      reject: () => {},
    };

    this._confirmationService.confirm(config);
  }

  reachazar() {
    const ref = this._dialogService.open(InputDialogComponent, {
      style: { width: '80%', maxWidth: '600px' },
      modal: true,
      closeOnEscape: false,
      data: {
        icon: 'error',
        title: 'Advertencia',
        label: 'Escriba el motivo de su rechazo',
      },
    });

    ref.onClose.subscribe((valor) => {
      if (valor !== null && valor !== undefined) {
        console.log('Valor ingresado:', valor);
        this.mensajeConfirmacion();
      } else {
        console.log('Cancelado');
      }
    });
  }

  mensajeConfirmacion() {
    const config: ConfirmationMessage = {
      title: 'Mensaje enviado',
      message: 'a Oscar Rodriguez',
      type: 'send',
      acceptLabel: 'Validar y continuar',
      rejectVisible: false,

      accept: () => {
        console.log('Eviando...');
      },
      reject: () => {},
    };

    this._confirmationService.confirm(config);
  }
}
