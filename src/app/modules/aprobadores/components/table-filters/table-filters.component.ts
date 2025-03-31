import { Component } from '@angular/core';
import { RadioComponent } from '@shared/components/radio/radio.component';
import { RadioOption } from '@shared/interfaces/radio.interface';

@Component({
  selector: 'app-table-filters',
  imports: [RadioComponent],
  templateUrl: './table-filters.component.html',
  styleUrl: './table-filters.component.scss',
})
export class AppTableFiltersComponent {
  tipo: string = '';

  radioOptions: RadioOption[] = [
    {
      color: 'gray',
      label: 'Todos los pagos',
      group: 'filter',
      value: 'pizza',
    },
    {
      color: 'green',
      label: 'Pagadas',
      group: 'filter',
      value: 'peper',
    },
    {
      color: 'yellow',
      label: 'Pagadas',
      group: 'filter',
      value: 'app-radio',
    },
    {
      color: 'pink',
      label: 'Pagadas',
      group: 'filter',
      value: 'b',
    },
  ];
}
