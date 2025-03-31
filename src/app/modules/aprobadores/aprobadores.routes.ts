import { Routes } from '@angular/router';
import { ROUTES_PATH } from '@core/routes';

export const APROBADORES_ROUTES = [
  {
    path: ROUTES_PATH.APROBADORES,
    loadComponent: () => import('./pages/pagos/pagos.component'),
  },
] as Routes;
