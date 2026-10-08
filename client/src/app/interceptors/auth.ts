import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../services/auth';

// Login-anropet ska inte få token, och en 401 där betyder bara fel lösenord.
const LOGIN_URL = '/api/admin/auth/login';

// Lägger till token på alla anrop till /api/admin. Övriga anrop skickas orörda.
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const token = authService.token();

  if (!token || !req.url.startsWith('/api/admin') || req.url === LOGIN_URL) {
    return next(req);
  }

  return next(req.clone({ setHeaders: { Authorization: `Bearer ${token}` } })).pipe(
    // Servern godkände inte token (t.ex. ny JWT_SECRET). Logga ut och skicka till login.
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        authService.logout();
        router.navigate(['/admin/login'], { queryParams: { returnUrl: router.url } });
      }
      return throwError(() => error);
    }),
  );
};
