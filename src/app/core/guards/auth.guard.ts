import { inject } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateFn } from '@angular/router';
import { StoreService } from '@shared/services/store/store.service';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean | UrlTree => {
  const storeService = inject(StoreService);
  const router = inject(Router);

  // Obtener el token de los query params y de la sesión.
  const tokenFromQuery: string = route.queryParams['token'] ?? '';
  const tokenFromSession: string = storeService.getSession<string>('token') ?? '';

  // Si se recibe el token por query y aún no está en la sesión, lo almacenamos.
  if (tokenFromQuery && !tokenFromSession) {
    storeService.setSession('token', tokenFromQuery);
  }

  // Si se encontró token (ya sea en query o en sesión), se permite el acceso.
  if (tokenFromQuery || tokenFromSession) {
    return true;
  }

  // Si no hay token, se redirige a una página de "access denied" pasando la URL solicitada.
  return router.createUrlTree(['/access-denied'], {
    queryParams: { returnUrl: state.url },
  });
};
