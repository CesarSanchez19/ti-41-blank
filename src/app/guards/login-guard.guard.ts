import { CanActivateFn, Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

export const loginGuardGuard: CanActivateFn = (route, state) => {
  const localStorageService = new LocalStorageService;
  const router = new Router();

  console.log('Login status -->', localStorageService.getItem('logedIn'));

  if (localStorageService.getItem('logedIn')) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
