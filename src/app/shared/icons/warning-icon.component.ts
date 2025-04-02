import { Component } from '@angular/core';

@Component({
  selector: 'app-error-icon',
  imports: [],
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Capa_2"
      data-name="Capa 2"
      viewBox="0 0 119.96 106.01"
    >
      <g id="Design">
        <path
          d="M118.87 94.02 66.9 4c-1.44-2.5-4.03-4-6.92-4s-5.48 1.49-6.92 4L1.08 94.02a7.882 7.882 0 0 0 0 7.99c1.45 2.5 4.03 4 6.92 4h103.95c2.89 0 5.48-1.49 6.92-4a7.929 7.929 0 0 0 0-7.99Zm-110.86 4L59.97 8l51.98 90.01H8.01Z"
          class="cls-1"
        />
        <path d="M56.98 77.01h6l2-38h-10l2 38z" class="cls-1" />
        <circle cx="60.48" cy="84.51" r="4.5" class="cls-1" />
      </g>
    </svg>
  `,
  styles: `
     .cls-1 {
            fill: #252525;
            stroke-width: 0;
          }
  `,
})
export class WarningIconComponent {}
