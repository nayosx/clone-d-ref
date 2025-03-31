import {Routes} from '@angular/router';
import { ROUTES_PATH } from '../../core/routes';

export const PAYER_ROUTES:Routes = [
    {
        path: ROUTES_PATH.PAYER_HOME,
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    },
    {
        path: ROUTES_PATH.PAYER_BUSINESS,
        loadComponent: () => import('./pages/business/business.component').then(m => m.BusinessComponent),
    },
    {
        path: ROUTES_PATH.PAYER_COLLECTORS,
        loadComponent: () => import('./pages/collectors/collectors.component').then(m => m.CollectorsComponent),
    },
    {
        path: ROUTES_PATH.PAYER_LINKUP,
        loadComponent: () => import('./pages/link-up/link-up.component').then(m => m.LinkUpComponent),
    },
    {
        path: ROUTES_PATH.PAYER_AUTH,
        loadComponent: () => import('./pages/authenticate/authenticate.component').then(m => m.AuthenticateComponent),
    },
    {
        path: ROUTES_PATH.PAYER_DETAILS,
        loadComponent: () => import('./pages/payments/payments.component').then(m => m.PaymentsComponent),
    }
];