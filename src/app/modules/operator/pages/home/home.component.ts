import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { DropdownModule } from 'primeng/dropdown';
import { ChipModule } from 'primeng/chip';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { ImgFallbackDirective } from '@shared/directives/img-fallback.directive';
import { SimpleTableComponent } from "@shared/components/simple-table/simple-table.component";

interface Payment {
  id: number;
  total: number;
  dueDate: string;
  description: string;
  contract: string;
  status: 'Pagadas'|'Pendientes'|'Vencidas';
  hasReceipt: boolean;
}

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    TableModule,
    PaginatorModule,
    DropdownModule,
    ChipModule,
    InputTextModule,
    ButtonModule,
    ImgFallbackDirective,
    SimpleTableComponent
],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']  
})
export class HomeComponent {
  payments: Payment[] = [ /* …datos… */ ];
  selectedPayments: Payment[] = [];

  statusOptions = [
    { label: 'Pagadas',   value: 'Pagadas',   severity: 'success' },
    { label: 'Pendientes',value: 'Pendientes',severity: 'warning' },
    { label: 'Vencidas',  value: 'Vencidas',  severity: 'danger' },
  ];

  statusMap: Record<string,string> = {
    Pagadas:   'success',
    Pendientes:'warning',
    Vencidas:  'danger'
  };

  download(row: Payment) {
    // lógica de descarga…
  }
}
