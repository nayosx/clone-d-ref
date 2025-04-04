import { Routes } from '@angular/router';
import { APROBADORES_ROUTES } from '@modules/aprobadores/aprobadores.routes';
import { AccessDeniedComponent } from '@modules/pages/access-denied/access-denied.component';
import { Error404Component } from '@modules/pages/error404/error404.component';
import { ROUTES_PATH } from '@core/routes';
import { ValidateComponent } from '@modules/pages/validate/validate.component';
import { authGuard } from '@core/guards/auth.guard';
import { OPERATOR_ROUTES } from '@modules/operator/operator.routes';

export const routes: Routes = [
    {
        path: '',
        component: ValidateComponent,
        canActivate: [authGuard]
    },
    {
        path: ROUTES_PATH.ACCESS_DENIED,
        component: AccessDeniedComponent
    },
    ...APROBADORES_ROUTES,
    ...OPERATOR_ROUTES,
    { path: '**', component: Error404Component }
];
