import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth';

// Släpper bara in inloggade. Övriga skickas till login med sidan de försökte nå.
export const authGuard: CanActivateFn = (_route, state) => {
  if (inject(AuthService).isLoggedIn()) {
    return true;
  }

  return inject(Router).createUrlTree(['/admin/login'], {
    queryParams: { returnUrl: state.url },
  });
};
