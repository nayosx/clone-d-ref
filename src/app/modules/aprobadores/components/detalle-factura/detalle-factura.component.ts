import { Component, inject } from '@angular/core';
import { FacturaDetalle } from '@modules/aprobadores/interfaces/detalle-factura.interface';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-detalle-factura',
  imports: [ButtonModule],
  templateUrl: './detalle-factura.component.html',
  styleUrl: './detalle-factura.component.scss',
})
export class DetalleFacturaComponent {
  ref = inject(DynamicDialogRef);
  config = inject(DynamicDialogConfig);

  factura: FacturaDetalle = this.config.data.factura;

  cancelar() {
    this.ref.close(null);
  }
}
