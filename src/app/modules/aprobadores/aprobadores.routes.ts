import { Routes } from '@angular/router';
import { authGuard } from '@core/guards/auth.guard';
import { ROUTES_PATH } from '@core/routes';

export const APROBADORES_ROUTES = [
  {
    path: ROUTES_PATH.APROBADORES,
    loadComponent: () => import('./pages/pagos/pagos.component'),
    canActivate: [authGuard]
  },
] as Routes;
