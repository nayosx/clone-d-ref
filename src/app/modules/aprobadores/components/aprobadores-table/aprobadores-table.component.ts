import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CheckboxComponent } from '@shared/components/checkbox/checkbox.component';
import { TagComponent } from '@shared/components/tag/tag.component';
import { CheckboxOption, CheckboxOptions } from '@shared/interfaces/checkbox';
import { CheckboxModule } from 'primeng/checkbox';
import { PaginatorModule } from 'primeng/paginator';
import { ProgressBarModule } from 'primeng/progressbar';
import { TableModule } from 'primeng/table';
import { EmptyMessageComponent } from '@aprobadores/components/empty-message/empty-message.component';
import { AppTableFiltersComponent } from '@aprobadores/components/table-filters/table-filters.component';
import { TabsTableComponent } from '@aprobadores/components/tabs-table/tabs-table.component';
import { PagosStateService } from '@aprobadores/services/pagos-state.service';
import { ButtonModule } from 'primeng/button';
import { DialogService } from 'primeng/dynamicdialog';
import { DetalleFacturaComponent } from '../detalle-factura/detalle-factura.component';

@Component({
  selector: 'app-aprobadores-table',
  imports: [
    TableModule,
    CheckboxModule,
    PaginatorModule,
    ProgressBarModule,
    TabsTableComponent,
    CheckboxComponent,
    CheckboxComponent,
    AppTableFiltersComponent,
    EmptyMessageComponent,
    TagComponent,
    ButtonModule,
  ],
  templateUrl: './aprobadores-table.component.html',
  styleUrl: './aprobadores-table.component.scss',
  providers: [DialogService],
})
export class AprobadoresTableComponent {
  private _dialogService = inject(DialogService);

  checkboxType = CheckboxOptions;
  @Input() value: any[] = [];
  @Input() loading: boolean = false;
  @Input() columns: { field: string; header: string }[] = [];
  @Input() rows = 10;
  @Input() totalRecords = 0;
  @Input() currentPage = 0;

  @Output() selectionChange = new EventEmitter<any[]>();

  readyToRender = false;
  CheckboxOptions = CheckboxOptions;

  private _pagosState = inject(PagosStateService);

  ngOnInit() {
    setTimeout(() => {
      this.readyToRender = true;
    }, 0);
  }

  isCheckboxColumn(field: string): field is CheckboxOption {
    return (
      field === CheckboxOptions.APROBRAR || field === CheckboxOptions.RECHAZAR
    );
  }

  isDetalle(field: string) {
    return field === 'detalles';
  }

  isStateColumn(field: string) {
    return field === 'estado';
  }

  getTypeTag(field: string) {
    return field === 'Pendiente' ? 'warning' : 'danger';
  }

  getCheckboxLabel(field: string): string {
    return field === CheckboxOptions.APROBRAR ? 'Aprobar' : 'Rechazar';
  }

  onCheckboxChange(
    event: { tipo: CheckboxOption; checked: boolean },
    pago: any
  ) {
    const { tipo, checked } = event;

    pago[tipo] = checked;

    if (checked) {
      const otroTipo = tipo === 'aprobar' ? 'rechazar' : 'aprobar';
      pago[otroTipo] = false;
    }

    if (!pago.aprobar && !pago.rechazar) {
      this._pagosState.quitarCambio(pago.id);
      return;
    }

    this._pagosState.guardarCambio(pago);
  }

  abrirDetalle() {
    this._dialogService.open(DetalleFacturaComponent, {
      style: { width: '80%', maxWidth: '600px' },
      modal: true,
      showHeader: false,
      data: {
        factura: {
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
        },
      },
    });
  }
}
