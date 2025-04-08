import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { MyPreset } from './primeng.custom';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { DialogService } from 'primeng/dynamicdialog';
import { ConfirmationService } from 'primeng/api';

export const appConfig: ApplicationConfig = {
  providers: [
    ConfirmationService,
    DialogService,
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG(
      {
        theme:
        {
        preset: MyPreset,
        options: {
            darkModeSelector: false || 'none'
          }
        }
    }),
    provideHttpClient()
  ]
};
