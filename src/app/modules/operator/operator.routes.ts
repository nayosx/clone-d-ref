import {Routes} from '@angular/router';
import { ROUTES_PATH } from '@core/routes';
import { authGuard } from '@core/guards/auth.guard';

export const OPERATOR_ROUTES:Routes = [
    {
        path: ROUTES_PATH.OPERATOR_HOME,
        canActivateChild: [authGuard],
        children: [
            {
                path: '',
                loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
            },
            {
                path: ROUTES_PATH.OPERATOR_BUSINESS,
                loadComponent: () => import('./pages/business/business.component').then(m => m.BusinessComponent),
            },
            {
                path: ROUTES_PATH.OPERATOR_COLLECTORS,
                loadComponent: () => import('./pages/collector/collector.component').then(m => m.CollectorComponent),
            },
            {
                path: ROUTES_PATH.OPERATOR_LINKUP,
                loadComponent: () => import('./pages/link-up/link-up.component').then(m => m.LinkUpComponent),
            },
        ]
    },
];