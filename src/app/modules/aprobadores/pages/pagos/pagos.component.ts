import { Component } from '@angular/core';
import { AprobadoresTableComponent } from '@modules/aprobadores/components/aprobadores-table/aprobadores-table.component';
import { InfoCardComponent } from '@shared/components/info-card/info-card.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-pagos',
  imports: [
    CardModule,
    InfoCardComponent,
    AprobadoresTableComponent,
    ButtonModule,
  ],
  templateUrl: './pagos.component.html',
  styleUrl: './pagos.component.scss',
})
export default class PagosComponent {
  title = 'Pagos';
  aprobadores = [];
  loading = false;
  columns = [
    { field: 'operador', header: 'Nombre del operador' },
    { field: 'rechazar', header: 'Rechazar' },
    { field: 'aprobar', header: 'Aprobar' },
    { field: 'pagoTotal', header: 'Pago total' },
    { field: 'pagoParcial', header: 'Pago parcial' },
    { field: 'estado', header: 'Eastado' },
    { field: 'descripcion', header: 'Descripción' },
    { field: 'detalles', header: 'Detalles' },
  ];
  rows = 10;
  totalRecords = 0;
  currentPage = 0;
  infoCards = [];
}
