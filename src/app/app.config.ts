import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { MyPreset } from './primeng.custom';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { routes } from './app.routes';
import { generalRequest } from '@core/interceptors/general-request.interceptor';
import { tokenInterceptor } from '@core/interceptors/token.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
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
    provideHttpClient(
      withInterceptors(
        [
          generalRequest,
          tokenInterceptor
        ]
      )
    )
  ]
};
