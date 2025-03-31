import { Routes } from '@angular/router';
import { PAYER_ROUTES } from './modules/payer/payer.routing';
import { APROBADORES_ROUTES } from '@modules/aprobadores/aprobadores.routes';

export const routes: Routes = [...PAYER_ROUTES, ...APROBADORES_ROUTES];
