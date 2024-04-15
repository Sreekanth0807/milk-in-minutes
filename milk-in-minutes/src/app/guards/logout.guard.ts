import { CanDeactivateFn } from '@angular/router';

export const logoutGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return true;
};
