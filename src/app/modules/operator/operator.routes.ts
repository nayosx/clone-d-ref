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
                path: ROUTES_PATH.OPERATOR_STEP1,
                loadComponent: () => import('./pages/step1-business/step1-business.component').then(m => m.Step1BusinessComponent),
            },
            {
                path: ROUTES_PATH.OPERATOR_STEP2,
                loadComponent: () => import('./pages/step2-collector/step2-collector.component').then(m => m.Step2CollectorComponent),
            },
            {
                path: ROUTES_PATH.OPERATOR_STEP3,
                loadComponent: () => import('./pages/step3-link-user/step3-link-user.component').then(m => m.Step3LinkUserComponent),
            },
            {
                path: ROUTES_PATH.OPERATOR_STEP4,
                loadComponent: () => import('./pages/step4-otp/step4-otp.component').then(m => m.Step4OtpComponent),
            },
        ]
    },
];