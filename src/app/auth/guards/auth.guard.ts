import { CanActivateFn, Router } from '@angular/router'
import { inject } from '@angular/core'
import { AuthService } from '@auth/services/auth.service'

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
  const router = inject(Router)

  // Verifica si el usuario está autenticado
  if (authService.isAuthenticated()) {
    return true;
  } else {
    router.navigate(['/auth/login']);
    return false;
  }
};
