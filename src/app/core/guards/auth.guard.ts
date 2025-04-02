// src/app/guards/auth.guard.ts
import { inject } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateFn } from '@angular/router';
import { AuthService } from '@shared/services/auth/auth.service';
import { StoreService } from '@shared/services/store/store.service';
import { Observable, of } from 'rxjs';
import { map, catchError, finalize } from 'rxjs/operators';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean | UrlTree | Observable<boolean | UrlTree> => {
  const storeService = inject(StoreService);
  const router = inject(Router);
  const authService = inject(AuthService);

  const tokenFromQuery: string = route.queryParams['token'] ?? '';
  const tokenFromSession: string = storeService.getSession<string>('token') ?? '';

  if (tokenFromQuery && !tokenFromSession) {
    storeService.setSession('token', tokenFromQuery);
  }

  if (tokenFromQuery && !tokenFromSession) {
    authService.setIsLoading(true);

    authService.setShowAllUI(true);
    return true;

    return authService.login({ tempToken: tokenFromQuery }).pipe(
      map(response => {
        authService.setShowAllUI(true);
        return true;
      }),
      catchError(error => {
        authService.setShowAllUI(false);
        return of(router.createUrlTree(['/access-denied'], {
          queryParams: { returnUrl: state.url }
        }));
      }),
      finalize(() => {
        authService.setIsLoading(false);
      })
    );
  }

  if (tokenFromQuery || tokenFromSession) {
    authService.setShowAllUI(true);
    authService.setIsLoading(false);
    return true;
  }

  authService.setShowAllUI(false);
  authService.setIsLoading(false);
  return router.createUrlTree(['/access-denied'], {
    queryParams: { returnUrl: state.url }
  });
};
