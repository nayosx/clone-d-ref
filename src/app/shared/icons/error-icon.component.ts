import { Component } from '@angular/core';

@Component({
  selector: 'app-error-icon',
  imports: [],
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Capa_2"
      data-name="Capa 2"
      viewBox="0 0 126 126"
    >
      <g id="Design">
        <path
          d="M63 0C28.21 0 0 28.21 0 63s28.21 63 63 63 63-28.21 63-63S97.79 0 63 0Zm0 118C32.67 118 8 93.33 8 63S32.67 8 63 8s55 24.67 55 55-24.67 55-55 55Z"
          class="cls-1"
        />
        <path
          d="M72.43 62.94 82.6 52.48a6.003 6.003 0 1 0-8.61-8.37L63.93 54.45l-10.2-10.2a6 6 0 0 0-8.48 0 6 6 0 0 0 0 8.48l10.31 10.31L45.39 73.5a6.003 6.003 0 0 0 4.3 10.19c1.5 0 3.12-.61 4.3-1.82l10.06-10.34 10.2 10.2a5.991 5.991 0 0 0 8.48 0 6 6 0 0 0 0-8.48L72.42 62.94Z"
          class="cls-1"
        />
      </g>
    </svg>
  `,
  styles: `
    .cls-1 {
            fill: #e1251b;
            stroke-width: 0;
          }
  `,
})
export class ErrorIconComponent {}
