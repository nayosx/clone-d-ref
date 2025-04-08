import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { StoreService } from '@shared/services/store/store.service';
import { throwError } from 'rxjs/internal/observable/throwError';

const excludedPaths = ['/'];

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  if (excludedPaths.some(path => req.url.includes(path))) {
    console.log('Excluded path, skipping token interceptor:', req.url);
    return next(req);
  }
  const storeService = inject(StoreService);
  const token = storeService.getSession('token');
  if (token) {
    const clonedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(clonedReq);
  }
  return throwError(() => new Error('No token available'));
};
