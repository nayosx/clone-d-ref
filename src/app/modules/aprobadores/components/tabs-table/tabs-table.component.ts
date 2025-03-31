import { Component, EventEmitter, inject, Output } from '@angular/core';
import { ConfirmDialogComponent } from '@shared/components/confirm-dialog/confirm-dialog.component';
import { ConfirmationMessage } from '@shared/interfaces/confirm-dialog.interface';
import { ConfirmationService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-tabs-table',
  imports: [ButtonModule, ConfirmDialogComponent],
  templateUrl: './tabs-table.component.html',
  styleUrl: './tabs-table.component.scss',
})
export class TabsTableComponent {
  private _confirmationService = inject(ConfirmationService);
  @Output() onAprobar = new EventEmitter();

  // aplicar() {
  //   console.log('Aplicando');
  //   this.onAprobar.emit();
  // }

  aplicar() {
    const config: ConfirmationMessage = {
      title: 'Advertencia',
      message: '¿Estás seguro de <b>continuar</b>? ',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Aceptar',
      rejectLabel: 'Cancelar',
      type: 'success',
      reverse: true,
      rejectButtonStyleClass: 'p-button-secondary custom-reject',

      accept: () => {
        console.log('Aceptar');
      },
      reject: () => {},
    };

    this._confirmationService.confirm(config);
  }
}
